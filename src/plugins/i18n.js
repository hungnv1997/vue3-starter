import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
import vi from "../lang/vi.json";
export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "vi",
  fallbackLocale: "vi",
  messages: {
    en: en,
    vi: vi,
  },
});
