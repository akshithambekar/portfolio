import Link from "next/link";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <main className="subpixel-antialiased">
                <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto px-6 sm:px-0">
                    <p className="text-lg md:text-xl font-normal text-left sm:text-justify pb-3 md:pb-5">
                        i'm a full-stack software engineer, studying computer science at {' '}
                        <Link
                            className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                            href="https://www.gmu.edu/"
                            target="_blank"
                        >
                          george mason university.
                        </Link>
                    </p>
                    <p className="text-lg md:text-xl font-normal text-left sm:text-justify py-3 md:py-5">
                        i'm a software engineering intern at {" "}
                        <Link
                            className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                            href="https://www.lockheedmartin.com/en-us/index.html"
                            target="_blank"
                        >
                            lockheed martin
                        </Link>
                        's space division, where i'm currently working on software for automated satellite scheduling.
                    </p>
                    <p className="text-lg md:text-xl font-normal text-left sm:text-justify py-3 md:py-5">
                        i'm also researching neuro-symbolic ai for maritime capture-the-flag with the {" "}
                        <Link
                            className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                            href="https://www.nrl.navy.mil/"
                            target="_blank"
                        >
                            us naval research laboratory
                        </Link>
                        .
                    </p>
                    <p className="text-lg md:text-xl font-normal text-left pt-3 md:pt-5 pb-2 self-start">
                        previously, i've done:
                    </p>
            <ul className="text-lg md:text-xl font-normal text-left list-disc list-outside space-y-2 self-start pl-5">
                        <li>
                            ai + full-stack engineering @ {" "}
                            <Link
                                className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                                href="https://www.microhealthllc.com/"
                                target="_blank"
                            >
                              microhealth
                            </Link>
                        </li>
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
                            embedded software/iot + ml research @{" "}
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
                </div>
            </main>
        </PageTransition>
    );
}
