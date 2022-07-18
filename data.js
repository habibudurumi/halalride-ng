/** @format */

import { AiFillSafetyCertificate, AiFillSetting } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import Google from "./public/assets/google-play.png";
import Apple from "./public/assets/apple.png";

export const data = [
  {
    id: 1,
    head: "mission",
    body: "Inspired by Faith, values and technology to create unparalleled customer experience through service and product delivery.",
  },
  {
    id: 2,
    head: "vision",
    body: "Redefining the contemporary Corporate environment, as a place of physical wealth and eternal profitability, for now & generations unborn.",
  },
  {
    id: 3,
    head: "objectives",
    body: "To be the most trusted and reliable means of local transportation through the use of technology, for enhanced efficiency, accessibility, adaptability.",
  },
];
export const info = [
  {
    icon: <AiFillSetting />,
    head: "efficient",
    text: "A fast, efficient and on demand tricycle equest at your palm",
  },
  {
    icon: <AiFillSafetyCertificate />,
    head: "secured",
    text: "A fast, efficient and on demand tricycle equest at your palm",
  },
  {
    icon: <FaMedal />,
    head: "Accessible",
    text: "A fast, efficient and on demand tricycle equest at your palm",
  },
];

export const img = [
  { url: "https://google.com", name: Google },
  { url: "https://apple.com", name: Apple },
];

export const stats = [
  { number: "25+", text: "trained staff" },
  { number: "100+", text: "professional riders" },
  { number: "1k+", text: "app users" },
];
