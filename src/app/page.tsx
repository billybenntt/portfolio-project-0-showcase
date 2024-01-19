import Image from 'next/image'


function MainPage() {
    return (
        <main>


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


            <section className="skills section">

                <div className="section-center show-box">


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

            <section className="education section">
                <div className="section-center show-box">
                    <h1 className="text-md">My Education</h1>
                    <span className="">
                   </span>
                </div>
            </section>


        </main>
    )
}

export default MainPage
