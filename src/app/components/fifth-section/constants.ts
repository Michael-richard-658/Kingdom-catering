import { StaticImageData } from 'next/image';
import women1 from "./Fifth-section-assets/women1.png"
import women2 from "./Fifth-section-assets/women2.png"
import man1 from "./Fifth-section-assets/man.png"
import reviewStar from "./Fifth-section-assets/review-star.png"


interface Review {
        name: string;
        profilePic: StaticImageData;
        date: string;
        star:StaticImageData
        review: string;
    }

  export  const reviews: Review[] = [
        {
            name:"Ava Harper",
            profilePic:women1,
            date:"2 months ago",
            star:reviewStar,
            review:"Kingdom Catering made our wedding day unforgettable! The food was exquisite, and the service was impeccable. Our guests raved about the variety and taste. Highly recommend!"
        },
        {
            name:"Liam Foster",
            profilePic:women2,
            date:"3 months ago",
            star:reviewStar,
            review:"We hired Kingdom Catering for our company's annual gala, and it was a huge success. The food was delicious, the presentation was beautiful, and the staff was professional and attentive. Will definitely use them again."
        },{
            name:"Chloe Bennett",
            profilePic:man1,
            date:"4 months ago",
            star:reviewStar,
            review:"For my daughter's birthday, Kingdom Catering provided a fantastic menu that both kids and adults enjoyed. The food was fresh, flavorful, and delivered right on time. Thank you for making the day so special!"
        },
    ]