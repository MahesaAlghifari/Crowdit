import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ postTitle }) => {
  return (
    <nav className="mb-4" aria-label="Breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        <li className="pr-4">
          <Link to="/" className="text-gray-500 hover:text-indigo-600">
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link to="/" className="text-gray-500 hover:text-indigo-600">
            Posts
          </Link>
        </li>
        <li className="px-4 text-gray-500" aria-current="page">
          {postTitle}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
