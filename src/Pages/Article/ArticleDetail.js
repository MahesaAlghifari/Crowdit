import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Posts from '../../Data/Posts';
import Breadcrumb from './components/Breadcrumb';
import Newsletter from '../../Components/NewsLetter';

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = Posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <img src={post.postImageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 ">


        <div className='flex'>
          <div className='w-1/5'>
            <div className="flex bg-white items-center justify-center flex-col p-6 py-6 rounded-xl shadow-md -mt-32">
              <div className="group relative text-center">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-24 w-24 rounded-full object-cover mx-auto bg-gray-50 "
                />
                <div className="text-sm leading-6 mt-4">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
                <button
                  onClick={() => navigate(-1)}
                  className="text-xs mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  View Profile
                </button>
                <p className="mt-6 text-justify text-sm leading-5 text-gray-600">
                  {post.author.name} is a dedicated professional with a passion for technology and innovation.
                </p>
              </div>
              <div className="text-xs mt-6 text-gray-600">
                Joined : <time dateTime={post.datetime}>{post.date}</time>
              </div>
              <div className="relative mt-4 flex items-center gap-x-4"></div>
            </div>
          </div>


          <div className='w-4/5'>
            <article className="mx-auto">
              <div className="ps-20">
                <Breadcrumb postTitle={post.title} />
                <h1 className="text-3xl mt-4 font-bold text-gray-900">{post.title}</h1>
                <div className="text-sm mt-2 text-gray-600">
                  Upload : <time dateTime={post.datetime}>{post.date}</time>
                </div>
                <img src={post.postImageUrl} alt={post.title} className="w-full py-6 h-96 object-cover rounded-2xl" />
                <p className="mt-2 text-gray-600 text-justify">{post.description}</p>
                <div className="flex items-center gap-x-4">
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
