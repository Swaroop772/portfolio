import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} AI.DEV. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Made with</span>
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span>using React & TailwindCSS</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
