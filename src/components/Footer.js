import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white p-2 text-center">
            <p className="text-gray-700 font-semibold">Made by <a href="https://github.com/rickyroynardson" target="_blank" rel="noopener noreferrer" className="text-teal-500 transition-all duration-300 hover:text-teal-600">Ricky Roy Nardson</a></p>
            <div className='flex items-center justify-center gap-1'>
                <p className='text-gray-700 font-semibold'>with</p>
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                    <img alt='Pixabay API' className='h-4' src='assets/pixabay.webp' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;