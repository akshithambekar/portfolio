import Link from "next/link";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <main className="subpixel-antialiased">
                <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto px-4 sm:px-0">
                    <p className="text-lg md:text-xl font-thin text-justify pb-3 md:pb-5">
                        hi, i'm akshith. i'm a software engineer studying cs at
                        george mason university. i love turning radical ideas
                        into reality.
                    </p>
                    <p className="text-lg md:text-xl font-thin text-justify py-3 md:py-5">
                        i'm currently interning at{" "}
                        <Link
                            className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                            href="https://www.microhealthllc.com/"
                            target="_blank"
                        >
                            microhealth
                        </Link>{" "}
                        as a full-stack developer, working on secure ai-powered
                        workflows for government agencies.
                    </p>
                    <p className="text-lg md:text-xl font-thin text-justify py-3 md:py-5">
                        this summer, i'll be joining{" "}
                        <Link
                            className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                            href="https://www.lockheedmartin.com/en-us/index.html"
                            target="_blank"
                        >
                            lockheed martin
                        </Link>
                        's space division as a software engineer intern.
                    </p>
                    <p className="text-lg md:text-xl font-thin text-left pt-3 md:pt-5 pb-2 self-start">
                        previously, i've done:
                    </p>
                    <ul className="text-lg md:text-xl font-thin text-left list-disc list-outside space-y-2 self-start pl-5">
                        <li>
                            ai proof-of-concepts for amtrak @{" "}
                            <Link
                                className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                                href="https://www.allwyncorp.com/"
                                target="_blank"
                            >
                                allwyn corp
                            </Link>
                        </li>
                        <li>
                            ml + embedded software/iot research @{" "}
                            <Link
                                className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                                href="https://cyberinitiative.org/about/regional-structure/northern-virginia-node/living-innovation-lab.html"
                                target="_blank"
                            >
                                gmu
                            </Link>
                        </li>
                        <li>
                            ml research @{" "}
                            <Link
                                className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                                href="https://www.dartmouth-hitchcock.org/"
                                target="_blank"
                            >
                                dartmouth-hitchcock medical center
                            </Link>
                        </li>
                    </ul>
                    <p className="text-lg md:text-xl font-thin text-justify pt-6 md:pt-10">
                        i'm always open to opportunities, especially intern or
                        full-time roles in sf or nyc.
                    </p>
                </div>
            </main>
        </PageTransition>
    );
}
