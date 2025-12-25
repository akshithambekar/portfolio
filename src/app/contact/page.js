import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
    return (
        <main className="subpixel-antialiased">
            <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto px-4 sm:px-0">
                <p className="text-lg md:text-xl font-thin text-justify pb-4 md:pb-8">
                    i'm always looking for new opportunities or discussing
                    anything tech-related. feel free to reach out on any of the
                    following platforms, or by using the contact form below.
                </p>
                <div className="flex flex-row gap-4 pb-4 md:pb-8">
                    <Link
                        className="text-lg md:text-xl underline underline-offset-2 font-thin hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                        href="https://github.com/akshithambekar"
                        target="_blank"
                    >
                        github
                    </Link>
                    <Link
                        className="text-lg md:text-xl underline underline-offset-2 font-thin hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                        href="https://www.linkedin.com/in/akshith-ambekar/"
                        target="_blank"
                    >
                        linkedin
                    </Link>
                    <Link
                        className="text-lg md:text-xl underline underline-offset-2 font-thin hover:font-normal inline-block transition-transform hover:-translate-y-0.5"
                        href="https://x.com/akshithambekar"
                        target="_blank"
                    >
                        x
                    </Link>
                </div>
                <ContactForm />
            </div>
        </main>
    );
}
