import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import FloatingLabelInput from "@/components/ui/input/FloatingLabelInput";
import { cn } from "@/utils/helper";
import BannerImage from "@app/assets/images/banner.svg";
import styles from "./Style.module.scss";

const PromotionInfo = () => {
  return (
    <div className={cn("space-y-2 md:space-y-4", styles["promotion-info"])}>
      <div className="max-h-[205px] overflow-hidden">
        <Image src={BannerImage} alt="promotion" />
      </div>
      <div className="flex w-[71%] mx-auto space-x-2">
        <FloatingLabelInput label="Promotion code" type="text" />
        <Button>Apply</Button>
      </div>
      <ol
        className={cn(
          "text-sm list-disc px-4 overflow-y-auto max-h-[135px] overscroll-none scrollbar-custom",
          styles["scrollbar-custom"]
        )}
      >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 3</li>
      </ol>
    </div>
  );
};

export default PromotionInfo;
