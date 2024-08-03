import { Modern_Antiqua, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const modernAntique = Modern_Antiqua({
  weight: "400",
  subsets: ["latin"],
});
