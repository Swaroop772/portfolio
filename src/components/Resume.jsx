import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';

const Resume = () => {
    const highlights = [
        "Earned NPTEL Certificate in Python and cloud computing",
        "Built recognized projects showcasing innovation",
        "Excelled in hackathons and coding contests",
        "Led and mentored participants in Codeathon 3.0",
        "Received Best Student in 10th grade"
    ];

    return (
        <section id="resume" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Highlights Section */}
                    <div className="lg:w-1/3 space-y-8">
                        <SpotlightCard className="rounded-xl p-8 h-full">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <FileText className="text-accent" /> Achievements
                            </h3>
                            <ul className="space-y-4">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <MagneticButton className="w-full">
                                    <a
                                        href="/resume.pdf"
                                        download="Swaroop_Resume.pdf"
                                        className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                    >
                                        Download Full Resume <Download size={20} />
                                    </a>
                                </MagneticButton>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Resume Image Viewer */}
                    <div className="lg:w-2/3 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-slate-900 z-0">
                            <p>Loading Resume...</p>
                        </div>
                        <img
                            src="/resume.png"
                            alt="Resume"
                            className="w-full h-auto relative z-10"
                        />

                        {/* Overlay for download */}
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100">
                            <MagneticButton>
                                <a
                                    href="/resume.pdf"
                                    download="Swaroop_Resume.pdf"
                                    className="px-8 py-3 bg-accent text-white font-bold rounded-lg shadow-lg transform scale-105"
                                >
                                    Download Resume <Download size={20} className="inline ml-2" />
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
