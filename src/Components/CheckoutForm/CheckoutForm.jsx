import { DataContextApi } from "@/src/Context/DataContext";
import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";

const CheckoutForm = ({ productByIdData }) => {
  const { baseUrl } = useContext(DataContextApi);

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
      console.log("RESPONSE ", res);
      const { status } = res;
      console.log("STATUS ", status);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center">
        <StripeCheckout
          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_PK}
          token={makePayment}
          name={productByIdData?.map((item) => item?.productName)}
          amount={productByIdData?.map((item) => item?.productPrice * 100)}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pay Now
          </button>
        </StripeCheckout>
      </div>
    </section>
  );
};

export default CheckoutForm;
