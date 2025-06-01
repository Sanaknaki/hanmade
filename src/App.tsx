import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductWithInfoBlur from "./components/ProductWithInfoBlur";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

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
            onHoverAction={() => {
              window.open("https://instagram.com/hanmade.kr", "_blank");
            }}
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
      <Footer />
    </div>
  );
};

export default App;
