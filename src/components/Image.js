import React from 'react';

const Image = ({ image }) => {
    return (
        <div className='relative break-inside-avoid rounded-xl overflow-hidden group'>
            <img src={image.webformatURL} alt={image.pageURL} className="w-full" />
            <div className='absolute top-0 bg-black bg-opacity-20'>
                <p>User</p>
            </div>
            <div className='absolute bottom-0 px-3 py-1 w-full bg-black bg-opacity-40 transition-all duration-300 translate-y-10 group-hover:translate-y-0'>
                <div className='float-right'>
                    <p className='text-white text-sm'>{image.views}</p>
                    <p className='text-white text-sm'>{image.likes}</p>
                    <p className='text-white text-sm'>{image.downloads}</p>
                </div>
            </div>
        </div>
    )
}

export default Image;