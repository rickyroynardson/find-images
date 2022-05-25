import React from "react";

const Image = ({ image }) => {
    return (
        <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
            <div className="relative break-inside-avoid rounded-xl overflow-hidden group mb-2">
                <img src={image.webformatURL} alt={image.pageURL} className="w-full" />
                <div className="absolute top-0 m-2 px-2 py-1 bg-white rounded-full">
                    <p className="text-xs text-gray-600 font-semibold truncate">
                        Photo by <span className="text-gray-800">{image.user}</span>
                    </p>
                </div>
                <div className="absolute flex items-center justify-end gap-2 bottom-0 px-3 py-1 w-full bg-black bg-opacity-60 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
                    <div className="text-white flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs">{image.views}</p>
                    </div>
                    <div className="text-white flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <p className="text-xs">{image.downloads}</p>
                    </div>
                    <div className="text-white flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs">{image.likes}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Image;
