import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="min-h-screen w-full bg-neutral-950 pt-24 pb-12 px-4 md:px-8 flex flex-col items-center">
            <div className="max-w-5xl w-full flex flex-col gap-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 backdrop-blur-sm">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                            Venkata Aakash Gudivada
                        </h1>
                        <p className="text-neutral-400 mt-2">
                            Cloud & Security Engineer | Blockchain Developer
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/venkata-aakash-179415288/"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/30 rounded-lg transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </Link>

                        <Link
                            href="https://github.com/GVAHCK"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 rounded-lg transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>

                {/* Resume Image */}
                <div className="w-full bg-white/5 p-2 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden">
                    <div className="relative w-full aspect-[1/1.414] rounded-lg overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/domogztsv/image/upload/v1771015396/autoCV_2__page-0001_b9y8ib.jpg"
                            alt="Venkata Aakash Resume"
                            fill
                            className="object-contain"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
