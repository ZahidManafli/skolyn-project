import { renderToStaticMarkup } from "react-dom/server";
import az from "./az";
import en from "./en";
import ru from "./ru";
import type { ILang } from "./lang";
import { useStore } from "../../app/store.config";

const langs: Record<ILang, typeof az> = { az, en, ru };

export const useLocalization = () => {
  const locale = (useStore("locale") as typeof az | typeof en | typeof ru | undefined) || az;

  return (key: keyof typeof az | keyof typeof en | keyof typeof ru, dynamicValues: any = {}) => {
    if (!locale) return key; // locale hələ yüklənməyibsə açarı qaytar

    let formattedText: string | React.ReactElement = (locale[key] as string) || key;

    Object.keys(dynamicValues).forEach((dynamicKey) => {
      const dynamicValue = dynamicValues[dynamicKey];

      if (typeof dynamicValue === "string") {
        formattedText = (formattedText as string).replace(`{${dynamicKey}}`, dynamicValue);
      } else {
        const jsxString = renderToStaticMarkup(dynamicValue);
        formattedText = <div dangerouslySetInnerHTML={{ __html: (formattedText as string).replace(`{${dynamicKey}}`, jsxString) }} />;
      }
    });

    return formattedText;
  };
};

export default useLocalization;
