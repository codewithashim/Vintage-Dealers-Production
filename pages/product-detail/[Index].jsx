import { DataContextApi } from "@/src/Context/DataContext";
import { AuthContext } from "@/src/Context/UserContext";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import TestDriveModal from "@/src/Shared/TestDriveModal/TestDriveModal";
import { Divider } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";

const Index = () => {
  const { baseUrl } = useContext(DataContextApi);
  const router = useRouter();
  const { Index } = router.query;
  const productId = Index;
  const [productByIdData, setProductByIdData] = useState([]);
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetch(`${baseUrl}/api/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductByIdData(data?.data);
      });
  }, [productId]);

  if (productByIdData && productByIdData?.length > 0) {
  } else {
    console.log("productByIdData is undefined or empty");
    // Handle the case where productByIdData is undefined or empty
  }

  const productName = productByIdData?.[0]?.productName;
  const productPrice = productByIdData?.[0]?.productPrice;
  const paymentProductId = productByIdData?.[0]?._id;
  // Rest of your code
  const makePayment = async (token) => {
    const body = {
      token,
      product: productByIdData,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await fetch(`${baseUrl}/api/payment-intent`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      const { status } = res;

      if (status === 200) {
        const paymentDetails = {
          paymentId: token.id,
          paymentAmount: productPrice,
          paymentStatus: "success",
          paymentMethod: "stripe",
          paymentDate: new Date(),
          paymentProduct: productName,
          paymentUser: user?.email,
          customerName: user?.displayName,
          productId: paymentProductId,
        };

        const saveInDB = await fetch(`${baseUrl}/api/payment`, {
          method: "POST",
          headers,
          body: JSON.stringify(paymentDetails),
        });
        const { status } = saveInDB;

        if (status === 200) {
          // Send invoice email
          const emailData = {
            to: user?.email,
            subject: "Invoice for your payment",
            body: "Here is your invoice for the payment. Thank you for your purchase!",
            attachments: [
              {
                filename: "invoice.pdf",
                path: `${baseUrl}/api/invoice/${paymentProductId}`,
                contentType: "application/pdf",
              },
            ],
          };

          const sendInvoiceEmail = await fetch(`${baseUrl}/api/send-email`, {
            method: "POST",
            headers,
            body: JSON.stringify(emailData),
          });

          const { status: emailStatus } = sendInvoiceEmail;
          if (emailStatus === 200) {
            console.log("Invoice email sent successfully!");
          } else {
            console.log("Failed to send invoice email");
          }

          console.log("Payment Details Saved in DB");
          Swal.fire({
            position: "center",
            timerProgressBar: true,
            title: "Successfully Payment Done!",
            iconColor: "#ED1C24",
            toast: true,
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });

          router.push(`/payment/${paymentProductId}`);
        }
      }
    } catch (err) {
      return Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Somthing wento wrang !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };

  if (!productId) {
    return (
      <p className="flex justify-center items-center text-2xl ">Loading...</p>
    );
  }

  return (
    <MainLayout>
      <ChatLayout>
        <section className="my-8">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Product Details
            </h2>
          </div>
          <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
            {productByIdData &&
              productByIdData.length &&
              productByIdData?.map((product) => {
                return (
                  <div>
                    <Image
                      src={product?.productImage}
                      alt={product?.productName}
                      width={500}
                      height={500}
                    />

                    <div className="cardButton my-4">
                      <div className="productAddToCart flex gap-5 items-center">
                        <div>
                          <StripeCheckout
                            stripeKey={
                              process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_PK
                            }
                            token={makePayment}
                            name={product?.productName}
                            amount={product?.productPrice * 100}
                            description={product?.productDescription}
                            image={product?.productImage}
                          >
                            <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                              <FaCartPlus />
                              Buy Now
                            </button>
                          </StripeCheckout>
                        </div>

                        <div>
                          <button
                            className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white"
                            onClick={toggleModal}
                          >
                            <FaCartPlus />
                            Test Drive
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                              <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Car Name :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.productName}
                                  </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Price :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.productPrice}
                                  </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Brand :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.productBrand}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Category :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.productCategory}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Product Type :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.productType}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Fuel Type :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.fuelType}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    CC Engine :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.ccEngine}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Era :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.era}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Speed :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.speed}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Tank :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.tank}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Era :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.era}
                                  </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    Era :
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {product?.era}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cardBody__details my-4">
                      <Divider className="my-8" />
                      <p className="cardBody__details__description">
                        {product?.productDescription}
                      </p>
                    </div>
                    <TestDriveModal
                      isModalOpen={isModalOpen}
                      toggleModal={toggleModal}
                      product={product}
                    />
                  </div>
                );
              })}
          </div>
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
