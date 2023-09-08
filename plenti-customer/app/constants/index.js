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
  cart1,
  cart2,
  cart3,
  cart4,
  cart5,
  cart6,
  cart7,
  cart8,
  brand1,
  brand2,
  brand3,
  deal
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

const dealCard = [
  {
    id: 1,
    img: deal,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    Availabity: "offer available in all branches",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
  {
    id: 2,
    img: deal,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    Availabity: "offer available in all branches",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
  {
    id: 3,
    img: deal,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    Availabity: "offer available in all branches",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
  },
  {
    id: 4,
    img: deal,
    offer: "Buy Off-shoulder Sleeve Sweater Dress",
    Availabity: "offer available in all branches",
    endDate: "2023-10-7",
    percentCashback: "Earn ₦3,000 cashbac",
    remainingDays: 0,
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

const cate = [
  {
    img: grocery,
    text: " Groceries & Food Items",
  },
  {
    img: restaurant,
    text: " Restaurant & Bars",
  },
  {
    img: grocery,
    text: " Fashion & Apparel",
  },
];

const category_brands = [
  {
    id: 1,
    img: cart1,
    text:'Beauty & personal care'
  },
  {
    id: 2,
    img: cart2,
    text:'Electronics & Gadgets'
  },
  {
    id: 3,
    img: cart3,
    text:'Real Estate & Property'
  },
  {
    id: 4,
    img: cart4,
    text:'Health & Wellness'
  },
  {
    id: 5,
    img: cart5,
    text:'Restaurants & Bars'
  },
  {
    id: 6,
    img: cart6,
    text:'Travel & Accommodation'
  },
  {
    id: 7,
    img: cart7,
    text:'Fashion & Apparel'
  },
  {
    id: 8,
    img: cart8,
    text:'Groceries & Food Items'
  },
];
const brands =[
  {
    img:brand1,
    name:'the palms lekki'
  },
  {
    img:brand2,
    name:'cocoa-cola'
  },
  {
    img:brand3,
    name:'Chicken'
  },
  {
    img:brand2,
    name:'cocoa-cola'
  },
  {
    img:brand2,
    name:'cocoa-cola'
  },
]

const colors = [
  '#FEE5A5', 
  '#FED7A5', 
  '#FEBEA5', 
  '#FEA5C7', 
  '#FEA5F3', 
  '#D6A5FE', 
  '#A5B8FE', 
  '#A5FEE3'
];


export { navLinks, offerCard, pointOptions, cate, category_brands,colors ,brands, dealCard};
