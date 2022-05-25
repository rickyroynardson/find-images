import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white p-2 text-center">
            <p className="text-gray-700 font-semibold">
                Made by{" "}
                <a href="https://github.com/rickyroynardson" target="_blank" rel="noopener noreferrer" className="text-teal-700 transition-all duration-300 hover:text-teal-500">
                    Ricky Roy Nardson
                </a>
            </p>
            <div className="flex items-center justify-center gap-1">
                <p className="text-gray-700 font-semibold">with</p>
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                    <img alt="Pixabay API" className="h-4 w-auto" src="assets/pixabay.webp" width={100} height={100} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
