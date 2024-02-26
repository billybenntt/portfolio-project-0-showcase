import {Briefcase} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

function ProjectsPage() {
    return (
        <main className="offset">
            <section className="section">
                <div className="section-title">
                    <Briefcase/>
                    <h1>My Projects</h1>
                </div>

                <div className="section-center projects-center">
                    <ProjectCard imageSource="/project01.png" title="Age Calculator App"/>
                    <ProjectCard imageSource="/project02.png" title="Bill Calculator App"/>
                    <ProjectCard imageSource="/project02.png" title="Github User Search App"/>
                    <ProjectCard imageSource="/project01.png" title="Bill Calculator App"/>
                    <ProjectCard imageSource="/project01.png" title="Bill Calculator App"/>
                    <ProjectCard imageSource="/project02.png" title="Bill Calculator App"/>
                </div>
            </section>
        </main>
    )
}

export default ProjectsPage
