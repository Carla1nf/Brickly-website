import { UseLenguage } from "@/context/CheckoutIndex";
import translations from "@/translations/translate.json";

export const translateText = ({ text }: { text: string }) => {
  const currentLenguage = UseLenguage();

  if (currentLenguage == "EN") {
    return (translations[0].EN as any)[text] as string;
  }

  return text;
};
