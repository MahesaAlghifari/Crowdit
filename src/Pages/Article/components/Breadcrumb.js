import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid'; // Path untuk Heroicons versi 2

const Breadcrumb = ({ postTitle }) => {
  return (
    <nav className="mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap leading-none text-indigo-950 divide-x divide-indigo-100">
        <li className="pr-4 flex items-center">
          <Link to="/" className="text-gray-400 hover:text-indigo-950 text-sm sm:text-base flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        <li className="px-4">
          <Link to="/" className="text-gray-400 hover:text-indigo-950 text-sm sm:text-base">
            Posts
          </Link>
        </li>
        <li className="px-4 text-gray-600 text-sm sm:text-base" aria-current="page">
          {postTitle}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
