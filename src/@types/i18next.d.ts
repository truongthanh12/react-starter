import { resources, defaultNS } from "../../i18n";
import homeTranslation from "../../app/locales/en/translations.json";
import authTranslation from "../../app/locales/en/translationsAuth.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
    home: typeof homeTranslation;
    auth: typeof authTranslation;
  }
}
