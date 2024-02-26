import SkillCard from "@/components/SkillCard";
import ScrollCarousel from 'scroll-carousel-react';
import {skills} from "@/utils/skills";

const CarouselCards = () => {
    return (
        <ScrollCarousel
            autoplay
            autoplaySpeed={50}
            smartSpeed={false}
            speed={10}>
            {skills.map((item, index) => {
                return <SkillCard key={index} {...item}/>
            })}
        </ScrollCarousel>
    );
};

export default CarouselCards;