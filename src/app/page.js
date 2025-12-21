import Link from "next/link";

export default function Home() {
    return (
        <main className="subpixel-antialiased">
            <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto">
                <p className="text-xl font-thin text-justify py-6">
                    hi, i'm akshith. i'm a software engineer studying cs at
                    george mason university. i love turning radical ideas into
                    reality.
                </p>
                <p className="text-xl font-thin text-justify py-6">
                    i'm currently interning at{" "}
                    <Link
                        className="underline underline-offset-2 hover:font-normal"
                        href="https://www.microhealthllc.com/"
                        target="_blank"
                    >
                        microhealth
                    </Link>{" "}
                    as a full-stack developer, enabling secure ai-powered
                    workflows for government agencies.
                </p>
                <p className="text-xl font-thin text-justify py-6">
                    i'll also be joining{" "}
                    <Link
                        className="underline underline-offset-2 hover:font-normal"
                        href="https://www.lockheedmartin.com/en-us/index.html"
                        target="_blank"
                    >
                        lockheed martin
                    </Link>
                    's space division as a software engineer intern this summer.
                </p>
            </div>
        </main>
    );
}
