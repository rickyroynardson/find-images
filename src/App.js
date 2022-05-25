import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className="bg-gray-200 min-h-screen p-5">
            <Header />
            <div className="py-2 gap-3 space-y-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5">
                {images.map((image) => (
                    <Image key={image.id} image={image} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
