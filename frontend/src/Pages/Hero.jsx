import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { FiX } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";

const Hero = () => {
    const searchInput = useRef(null);
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

     const [initialLoading, setInitialLoading] = useState(true); 
     useEffect(() => {
        const timer = setTimeout(() => {
            setInitialLoading(false);
        }, 3000); // 3 seconds splash screen

        return () => clearTimeout(timer);
    }, []);

    // 👇 Splash screen before everything
    if (initialLoading) {
        return (
            <div className='flex items-center justify-center w-full h-screen bg-black'>
                <h1 className='text-lg font-bold text-white md:text-3xl lg:text-4xl animate-pulse'>
                    🚀 Welcome... Preparing Images!
                </h1>
            </div>
        );
    }

    const Access_Key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;


    // Function to fetch images from Unsplash
    const fetchImages = async (searchTerm) => {
        setLoading(true);
        setNoResults(false);
        
         if (!searchTerm.trim()) {
        setLoading(false); // Cancel loading if input is empty
        return;
       }
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${Access_Key}&per_page=12`);
            const data = await response.json();

            const results = data?.results || [];
            setImages(results);
            setQuery(searchTerm);
             setNoResults(results.length === 0);

             // Simulate 30s loading (for testing only)
        await new Promise((resolve) => setTimeout(resolve, 300));
        
        } catch (error) {
            console.error('Error fetching images:', error);
            setNoResults(true);
            setImages([])
        }
        setLoading(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
         const value = searchInput.current.value.trim();
            if (value) fetchImages(value);
    };

    const handleSelection = (selection) => {
        searchInput.current.value = selection;
        fetchImages(selection);
    };

    const handleClear = () => {
        searchInput.current.value = '';
        setImages([]);
        setQuery('');
        setNoResults(false)
    };

    return (
        <div className='flex flex-col items-center w-[100%] min-h-screen pb-10 bg-gradient-to-r from-green-800 to-blue-900'>
            <div className='w-full max-w-2xl mt-10'>
                <h3 class="text-sm md:text-xl font-semibold text-center mt-10 flex items-center justify-center animate-fade-in-up">
                🚀 I, Abdisamad Abass, warmly welcomes you to this system — My Shadow.
                </h3>

                <h1 className='text-2xl font-bold text-center text-green-500 md:text-3xl '>Image Search</h1>
            <form onSubmit={handleSearch} className='relative w-full mt-5 px-2'>
                <input
                    type="text"
                    ref={searchInput}
                    onChange={() => setImages([])}
                    placeholder='Search images here...'
                    className='w-full py-3 text-lg font-medium text-blue-600 bg-green-300 border-2 border-teal-600 px-7 rounded-xl outline-blue-500'
                />
                <FiX className='absolute text-xl cursor-pointer top-4 right-4' onClick={handleClear} />
            </form>

            <div className='flex items-center justify-center gap-3 mt-5 px-3'>
                {['Nature', 'Birds', 'Cats', 'Shoes'].map((item) => (
                    <button
                        key={item}
                        className='w-32 px-4 py-2 font-semibold bg-yellow-500 hover:bg-cyan-300 hover:text-red-700 rounded-xl'
                        onClick={() => handleSelection(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>

            {/* Loading Spinner */}
            {loading && <p className="flex items-center justify-center mt-8 text-xl font-semibold text-white">Loading images...<AiOutlineLoading className='text-2xl'/></p>}

            {/* Image Results */}
            {images.length > 0 && (
                <div className='grid grid-cols-2 gap-4 mt-20 px-2 md:grid-cols-3 lg:grid-cols-4 '>
                    {images.map((img) => (
                        <div key={img.id} className='p-2 bg-white border-2 shadow h-80 border-lime-500 rounded-xl'>
                            <img src={img.urls.small} alt={img.alt_description} className='object-cover w-full h-56 rounded-lg' />
                            <p className='text-xl font-bold text-center text-orange-700 mt-7'>{img.user.name}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* No Results */}
            {!loading && noResults &&  (
                <p className="mt-10 text-gray-900">No results found for "{query}"</p>
            )}
        </div>
    );
};

export default Hero;
