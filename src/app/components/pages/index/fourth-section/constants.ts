"use client"

import { StaticImageData } from 'next/image'
import weddingPNG from "./Fourthsectionassets/wedding.png"
import bdayPNG from "./Fourthsectionassets/bday.png"
import FestivePNG from "./Fourthsectionassets/festive.png"
import CorporatePNG from "./Fourthsectionassets/corporate-event.png"



interface Card {
        image:StaticImageData,
        event:string,
        description:string
    }
   export  const cards: Card[] = [
        {
            image:weddingPNG,
            event:"Weddings",
            description:"Grand feasts for grand occasions."
        },
        {
            image:bdayPNG,
            event:"Birthdays",
            description:"Fun food kids and adults love."
        },
        {
            image:CorporatePNG,
            event:"Corporate Events",
            description:"Impress your guests, hassle-free."
        },
        {
            image:FestivePNG,
            event:"Festive Orders",
            description:"Celebrate festivals with flavour."
        },
    ]