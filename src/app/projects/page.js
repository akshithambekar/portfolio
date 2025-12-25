import ProjectCard from "@/app/components/ProjectCard";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    const projects = [
        {
            id: 1,
            title: "theorem",
            date: "december 2025",
            status: "in progress",
            description:
                "a web application that generates 3B1B-style videos to explain STEM topics based on textbook pages, lecture notes, or a prompt.",
            technologies: "next.js · python · langgraph",
            link: "https://github.com/akshithambekar/theorem",
        },
        {
            id: 2,
            title: "breach",
            date: "march 2025",
            status: "submitted to hoohacks 2025",
            description:
                "an ai chatbot platform that generates unique startup ideas by analyzing 120M+ research papers/patents and identifying industry gaps.",
            technologies: "next.js · typescript · pytorch · google cloud",
            link: "https://github.com/Nav1919/Breach",
        },
    ];

    return (
        <PageTransition>
            <main className="subpixel-antialiased">
            <div className="max-w-[512px] flex flex-col mx-auto px-4 sm:px-0">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        date={project.date}
                        status={project.status}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </main>
        </PageTransition>
    );
}
