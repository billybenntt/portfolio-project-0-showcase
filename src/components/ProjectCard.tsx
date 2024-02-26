import {Radio, FolderGit2} from "lucide-react";
import Image from 'next/image'
import {jetBrainsMono} from "@/styles/fonts/fonts";

function ProjectCard(props: any) {


    const {imageSource, title} = props

    return (
        <article className="project-card">
            <div className="project-image">
                <Image src={imageSource}
                    width={500}
                    height={333}
                    priority
                    alt="project-image"/>
            </div>
            <div className="project-content">
                <h3>Project 01</h3>
                <h5>{title}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                <div className="btn-container">
                    <a href="https://www.google.com" target="_blank">
                        <button className="btn btn-primary">
                            <Radio size={20}/>
                            <span className={jetBrainsMono.className}>
                            <span>Live Site</span>
                        </span>
                        </button>
                    </a>
                    <a href="https://www.github.com" target="_blank">
                        <button className="btn btn-secondary">
                            <FolderGit2 size={20}/>
                            <span className={jetBrainsMono.className}>
                            <span>Source Code</span>
                        </span>
                        </button>
                    </a>
                </div>

            </div>
        </article>
    )
}

export default ProjectCard
