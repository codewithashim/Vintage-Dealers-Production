import { DataContextApi } from "@/src/Context/DataContext";
import { useContext } from "react";

const SuggetionNameCategory = ({
  rref,
  productData,
  setIsVisible,
  setSQuery,
  selectedSuggestionIndex,
  handleSuggestionClick,
  selectedRef,
}) => {
  const { setSearchVal } = useContext(DataContextApi);

  const defaultSuggestionBoxStyle = {
    backgroundColor: "white",
    overflow: "auto",
    zIndex: "8",
    maxHeight: "170px",
    padding: "10px 0px",
    color: "black",
    position: "absolute",
    width: "100%",
    textAlign: "left",
    shadow: "10px 5px black",
    borderRadius: "5px",
  };

  return (
    <div
      ref={rref}
      className=" absolute right-0 left-0 top-[64px] w-full shadow-md shadow-black"
    >
      <div
        style={
          defaultSuggestionBoxStyle
            ? defaultSuggestionBoxStyle
            : defaultSuggestionBoxStyle
        }
      >
        {productData?.map((val, Index) => {
          return (
            <p
              key={Index}
              ref={Index === selectedSuggestionIndex ? selectedRef : null}
              className={
                Index === selectedSuggestionIndex
                  ? "text-black cursor-pointer px-5 py-1 overflow-y-scroll hover:bg-red-10 hover:text-gray-400 text-[16px] font-bold bg-[#b5b3b3]"
                  : "text-black cursor-pointer px-5 py-1 hover:bg-red-10 hover:text-gray-400 text-[16px] font-bold"
              }
              onClick={() => {
                setSQuery(val);
                setSearchVal(val);
                setIsVisible(false);
                () => handleSuggestionClick(val);
              }}
            >
              {val}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SuggetionNameCategory;
