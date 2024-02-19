import {Radio, FolderGit2} from "lucide-react";
import Image from 'next/image'


function ProjectCard() {
    return (
        <article className="project-card">
            <div className="project-image">

                <Image src="/background-project.png" width={390} height={100} alt=""/>

            </div>
            <div className="project-content">
                <h3>Project 01</h3>
                <h5>Age Calculator App</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                <div>

                </div>

            </div>
        </article>
    )
}

export default ProjectCard
