import Link from "next/link";

export default function Home() {
    return (
        <main className="subpixel-antialiased">
            <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto">
                <p className="text-xl font-thin text-justify py-5">
                    hi, i'm akshith. i'm a software engineer studying cs at
                    george mason university. i love turning radical ideas into
                    reality.
                </p>
                <p className="text-xl font-thin text-justify py-5">
                    i'm currently interning at{" "}
                    <Link
                        className="underline underline-offset-2 hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                        href="https://www.microhealthllc.com/"
                        target="_blank"
                    >
                        microhealth
                    </Link>{" "}
                    as a full-stack developer, enabling secure ai-powered
                    workflows for government agencies.
                </p>
                <p className="text-xl font-thin text-justify py-5">
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
                <p className="text-xl font-thin text-left pt-5 pb-2 self-start">
                    previously, i've done:
                </p>
                <ul className="text-xl font-thin text-left list-disc list-outside space-y-2 self-start pl-5">
                    <li>proof-of-concepts for amtrak @ allwyn corporation</li>
                    <li>embedded software + iot research @ gmu</li>
                    <li>ml research @ dartmouth-hitchcock medical center</li>
                </ul>
                <p className="text-xl font-thin text-justify pt-10">
                    i'm always open to opportunities, especially intern or
                    full-time roles in SF or NYC.
                </p>
            </div>
        </main>
    );
}
