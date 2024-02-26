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
                            <IconGitHub/>
                            <IconLinkedIn/>
                            <Icon104/>
                            <IconAtSign/>
                        </div>

                    </div>

                    <div className="desktop">
                        <ImageHero />
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
                        <div className="title">Title 1</div>
                        <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic
                            quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!
                        </div>
                    </div>

                    <div className="timeline-card">
                        <div className="date">2018-2020</div>
                        <div className="title">Title 2</div>
                        <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci
                            nobis
                            nostrum vero nihil veniam.
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="date">2016-2018</div>
                        <div className="title">Title 3</div>
                        <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
                            consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod
                            reprehenderit, sequi quo, et dolorum saepe nulla hic.
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="date">2012-2016</div>
                        <div className="title">Title 4</div>
                        <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
                            cumque.
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="date">2022</div>
                        <div className="title">Title 5</div>
                        <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default MainPage
