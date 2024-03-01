import {FolderGit2, Radio} from "lucide-react";
import Image from 'next/image'
import {jetBrainsMono} from "@/styles/fonts/fonts";

function ProjectCard(props: any) {


    const {id, title, subTitle, description, linkSite, linkRepo} = props


    return (
        <article className="project-card">
            <div className="project-image">
                <Image src={`/${id}.png`}
                    width={500}
                    height={0}
                    priority
                    alt="project-image"/>
            </div>
            <div className="project-content">
                <div className="center">

                    <div className="card-header">
                        <h3>{title}</h3>
                        <h5>{subTitle}</h5>
                    </div>

                    <p className="card-text">
                        {description}
                    </p>

                    <div className="btn-container">
                        <a href={linkSite} target="_blank">
                            <button className="btn btn-primary">
                                <Radio size={20}/>
                                <span className={jetBrainsMono.className}>
                            <span>Live Site</span>
                        </span>
                            </button>
                        </a>
                        <a href={linkRepo} target="_blank">
                            <button className="btn btn-secondary">
                                <FolderGit2 size={20}/>
                                <span className={jetBrainsMono.className}>
                            <span>Source Code</span>
                        </span>
                            </button>
                        </a>
                    </div>
                </div>


            </div>
        </article>
    )
}

export default ProjectCard
