import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
    title,
    date,
    status,
    description,
    technologies,
    link,
}) {
    return (
        <div className="py-3 md:py-5 flex">
            <div className="w-px bg-current opacity-25"></div>
            <div className="pl-4 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold pb-2">
                    {title}
                </h3>

                <div className="text-xs md:text-sm font-thin opacity-80 pb-2">
                    <span>{date}</span>
                    <span className="mx-2">·</span>
                    <span>{status}</span>
                </div>

                <p className="text-lg md:text-xl font-thin text-justify pb-3">
                    {description}
                </p>

                <p className="text-xs md:text-sm opacity-80 font-thin pb-2">
                    {technologies}
                </p>

                <Link
                    href={link}
                    target="_blank"
                    className="w-fit opacity-80 font-thin bg-no-repeat bg-bottom bg-[length:100%_1px] bg-[linear-gradient(to_right,currentColor_96.5%,transparent_96.5%)] hover:font-normal hover:opacity-100 inline-flex items-center gap-1 transition-[transform,opacity] duration-300 hover:-translate-y-0.5 text-sm md:text-base"
                >
                    view project
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
            </div>
        </div>
    );
}
