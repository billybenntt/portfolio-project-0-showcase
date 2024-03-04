import {User} from "lucide-react";
import {kurewaSerif} from "@/styles/fonts/fonts";
import Image from "next/image";


function AboutPage() {
    return (
        <main className="offset">

            <section className="section">
                <div className="section-title">
                    <User/>
                    <h1>About Me</h1>
                </div>

                <div className="section-center about">


                    <div className="about-center">

                        <div className="author-img">
                            <Image src={"/author.png"} alt="author" width={120} height={0}/>
                        </div>
                        <div className="about-text">
                            <div>
                                <p>
                                    Hello, My name is William, but you can call me Bill. My expertise lies in front-end
                                    development, where
                                    I find joy in coding and building projects showcased on my GitHub account. I have
                                    been
                                    working my
                                    developer skills since 2020.
                                </p>


                                <p> Originally from Guatemala, I have made Taiwan my home since 2012. Currently, I am
                                    proactively
                                    pursuing opportunities that align with my interests in web development and
                                    Blockchain
                                    applications, with the aim of furthering my expertise in the field. Although I am
                                    currently
                                    employed as a Technical Support engineer in Taiwan, my goal is to transition into an
                                    industry
                                    that complements my background.
                                </p>


                                <p>
                                    You are invited to explore my portfolio page, where I showcase my projects and
                                    provide
                                    access
                                    to
                                    source code, demonstrating the implementation of my tech stack.
                                </p>

                            </div>

                            <div className={kurewaSerif.className} style={{fontSize: "1.1em"}}>
                                <p> 我是William，但你可以叫我Bill。我的專業在前端開發，我很享受編碼和在我的 GitHub
                                    帳戶展示項目。我從
                                    2020 年開始培養我的開發技能。
                                </p>

                                <p>
                                    我原籍瓜地馬拉，自 2012
                                    年起，我把台灣當成了我的家。目前，我積極尋找符合我在網頁開發和區塊鏈應用方面興趣的機會，以進一步提升自己在這個領域的專業知識。雖然我
                                    目前在台灣擔任技術支援工程師，但我的目標是轉換到一個與我的背景相輔相成的行業。
                                </p>


                                <p>
                                    歡迎你來探索我的作品集頁面，在那裡我展示我的項目並提供源代碼訪問，展示我Tech Stack的實現
                                </p>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage
