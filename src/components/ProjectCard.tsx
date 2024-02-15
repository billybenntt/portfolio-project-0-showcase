import {Radio, FolderGit2} from "lucide-react";
import Image from 'next/image'


function ProjectCard() {
    return (
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
    )
}

export default ProjectCard
