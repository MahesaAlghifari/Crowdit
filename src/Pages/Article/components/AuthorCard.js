import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorCard = ({ author, date }) => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-white items-center justify-center flex-col p-6 py-6 rounded-xl shadow-md -mt-32">
      <div className="group relative text-center">
        <img
          src={author.imageUrl}
          alt=""
          className="h-24 w-24 rounded-full object-cover mx-auto bg-gray-50 "
        />
        <div className="text-sm leading-6 mt-4">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              {author.name}
            </a>
          </p>
          <p className="text-gray-500">{author.role}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-xs mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          View Profile
        </button>
        <p className="mt-6 text-justify text-sm leading-5 text-gray-500">
          {author.name} is a dedicated professional with a passion for technology and innovation.
        </p>
      </div>
      <div className="text-xs mt-6 text-gray-600">
        Joined : <time dateTime={date}>{date}</time>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4"></div>
    </div>
  );
};

export default AuthorCard;
