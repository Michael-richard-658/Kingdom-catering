"use client"
interface FAQ {
        question: string,
        answer: string
    }

   export const FAQs: FAQ[] = [
        {
            question: "Do you deliver to my area?",
            answer: "Yes, we deliver to most areas within the city. Please check our delivery radius on our website or contact us for more details."
        },
        {
            question:"Do you serve  Vegan food?",
            answer:"Yes, we offer Vegan food options. Our dishes are entirely plant-based, made without any animal products, ensuring both health and ethics are honored."
        },
        {
            question: "Can I customize the menu?",
            answer: "Yes, you can fully customize the menu based on your event needs. We offer veg, non-veg, regional, and continental options."
        },
        {
            question: "Do you serve Jain food?",
            answer: "Yes, we do serve Jain food. Our chefs follow strict Jain dietary guidelines to ensure every dish is prepared without onion, garlic, or root vegetables."
        },
        {
            question: "How early should I book?",
            answer: "We recommend booking at least 1–2 weeks in advance. This ensures availability and allows us to plan your event perfectly."
        },
    ];
