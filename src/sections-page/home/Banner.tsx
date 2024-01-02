import Image from "@/components/ui/image";
import BannerImage from "@app/assets/images/banner.svg"

const Banner = () => {
  return (
    <Image
      src={BannerImage}
      alt="banner"
      className="w-full h-[300px] object-cover"
    />
  );
};

export default Banner;
