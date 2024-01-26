import Image from 'next/image'


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
                <div className="section-center  show-box">
                    <div className="card">
                  <span className="icon">
                    <Image src="ts-2.svg" height={50} width={50} alt="icon"/>
                    <Image src="js-2.svg" height={50} width={50} alt="icon"/>
                  </span>
                        <h3 className="text-md">Typescript</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam earum eius
                            error exercitationem fugit, laudantium minima placeat quaerat quia
                        </p>
                    </div>
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
