import React, { useState } from "react";

const Header = ({ search }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        search(text);
    };

    return (
        <header className="bg-white p-3 gap-3 flex flex-col items-center justify-between sm:flex-row dark:bg-gray-700">
            <button onClick={() => window.location.reload()} className="text-center md:text-left">
                <p className="text-2xl font-bold text-gray-700 dark:text-white">Find Images</p>
                <p className="text-sm text-gray-500 dark:text-gray-200">Find your favorite images here.</p>
            </button>
            <div className="w-full max-w-sm">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="absolute flex items-center inset-y-0 pl-2 text-gray-500 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input onChange={(e) => setText(e.target.value)} type="search" placeholder="Search..." className="block appearance-none w-full bg-gray-50 text-gray-500 align-middle rounded-full p-2 pl-8 focus:outline-none" required />
                </form>
            </div>
        </header>
    );
};

export default Header;
