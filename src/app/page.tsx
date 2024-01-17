import Image from 'next/image'
import SampleImg from '../assets/portfolio-.svg'


function MainPage() {
    return (
        <main>


            <section className="hero section">

                <div className="section-center show-box">
                    <h1 className="text-md">Hello my name is</h1>
                    <span className="">
                     <Image src={SampleImg} alt="as" width={20} height={20} className="icon-1"/>
                   </span>
                </div>


            </section>


            <section className="skills section">
                <div className="section-center show-box">
                    <h1 className="text-md">My skills</h1>
                    <span className="">
                     <Image src={SampleImg} alt="as" width={20} height={20} className="icon-1"/>
                   </span>
                </div>
            </section>

            <section className="education section">
                <div className="section-center show-box">
                    <h1 className="text-md">My Education</h1>
                    <span className="">
                     <Image src={SampleImg} alt="as" width={20} height={20} className="icon-1"/>
                   </span>
                </div>
            </section>


        </main>
    )
}

export default MainPage
