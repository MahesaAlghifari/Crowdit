import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import React Icons
import Newsletter from '../../Components/NewsLetter';
import Card from './components/Card';
import Header from '../../Components/Header';
import Pagination from './components/Pagination';

export default function Article() {
  return (
    <>
      <Header />
      <div className='py-16 mx-auto max-w-7xl'>
        <div className='text-start mb-8 px-6 lg:px-8'>
          <h1 className='text-5xl font-bold text-custom-Primary'>Article</h1>
          <p className='text-base pt-2  text-custom-SemiBlack'>
            "Explore our recent articles and get inspired by new insights and perspectives."
          </p>
        </div>

     
        {/* Kontainer untuk tombol pencarian dan filter kategori */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-8'>
          <div className='flex justify-between items-center'>
            {/* Tombol Pencarian */}
            <div className='relative w-full max-w-md'>
              <input
                type="search"
                placeholder="Search articles..."
                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-Primary'
              />
              <button
                type="button"
                className='absolute inset-y-0 right-0 flex items-center pr-3'
              >
                <FaSearch className='h-5 w-5 text-gray-500' />
              </button>
            </div>

            {/* Filter Kategori */}
            <div className='relative w-1/6'>
              <select
                className='block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-Primary'
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
          </div>
        </div>
          <p className=" border-t border-gray-200  px-4 py-3">
          </p>
        <Card />
      <p className='py-12'/>
      <Pagination/>
      </div>
      <Newsletter />
    </>
  );
}
