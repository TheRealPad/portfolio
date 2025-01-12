import i18n from "i18next";

import { Language } from "./languages";
import { storageName } from "./index";

function updateLanguage(language: Language) {
  i18n.changeLanguage(language);
  localStorage.setItem(storageName, language);
}

export { updateLanguage };