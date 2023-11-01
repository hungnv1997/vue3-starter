import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
import ja from "../lang/ja.json";
export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "en",
  fallbackLocale: "ja",
  messages: {
    en: en,
    ja: ja,
  },
});
