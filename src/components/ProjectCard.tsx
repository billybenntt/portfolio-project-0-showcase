import {Radio, FolderGit2} from "lucide-react";
import Image from 'next/image'


function ProjectCard() {
    return (
        <article className="project-card">
            <div className="project-image">

                <Image src="/bg-1.png" width={390} height={200} alt=""/>

            </div>
            <div className="project-content">
                <h3>Project 01</h3>
                <h5>Age Calculator App</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                <div className="btn-container">
                    <button className="btn btn-primary">
                        <Radio size={20}/>
                        <span>Live Site</span>
                    </button>
                    <button className="btn btn-secondary">
                        <FolderGit2 size={20}/>
                        <span>Source Code</span>
                    </button>
                </div>

            </div>
        </article>
    )
}

export default ProjectCard
