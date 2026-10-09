import PageTransition from "@/app/components/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <main className="subpixel-antialiased">
                <div className="max-w-[512px] justify-center items-center flex flex-col mx-auto px-6 sm:px-0">
                    <p className="text-lg md:text-xl font-normal text-left sm:text-justify">
                        coming soon. a collection of essays and thoughts about
                        ai, building products, or just anything i find
                        interesting.
                    </p>
                </div>
            </main>
        </PageTransition>
    );
}
