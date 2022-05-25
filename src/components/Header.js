import React from "react";

const Header = () => {
    return (
        <header className="bg-white p-3 gap-3 flex flex-col items-center justify-between sm:flex-row">
            <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-gray-700">Find Images</p>
                <p className="text-sm text-gray-500">Find your favorite images here.</p>
            </div>
            <div className="w-full max-w-sm">
                <div className="relative">
                    <div className="absolute flex items-center inset-y-0 pl-2 text-gray-500 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="search" placeholder="Search..." className="block appearance-none w-full bg-gray-50 text-gray-500 align-middle rounded-full p-2 pl-8 focus:outline-none" />
                </div>
            </div>
        </header>
    );
};

export default Header;
