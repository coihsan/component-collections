import { ChevronUp } from "lucide-react";

type DropdownItem = {
  pathname: string;
  image: string;
  title: string;
  description: string;
};
interface navlinkType {
  key: number;
  pathname: string;
  text: string;
  icon?: JSX.Element;
  DropdownItem?: DropdownItem[];
}
export const navlink: navlinkType[] = [
  {
    key: 0,
    pathname: "/",
    text: "Home",
  },
  {
    key: 1,
    pathname: "/",
    icon: <ChevronUp />,
    text: "Services",
    DropdownItem: [
      {
        pathname: "/",
        image: "/",
        title: "Home",
        description: "Lorem",
      },
      {
        pathname: "/",
        image: "/",
        title: "Apartment",
        description: "Lorem",
      },
      {
        pathname: "/",
        image: "/",
        title: "Business",
        description: "Lorem",
      },
    ],
  },
  {
    key: 2,
    pathname: "/",
    text: "Product",
    DropdownItem: [
      {
        pathname: "/",
        image: "/",
        title: "Home Internet",
        description: "Lorem",
      },
    ],
  },
  {
    key: 3,
    pathname: "/",
    text: "Promotion",
  },
  {
    key: 4,
    pathname: "/",
    text: "News",
  },
  {
    key: 5,
    pathname: "/",
    text: "About Us",
  },
];
