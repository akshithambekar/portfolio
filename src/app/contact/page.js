import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <main className="subpixel-antialiased">
            <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto px-6 sm:px-0">
                <p className="text-lg md:text-xl font-normal text-justify pb-10 md:pb-8">
                    i love meeting new people and learning about new ideas. feel free to reach out on any of the platforms at the bottom of this page, or by using the contact form below.
                </p>
                <ContactForm />
            </div>
        </main>
        </PageTransition>
    );
}
