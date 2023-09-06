import {
  home,
  profile_icon,
  category_icon,
  store_icon,
  home_icon,
  promotionlady,
  grocery,
  phone,
  restaurant,
} from "../../images";

const navLinks = [
  {
    name: "Home",
    link: "/",
    icons: home_icon,
  },
  {
    name: "Category",
    link: "/category",
    icons: category_icon,
  },
  {
    name: "Stores",
    link: "/stores",
    icons: store_icon,
  },
  {
    name: "Profile",
    link: "/profile",
    icons: profile_icon,
  },
];

const offerCard = [
  {
    id: 1,
    img: promotionlady,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
  {
    id: 2,
    img: promotionlady,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
  {
    id: 3,
    img: promotionlady,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
];

const pointOptions = [
  {
    img: phone,
    text: "airtime & data",
    background: "#F9EFFD",
    color: "#7C3C7D",
  },
  {
    img: phone,
    text: "Gift cards",
    background: "#F9EFFD",
    color: "#7C3C7D",
  },
  {
    img: phone,
    text: "Plenti vouchers",
    background: "#F9EFFD",
    color: "#7C3C7D",
  },
  {
    img: phone,
    text: "refer a friend",
    background: "#F9EFFD",
    color: "#7C3C7D",
  },
];

const cate =[
  {
  
    img:grocery,
    text:' Groceries & Food Items'
  },
  {
  
    img:restaurant,
    text:' Restaurant & Bars'
  },
  {
  
    img:grocery,
    text:' Fashion & Apparel'
  },
]

export { navLinks, offerCard, pointOptions ,cate };
