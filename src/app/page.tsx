import Image from 'next/image'
import SampleImg from '../assets/portfolio-.svg'


function MainPage() {
    return (
        <main>


            <section className="hero">

                <h1 className="text-md">Large Text</h1>
                <span className="">
                     <Image src={SampleImg} alt="as" width={20} height={20} className="icon-1"/>
                   </span>
            </section>


            <section className="skills">

            </section>


        </main>
    )
}

export default MainPage
