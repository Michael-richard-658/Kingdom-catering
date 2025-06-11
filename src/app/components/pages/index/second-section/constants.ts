import late from "@/app/assets/Depth 4, Frame 1.png"
import bland from "@/app/assets/Depth 4, Frame 1 (1).png"
import hygiene from "@/app/assets/Depth 4, Frame 1 (2).png"
import type { StaticImageData } from 'next/image'


interface Cards {
        id: number;
        question: string;
        answer: string;
        image:  StaticImageData
    }
    
    
   export  const cards: Cards[] = [{
                id: 1,
                question: "Food arriving late?",
                answer: "Not anymore – Kingdom Catering brings royalty to your table!",
                image: late
        },{
                id: 2,
                question:"Bland or cold dishes?",
                answer:"Not anymore – Kingdom Catering brings royalty to your table!",
                image: bland
        },{
                id: 3,
                question:"Poor hygiene?",
                answer:"Not anymore – Kingdom Catering brings royalty to your table!",
                image: hygiene
        },{
                id: 4,
                question:" Unlicensed service?",
                answer:"Not anymore – Kingdom Catering brings royalty to your table!",
                image: hygiene
        }]