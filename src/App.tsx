import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductWithInfoBlur from "./components/ProductWithInfoBlur";
import SplashScreen from "./components/SplashScreen";
import ProductInfoModal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const incenseChamberInfo = {
    title: "Maker Incense Chamber",
    description: (
      <>
        This ceramic incense chamber was designed off of my first Art Toy
        character "The Insider" of the Maker collection. Each chamber is
        individually hand painted and brushed before glaze firing. This allows
        each chamber to have its own unique stroke of blue gradient textures.
        The smoke holes around the hoodie, nostrils and mouth will definitely
        create a vibe.
        <br />
        <br />
        20pcs Limited Edition - Purchase is open for 3 weeks until 6.26.2025
        11:59pm EST
        <br />
        <br />
        Made in Korea in collaboration with Eachike
        <br />
        <br />
        한국 국내 구매 안내는 Instagram DM 및 hanmade.kr@gmail.com 으로
        가능합니다!
      </>
    ),
    images: [
      "https://i.imgur.com/KXamAGt.gif",
      "https://i.imgur.com/0Rkv8OH.jpeg",
      "https://i.imgur.com/1mmfAQp.jpeg",
      "https://i.imgur.com/vUJinIg.jpeg",
    ],
    materials: "Ceramics",
    shipping: (
      <>
        Once order closes / product is sold out, production and packaging will
        begin, which can take 1~3 months. After production + packaging is
        complete, shipments will go out in 1-2 weeks.
        <br />
        국내 배송 안내는 구매하신 주소로 안내 연락 드리겠습니다!
      </>
    ),
    dimensions: "13cm x 16cm x 21cm (X,Y, Z)",
  };

  const handleBuyNow = () => {
    window.open("https://instagram.com/hanmade.kr", "_blank");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-white">
      <SplashScreen onVisibilityChange={setIsSplashVisible} />
      <Navbar />
      <div
        className={`my-10 flex flex-col w-full gap-10 h-full flex-1 items-center justify-center px-4 ${
          isSplashVisible ? "pointer-events-none" : ""
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 w-full items-center justify-center">
          <ProductWithInfoBlur
            category="Maker"
            koreanCategory="메이커"
            title="Incense Chamber"
            koreanTitle="인센스 챔버"
            imageUrl="https://i.imgur.com/WNvK8QN.png"
            available
            onView={() => setModalOpen(true)}
          />
          <ProductWithInfoBlur
            category="Maker"
            koreanCategory="메이커"
            title="The Insider"
            koreanTitle="인싸"
            imageUrl="https://i.imgur.com/eG4iIeH.png"
            available={false}
          />

          <ProductWithInfoBlur
            category="Maker"
            koreanCategory="메이커"
            title="The Contestant"
            koreanTitle="참가자"
            imageUrl="https://i.imgur.com/s8M5GNm.png"
            available={false}
          />

          <ProductWithInfoBlur
            category="Maker"
            koreanCategory="메이커"
            title="The Outsider"
            koreanTitle="아싸"
            imageUrl="https://i.imgur.com/32LoDsq.png"
            available={false}
          />
        </div>
      </div>
      <ProductInfoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={incenseChamberInfo.title}
        description={incenseChamberInfo.description}
        images={incenseChamberInfo.images}
        materials={incenseChamberInfo.materials}
        shipping={incenseChamberInfo.shipping}
        dimensions={incenseChamberInfo.dimensions}
        onAction={handleBuyNow}
        actionLabel="BUY NOW"
      />
      <Footer />
    </div>
  );
};

export default App;
