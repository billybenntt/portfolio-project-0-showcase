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
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </section>
        </main>
    )
}

export default ProjectsPage
