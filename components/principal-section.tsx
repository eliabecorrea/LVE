import Image from "next/image";
import { Button } from "./ui/button";
import ContactForm from "./contact-form";

export default function PrincipalSection() {
    return (
        <section className="relative overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] p-4 lg:p-8 w-full">
            <Image
                src="/fullbanner1.jpg"
                fill
                alt="Background image representing financial freedom"
                className="object-cover object-center brightness-50"
                priority
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                <div className="space-y-4 text-white max-w-2xl">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="block">Liberty for your wealth.</span>
                        <span className="block text-emerald-400">Vault for your future.</span>
                    </h1>
                    <p className="text-2xl lg:text-3xl font-light">
                        Exchange Local Risk for Global Opportunity
                    </p>
                    <p className="text-xl lg:text-2xl font-light">
                        Multiply Potential. Minimize Risk
                    </p>
                    <Button size="lg" className="mt-4">
                        Discover how
                    </Button>
                </div>
                <div className="bg-white p-6 lg:p-8 w-full max-w-[500px] rounded-lg shadow-xl flex items-center flex-wrap justify-center">
                    <h2 className="text-2xl font-bold text-base-950 mb-6">
                        Your legacy deserves a fortress
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}