import {Briefcase} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/utils/projects";


console.log(projects)

function ProjectsPage() {
    return (
        <main className="offset">
            <section className="section">
                <div className="section-title">
                    <Briefcase/>
                    <h1>My Projects</h1>
                </div>
                <div className="section-center projects-center">
                    {projects.map(project => <ProjectCard key={project.id}{...project}/>)}
                </div>
            </section>
        </main>
    )
}

export default ProjectsPage
