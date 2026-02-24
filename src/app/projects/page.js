import ProjectCard from "@/app/components/ProjectCard";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    const projects = [
        {
            id: 1,
            title: "playbook",
            date: "february 2026",
            status: "won best use of airia @ self-improving agents hackathon",
            description:
                "an ai voice agent for sales/customer support that handles live calls, learns from customer sentiment, and continuously optimizes its strategy to improve future calls.",
            technologies: "modulate · airia · elevenlabs · next.js",
            link: "https://github.com/akshithambekar/playbook",
        },
        {
            id: 2,
            title: "s24",
            date: "february 2026",
            status: "won best use of solana @ hackfax x patriothacks 2026",
            description:
                "a fully-autonomous trading agent built on openclaw that ingests live solana coin data, assesses risk and upside, and makes profitable trades on solana devnet.",
            technologies: "aws · next.js · express.js · openclaw",
            link: "https://github.com/akshithambekar/s24",
        },
        {
            id: 3,
            title: "prism",
            date: "january 2026",
            status: "finalist at cursor hackathon dc 2026",
            description:
                "a github app that spins up live PR previews, where users can click on react components and make quick changes with the opencode sdk.",
            technologies: "next.js · hono · daytona · octokit · opencode sdk",
            link: "https://github.com/akshithambekar/prism",
        },
        {
            id: 4,
            title: "logos",
            date: "january 2026",
            status: "submitted to hoyahacks 2026",
            description:
                "an sdk that defines and enforces context contracts between agentic systems by using agreement files, running automated tasks, and filtering content.",
            technologies: "fastapi · langgraph · chromadb",
            link: "https://github.com/akshithambekar/theorem",
        },
        {
            id: 5,
            title: "theorem",
            date: "december 2025",
            status: "in progress",
            description:
                "a web application that generates 3B1B-style videos to explain STEM topics based on textbook pages, lecture notes, or a prompt.",
            technologies: "next.js · python · langgraph",
            link: "https://github.com/akshithambekar/theorem",
        },
        {
            id: 6,
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
