'use client'

import {Layers3, GraduationCap, Hand} from "lucide-react";
import dynamic from 'next/dynamic';
import {ImageHero} from '@/assets'

const ScrollCarousel = dynamic(() => import('@/components/CarouselCards'), {ssr: false});
import {Icon104, IconLinkedIn, IconAtSign, IconGitHub} from '@/assets'

function MainPage() {
    return (
        <main className="offset">
            {/*HERO */}
            <section className="hero section">
                <div className="section-center">
                    <div className="hero-text">
                        <h1 className="text-xxl">
                            <span>
                                Hello
                            </span>
                            <div className="wave">
                                <Hand size={40} className="icon"/>
                            </div>
                        </h1>
                        <h3 className="text-lg">My name is Bill</h3>
                        <h3 className="text-lg">Front-End Developer</h3>
                        <p>Enabling Improvement, One App at a Time</p>

                        <div className="icons">
                            <a href="https://github.com/billybenntt" target="_blank">
                                <IconGitHub/>
                            </a>

                            <a href="https://github.com/billybenntt" target="_blank">
                                <IconLinkedIn/>
                            </a>

                            <a href="https://github.com/billybenntt" target="_blank">
                                <Icon104/>
                            </a>


                            <a href="https://github.com/billybenntt" target="_blank">
                                <IconAtSign/>
                            </a>

                        </div>

                    </div>

                    <div className="desktop">
                        <ImageHero/>
                    </div>
                </div>
            </section>

            {/*SKILLS */}

            <section className="skills section">
                <div className="section-center section-title">
                    <Layers3/>
                    <h1>My Tech Stack</h1>
                </div>
                <ScrollCarousel/>
            </section>


            {/*TIMELINE 1 */}

            <section className="timeline-1 section">
                <div className="section-center section-title">
                    <GraduationCap/>
                    <h1>My Experience</h1>
                </div>


                <div className="timeline-center section-center">
                    <div className="timeline-card">
                        <div className="date">2020- Present</div>
                        <div className="title">Systems & Technology Corp</div>
                        <div className="descr">Technical Support Engineer</div>
                        <div className="descr">New Taipei City, Taiwan</div>


                    </div>

                    <div className="timeline-card">
                        <div className="date">2018-2020</div>
                        <div className="title">National Tsing Hua University</div>
                        <div className="descr">Master in Information Systems and Applications</div>
                        <div className="descr">Hsinchu City, Taiwan</div>

                    </div>
                    <div className="timeline-card">
                        <div className="date">2016-2018</div>
                        <div className="title">Xerox Corporation</div>
                        <div className="descr">Support Representative</div>
                        <div className="descr">Guatemala City, Guatemala</div>


                    </div>
                    <div className="timeline-card">
                        <div className="date">2012-2016</div>
                        <div className="title">National Chengchi University</div>
                        <div className="descr">Bachelor of Businesss Administration</div>
                        <div className="descr">Taipei, Taiwan</div>

                    </div>

                </div>
            </section>


        </main>
    )
}

export default MainPage
