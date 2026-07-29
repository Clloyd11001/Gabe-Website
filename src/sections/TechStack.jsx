import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const foodItems = [
    {
        name: "Jerk Chicken",
        img: "/images/jerkChicken.jpg",
    },
    {
        name: "Oxtail",
        img: "/images/oxtail.jpg",
    },
    {
        name: "Smoked Ribs",
        img: "/images/ribs.jpg",
    },
    {
        name: "Fish Fry",
        img: "/images/fish.png",
    },
    {
        name: "Fried Shrimp",
        img: "/images/shrimp.jpg",
    },
    {
        name: "Mac & Cheese",
        img: "/images/macNcheese.jpg",
    },
];

const TechStack = () => {
    useGSAP(() => {
        gsap.from(".food-carousel", {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
            },
        });
    });

    return (
        <section id="skills" className="section-padding">
            <div style={{fontFamily: "-apple-system"}}>
            <TitleHeader title="Photo Shoot" />
</div>
            <div className="food-carousel mt-10">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {foodItems.map((food) => (
                        <SwiperSlide key={food.name}>
                            <div className="overflow-hidden rounded-3xl shadow-lg">
                                <img
                                    src={food.img}
                                    alt={food.name}
                                    className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TechStack;