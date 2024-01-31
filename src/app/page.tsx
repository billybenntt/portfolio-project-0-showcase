import Image from 'next/image'
import SkillCard from "@/components/SkillCard";
import {data} from "@/data/data";

function MainPage() {
    return (
        <main>
            {/*HERO */}
            <section className="hero section">
                <div className="section-center show-box">
                    <div>
                        <h1 className="text-xl">Hello my name is Bill</h1>
                        <h3 className="text-md">Front-End Developer</h3>
                        <p>Turning Ideas Into Interactive Reality</p>
                    </div>
                    <div className="desktop">
                        <Image src="image-1.svg" alt="as" height={500} width={500}/>
                    </div>
                </div>
            </section>

            {/*SKILLS */}

            <section className="skills section">
                <div className="skills-center show-box">
                    {data.map((item, index) => {
                        return <SkillCard key={index} {...item}/>
                    })}


                </div>
            </section>


            {/*TIMELINE 1 */}

            <section className="timeline-1">
                <div className="timeline-center">
                    <div className="timeline-card">
                        <div className="date">2002</div>
                        <div className="title">Title 1</div>
                        <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic
                            quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!
                        </div>
                    </div>

                    <div className="timeline-card">
                        <div className="date">2007</div>
                        <div className="title">Title 2</div>
                        <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci
                            nobis
                            nostrum vero nihil veniam.
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="date">2012</div>
                        <div className="title">Title 3</div>
                        <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
                            consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod
                            reprehenderit, sequi quo, et dolorum saepe nulla hic.
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="date">2017</div>
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
