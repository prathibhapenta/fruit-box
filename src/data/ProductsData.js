import miniBoxImg from "../assets/minibox.jpg";
import fullBoxImg from "../assets/fullbox.jpg";
import comboBoxImg from "../assets/combobox.jpg";
import monthlyBoxImg from "../assets/monthly.jpg";

import weekendjuiceImg from '../assets/weekendjuice.jpeg'
import weeklyjuiceImg from '../assets/weeklyjuice.jpeg'
import monthlyjuiceImg from '../assets/monthlyjuice.jpg'

import appleImg from "../assets/apple.jpeg";
import bananaImg from "../assets/banana.jpeg";
import orangeImg from "../assets/orange.jpeg";
import grapesImg from "../assets/grapes.jpeg";
import mangoImg from "../assets/mango.jpeg";
import papayaImg from "../assets/papaya.jpeg";
import pomegranateImg from "../assets/pomegranate.jpeg";
import kiwiImg from "../assets/kiwi.jpeg";
import dragonFruitImg from "../assets/dragonfruit.jpeg";
import strawberryImg from "../assets/straberry.jpeg";
import pineappleImg from "../assets/pinneapple.jpeg";
import watermelonImg from "../assets/watermeallon.jpeg";

const productDetails = {
  mini: { 
    name: "Mini Box", 
    price: 60, 
    img: miniBoxImg, 
    description: "Perfect for single person with fresh seasonal fruits.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Grapes", img: grapesImg },
    ]
  },
  full: { 
    name: "Full Box", 
    price: 80, 
    img: fullBoxImg, 
    description: "Ideal for a small family with more variety.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Mango", img: mangoImg },
      { name: "Papaya", img: papayaImg },
      { name: "Pomegranate", img: pomegranateImg },
    ]
  },
  combo: { 
    name: "Combo Box", 
    price: 100, 
    img: comboBoxImg, 
    description: "Special combo with discounts and mixed fruits.",
    fruits: [
      { name: "Kiwi", img: kiwiImg },
      { name: "Dragon Fruit", img: dragonFruitImg },
      { name: "Strawberry", img: strawberryImg },
      { name: "Mango", img: mangoImg },
      { name: "Grapes", img: grapesImg },
    ]
  },
  monthlyBox: {   
    name: "Monthly Box", 
    price: 120, 
    img: monthlyBoxImg, 
    description: "Monthly subscription with fresh fruits delivered regularly.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Mango", img: mangoImg },
      { name: "Papaya", img: papayaImg },
      { name: "Pineapple", img: pineappleImg },
      { name: "Watermelon", img: watermelonImg },
    ]
  },

  weeklyPlan: {
    name: "Weekly Plan",
    img: weeklyjuiceImg,
    description: "Fresh fruits delivered weekly",
    price: 450,
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg }
    ]
  },
  monthlyPlan: {
    name: "Monthly Plan",
    img: monthlyjuiceImg,
    description: "Best value for families",
    price: 2000,
    fruits: [
      { name: "Orange", img: orangeImg },
      { name: "Grapes", img: grapesImg }
    ]
  },
  weekendJuice: {
    name: "Weekend Juice",
    img: weekendjuiceImg,
    description: "Special fruit juice every Saturday",
    price: 150,
    fruits: [
      { name: "Mango Juice", img: mangoImg }
    ]
  }
};

export default productDetails;
