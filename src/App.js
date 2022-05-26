import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(16);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&per_page=${count}`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
            })
            .catch((err) => console.log(err));
    }, [count]);

    const loadMore = () => {
        setCount(count + 8);
    }

    return (
        <div className="bg-gray-200 min-h-screen p-5">
            <Header />
            <div className="py-2 gap-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5">
                {images.map((image) => (
                    <Image key={image.id} image={image} />
                ))}
            </div>
            <div className="text-center my-5 space-y-1">
                <p className="text-gray-700 font-semibold">Showing <span className="text-blue-700">{count}</span> of <span className="text-blue-700">200</span></p>
                <button onClick={loadMore} className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full hover:scale-105">Load more...</button>
            </div>
            <Footer />
        </div >
    );
}

export default App;
