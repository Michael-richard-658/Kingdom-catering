import { StaticImageData } from 'next/image';
import GSTandFAIPNG from "./thirdsectionassets/gst&FAI.png"
import CustomMenuPNG from "./thirdsectionassets/custommenu.png"
import PunctualDeliveryPNG from "./thirdsectionassets/puntualddelivery.png"
import WideRangePNG from "./thirdsectionassets/widerange.png"
import TastyandHotPNG from "./thirdsectionassets/tastyfresgPNG.png"


interface Card {
    title: string;
    image:StaticImageData;
    caption:string
  }

  export const cards : Card[]= [
    {
      title:"GST & FSSAI certified for full trust",
      image:WideRangePNG,
      caption:'Certified by GST & FSSAI to ensure complete trust and quality'
    },
    {
      title:"Custom menus for every occasion",
      image:WideRangePNG,
      caption:"Personalized menus tailored to suit every event perfectly"
    },
    {
      title:"Punctual delivery and professional service",
      image:WideRangePNG,
      caption:"Timely delivery and professional service to ensure a seamless experience"
    },
    {
      title:"Wide range: Veg, Non-veg, Regional, Continental",
      image:WideRangePNG,
      caption:"A diverse selection of vegetarian, non-vegetarian, regional, and continental cuisines"
    },
    {
      title:"Tasty, hot, fresh food – always",
      image:WideRangePNG,
      caption:"Delicious, hot, and fresh food served at its best"
    }
  ]
