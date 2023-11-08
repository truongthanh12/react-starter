import { useState } from "react";
import { Switch } from "../../@/components/ui/switch";
import { Label } from "../../@/components/ui/label";
import i18n from "i18next";

export const LangSwitch = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language.substring(0, 2)
  );

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "vi" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2 w-20">
      <Switch
        checked={i18n.language === "vi"}
        id="lang-mode"
        onClick={changeLanguage}
      />
      <Label className="uppercase" htmlFor="lang-mode">
        {currentLanguage}
      </Label>
    </div>
  );
};
