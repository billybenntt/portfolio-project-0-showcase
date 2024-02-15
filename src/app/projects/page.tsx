import {Briefcase, Radio, FolderGit2} from "lucide-react";
import Image from 'next/image'

function ProjectsPage() {
    return (
        <main className="offset">

            <section className="section">
                <div className="section-title">
                    <Briefcase/>
                    <h1>My Projects</h1>
                </div>

                <div className="section-center projects-center">


                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <p>Project 1</p>
                        <p>Calculator App</p>
                        <div className="d-border">
                            <Image src="/capture.jpg" width={250} height={300} alt="a"></Image>
                        </div>
                        <div className="card-links">
                            <div>
                                <Radio/>
                                <p>Live Website</p>
                            </div>
                            <div>
                                <FolderGit2/>
                                <p>Source Code</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default ProjectsPage
