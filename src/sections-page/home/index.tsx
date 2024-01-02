import { memo } from "react";
import Banner from "./Banner";
import PromotionInfo from "./PromotionInfo";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <Banner />
      </div>
      <div className="">
        <PromotionInfo />
      </div>
      {/* <div className="bg-green-200">Item 3</div>
      <div className="bg-yellow-200">Item 4</div> */}
    </div>
  );
};

export default memo(Home);
