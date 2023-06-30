import Head from "next/head";
import HomeSection from "@/src/Components/Home/Home/Home";
import HomeLayout from "@/src/Layouts/HomeLayout";
import ChatLayout from "@/src/Layouts/ChatLayout";
import LogoImage from "../src/Assets/VintageDealersLogo.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Vintage Car Dealer</title>
        <meta
          name="description"
          content="Vintage Car Dealer is a platform where you can buy and sell vintage cars."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={LogoImage} />
        
      </Head>
      <main>
        <HomeLayout>
        <ChatLayout> 
          <HomeSection />
        </ChatLayout>
        </HomeLayout>
      </main>
    </>
  );
}
