import SkillCard from "@/components/SkillCard";
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import {data} from "@/data/data";

const ScrollCarouselComponent = () => {
    return (
        <ScrollCarousel
            autoplay
            autoplaySpeed={50}
            smartSpeed={true}
            speed={10}
        >


            {data.map((item, index) => {
                return <SkillCard key={index} {...item}/>
            })}


        </ScrollCarousel>
    );
};

export default ScrollCarouselComponent;