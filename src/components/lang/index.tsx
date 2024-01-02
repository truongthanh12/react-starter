import { useState } from "react";
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
    <div className="flex items-center space-x-2">
      <label htmlFor="lang-mode" className="cursor-pointer">
        <span className="sr-only">Change language</span>
        <input
          type="checkbox"
          id="lang-mode"
          checked={currentLanguage === "vi"}
          onChange={changeLanguage}
          className="cursor-pointer appearance-none rounded-full h-6 w-10 bg-gray-200 checked:bg-blue-600 relative shadow-inner after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-transform after:duration-300 after:ease-in-out checked:after:transform checked:after:translate-x-4"
        />
      </label>
      <span className="uppercase">{currentLanguage}</span>
    </div>
  );
};
