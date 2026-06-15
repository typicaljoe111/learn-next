import { Mulish, Space_Grotesk } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export { mulish, space_grotesk };
