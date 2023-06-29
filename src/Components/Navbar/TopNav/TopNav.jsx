import { AuthContext } from "@/src/Context/UserContext";
import { DataContextApi } from "@/src/Context/DataContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPowerOff, FaUserAlt, FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useAdmin from "@/src/Hooks/useAdmin";
import SuggetionNameCategory from "@/src/Shared/SuggetionNameCategory/SuggetionNameCategory";
import LogoImage from "../../../Assets/Logo.png";

const TopNav = () => {
  const dropDownRef = useRef(null);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const router = useRouter();
  const { baseUrl, setSearchVal } = useContext(DataContextApi);

  ///////////////////////////////////////////////
  //           Search section start           //
  /////////////////////////////////////////////*/
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [val, setVal] = useState("");
  const productRef = useRef(null);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/productSearch?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        const resultData = data?.data;

        if (searchTerm === "") {
          setSearchData([]);
          setSearchVal([]);
        } else {
          setSearchData(data?.data);
          setSearchVal(data?.data);
          localStorage.setItem("searchRes", JSON.stringify(resultData));
        }
      });
  }, [baseUrl, searchTerm, setSearchVal]);

  const productName = searchData?.map((n) => n.productName);
  const productCategory = searchData?.map((n) => n.productCategory);
  const productBrand = searchData?.map((n) => n.productBrand);

  const suggestDataH = productName?.concat(productCategory);
  const suggestData = suggestDataH?.concat(productBrand) || [];

  const newArr = suggestData?.filter((n) =>
    n.toLowerCase().startsWith(searchTerm[0])
  );
  const arrS = suggestData?.filter(
    (n) => !n.toLowerCase().startsWith(searchTerm[0])
  );
  const arr2 = [...arrS].sort();

  const arr3 = newArr.concat(arr2);
  const arr4 = arr3.filter((item, i, arr) => i === arr.indexOf(item));

  const suggestionInfo = arr4.filter((text) =>
    text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handelSerch = (e) => {
    e.preventDefault();
    if (suggestionInfo.length === 0) {
      alert("Sorry..., No service available in this area");
    }

    if (searchTerm) {
      router.push("/seach_result");
    } else {
      setSearchTerm("");
      localStorage.removeItem("searchRes");
    }
  };

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const selectedRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      // User pressed the up arrow key
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex <= 0 ? suggestionInfo.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      // User pressed the down arrow key
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex >= suggestionInfo.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < suggestionInfo.length
      ) {
        setSearchTerm(suggestionInfo[selectedSuggestionIndex]);
        setSelectedSuggestionIndex(-1);
        setIsVisible(false);
      }
    } else if (event.key === "Tab") {
      if (
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < suggestionInfo.length
      ) {
        setSearchTerm(suggestionInfo[selectedSuggestionIndex]);
        setSelectedSuggestionIndex(-1);
        setIsVisible(false);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSelectedSuggestionIndex(-1);
  };

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedSuggestionIndex]);

  ///////  End of Search section start  ////////

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Logout Done !",
          iconColor: "#ED1C24",
          toast: true,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInRight",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight",
          },
          customClass: {
            confirmButton: "blue",
          },
          showConfirmButton: false,
          timer: 3500,
        });
        localStorage.removeItem("user-uid");
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something warn!",
          confirmButtonColor: "#0077b6",
        });
      });
  };

  return (
    <nav>
      <div className="hidden md:flex md:justify-between md:items-center sm:hidden md:w-[100%] z-10">
        <div className="logoPart">
          <Link
            href="/"
            aria-label="Vintage Dealers"
            title="Vintage Dealers"
            className="inline-flex items-center "
          >
            <Image alt="logo" src={LogoImage} width={300} height={150} />
          </Link>
        </div>
        <div className="searchPart">
          <div className="inputSearchTopNav w-full flex justify-around ">
            <form onSubmit={handelSerch}>
              <div className="relative">
                <div className="inputSearchTopNav w-full flex justify-around ">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSelectedSuggestionIndex(-1);
                      setIsVisible(true);
                      setVal(e.target.value);
                      if (e.target.value === "") {
                        setIsVisible(false);
                        setSearchTerm("");
                        localStorage.removeItem("searchRes");
                      }
                    }}
                    className="input searchInput w-11/12 text-sm bg-inherit hero-text h-12  px-4  outline-none "
                    autoComplete="off"
                    onKeyDown={handleKeyDown}
                    reff={productRef}
                    placeholder="Search Now"
                    name="search"
                    onClick={() => {
                      setIsVisible(!isVisible);
                      setVal("");
                    }}
                  />
                  <button className="commonBtn" type="submit">
                    Search
                  </button>
                </div>

                {isVisible && (
                  <div>
                    {suggestionInfo?.length > 0 && searchTerm != "" && (
                      <SuggetionNameCategory
                        rref={productRef}
                        productData={suggestionInfo}
                        setIsVisible={setIsVisible}
                        setSQuery={setSearchTerm}
                        selectedSuggestionIndex={selectedSuggestionIndex}
                        handleSuggestionClick={handleSuggestionClick}
                        selectedRef={selectedRef}
                        val={val}
                        setVal={setVal}
                      />
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="profilePart">
          {!user ? (
            <div className="text-2xl">
              <Link
                className="commonBtn flex justify-center items-center gap-2"
                href="/auth/login"
              >
                <FaUserAlt></FaUserAlt> Login
              </Link>
            </div>
          ) : (
            <>
              <button
                className="bg-[#f92654] border border-white relative h-12 w-12 text-sm font-bold text-[1.6rem] rounded-lg hidden lg:block"
                onClick={() => setdropdownOpen(!dropdownOpen)}
              >
                {user?.displayName?.charAt(0)}
              </button>
              <div
                ref={dropDownRef}
                className={`${
                  dropdownOpen
                    ? `top-20 opacity-100 visible`
                    : "top-[90%] invisible opacity-0"
                } absolute xl:w-[20%] lg:w-[25%] xxs:w-[34%] lg:right-[3.2%] md:right-[0%] z-40 -mt-2 px-1.5 rounded-lg border border-slate-300 bg-[#f7fbfd] py-2 shadow-inner transition-all`}
              >
                <div className="rounded-lg px-3 border border-slate-300 shadow-inner bg-[#daf4fb]">
                  <h1 className="font-bold my-2">{user?.email}</h1>
                </div>
                <hr />

                {isAdmin && (
                  <>
                    <Link
                      href="/dashboard"
                      className="flex gap-2 items-center my-2 rounded-lg px-3 py-2.5 shadow-inner text-sm border border-slate-300  bg-[#daf4fb]"
                    >
                      {" "}
                      <FaUsersCog></FaUsersCog> Dashboard
                    </Link>
                  </>
                )}

                <button
                  className=" items-center rounded-lg mt-2 px-3 py-2.5 text-sm border shadow-inner border-slate-300  bg-[#daf4fb] flex flex-row w-full gap-2"
                  onClick={() => handleLogout()}
                >
                  <FaPowerOff></FaPowerOff>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* =============== for mobile device================= */}
      <div className="flex flex-col xl:hidden lg:hidden md:hidden md:items-center mx-4 z-10">
        <div className="flex justify-between items-center gap-4 ">
          <div className="logoPart">
            <Link
              href="/"
              aria-label="Vintage Dealers"
              title="Vintage Dealers"
              className="inline-flex items-center "
            >
              <Image alt="logo" src={{ LogoImage }} width={100} height={80} />
            </Link>
          </div>
          <div className="profilePart">
            {!user ? (
              <div className="text-2xl">
                <button className="commonBtn flex justify-center items-center gap-2">
                  <FaUserAlt></FaUserAlt> Login
                </button>
              </div>
            ) : (
              <>
                <button
                  className="bg-[#f92654] border border-white relative h-12 w-12 text-sm font-bold text-[1.2rem] rounded-lg hidden lg:block"
                  onClick={() => setdropdownOpen(!dropdownOpen)}
                >
                  {user?.displayName?.charAt(0)}
                </button>
                <div
                  ref={dropDownRef}
                  className={`${
                    dropdownOpen
                      ? `top-20 opacity-100 visible`
                      : "top-[90%] invisible opacity-0"
                  } absolute xl:w-[20%] lg:w-[25%] xxs:w-[34%] lg:right-[3.2%] md:right-[0%] z-40 -mt-2 px-1.5 rounded-lg border border-slate-300 bg-[#f7fbfd] py-2 shadow-inner transition-all`}
                >
                  <div className="rounded-lg px-3 border border-slate-300 shadow-inner bg-[#daf4fb]">
                    <h1 className="font-bold my-2">{user?.email}</h1>
                  </div>
                  <hr />

                  {isAdmin && (
                    <>
                      <Link
                        href="/dashboard"
                        className="flex gap-2 items-center my-2 rounded-lg px-3 py-2.5 shadow-inner text-sm border border-slate-300  bg-[#daf4fb]"
                      >
                        {" "}
                        <FaUsersCog></FaUsersCog> Dashboard
                      </Link>
                    </>
                  )}

                  <button
                    className=" items-center rounded-lg mt-2 px-3 py-2.5 text-sm border shadow-inner border-slate-300  bg-[#daf4fb] flex flex-row w-full gap-2"
                    onClick={() => handleLogout()}
                  >
                    <FaPowerOff></FaPowerOff>
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="searchPart">
          <div className="inputSearchTopNav w-full flex justify-around ">
            <input
              type="text"
              className="input searchInput w-11/12 text-sm bg-inherit hero-text h-12  px-4  outline-none "
            />
            <button className="commonBtn">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
