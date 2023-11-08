import { useToast } from "../../components/ui/use-toast";
import { Button } from "../../@/components/ui/button";
import { useTranslation } from "react-i18next";

const ShowToastButton = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "React Starter: Started",
          description: "Tuesday, November 7, 2023 at 11:40 PM",
        });
      }}
    >
      {t("home:show__toast")}
    </Button>
  );
};

export { ShowToastButton };
