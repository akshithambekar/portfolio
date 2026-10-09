import ProjectCard from "@/app/components/ProjectCard";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    const projects = [
        {
            id: 1,
            title: "autonomous fpv drone racing",
            date: "july 2026",
            status: "beat virtual qualifier 1 for anduril's ai grand prix",
            description:
                "an autonomous drone-racing stack that integrates computer vision, flight control, and reinforcement learning for simulated fpv racing.",
            technologies: "python · opencv · stable-baseline3",
            link: "https://github.com/akshithambekar/ai-grand-prix",
        },
        {
            id: 2,
            title: "playbook",
            date: "february 2026",
            status: "won best use of airia @ self-improving agents hackathon",
            description:
                "an ai voice agent for sales/customer support that handles live calls, learns from customer sentiment, and continuously optimizes its strategy to improve future calls.",
            technologies: "next.js · elevenlabs · modulate · airia",
            link: "https://github.com/akshithambekar/playbook",
        },
        {
            id: 3,
            title: "s24",
            date: "february 2026",
            status: "won best use of solana @ hackfax x patriothacks 2026",
            description:
                "a fully-autonomous trading agent built on openclaw that ingests live solana coin data, assesses risk and upside, and trades on solana devnet.",
            technologies: "next.js · express.js · aws · openclaw",
            link: "https://github.com/akshithambekar/s24",
        },
        {
            id: 4,
            title: "prism",
            date: "january 2026",
            status: "finalist at cursor hackathon dc 2026",
            description:
                "a github app that spins up live PR previews, where users can click on react components and make quick UI changes with the opencode sdk.",
            technologies: "next.js · hono · daytona · octokit · opencode sdk",
            link: "https://github.com/akshithambekar/prism",
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
