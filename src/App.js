import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(16);
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState("");

    useEffect(() => {
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
        setTheme(localStorage.getItem("theme"));
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&per_page=${count}&q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
            })
            .catch((err) => console.log(err));
    }, [count, search]);

    const toggleTheme = (value) => {
        const html = document.querySelector("html");
        localStorage.setItem("theme", value);
        setTheme(value);
        html.classList.add(localStorage.getItem("theme"));
        value === "dark" ? html.classList.remove("light") : html.classList.remove("dark");
    };

    const loadMore = () => {
        setCount(count + 8);
    };

    return (
        <div className="bg-gray-200 min-h-screen dark:bg-gray-800">
            <div className="fixed bottom-5 right-5 z-50 bg-gray-700 text-gray-200 p-2 rounded-full flex items-center justify-center dark:bg-gray-200 dark:text-gray-700">
                {theme === "dark" ? (
                    <button onClick={() => toggleTheme("light")}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={() => toggleTheme("dark")}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                )}
            </div>
            <Header search={(text) => setSearch(text)} />
            <div className="p-2 gap-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5">
                {images.map((image) => (
                    <Image key={image.id} image={image} />
                ))}
            </div>
            <div className="text-center my-5 space-y-1">
                <p className="text-gray-700 font-semibold dark:text-gray-200">
                    Showing <span className="text-blue-700 dark:text-teal-400">{count}</span> of <span className="text-blue-700 dark:text-teal-400">200</span>
                </p>
                <button onClick={loadMore} className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full hover:scale-105 dark:bg-teal-600">
                    Load more...
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default App;
