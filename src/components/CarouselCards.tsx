import SkillCard from "@/components/SkillCard";
import ScrollCarousel from 'scroll-carousel-react';
import {skills} from "@/utils/skills";

const CarouselCards = () => {
    return (
        <ScrollCarousel
            autoplay={true}
            autoplaySpeed={4}
            smartSpeed={true}
            speed={4}>
            {skills.map((item, index) => {
                return <SkillCard key={index} {...item}/>
            })}
        </ScrollCarousel>
    );
};

export default CarouselCards;