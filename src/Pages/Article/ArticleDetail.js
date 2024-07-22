import React from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../../Data/Posts';
import Breadcrumb from './components/Breadcrumb';
import Newsletter from '../../Components/NewsLetter';
import AuthorCard from './components/AuthorCard';
import { splitTextByWordCount } from '../../Utils/Utils'; // Impor fungsi dari file utils
import Header from '../../Components/Header';

export default function ArticleDetail() {
  const { slug } = useParams();
  const post = Posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Article not found</div>;
  }

  const paragraphs = splitTextByWordCount(post.description);

  return (
    <>
      <div>

        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={post.title} className="w-full h-56 object-cover " />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row">

          {/* Card Author for Desktop */}
          <div className="hidden md:block md:w-1/5">
            <AuthorCard author={post.author} date={post.date} />
          </div>
          {/* End Card Author for Desktop */}

          <div className="w-full md:w-4/5">
            <article className="mx-auto">
              <div className="md:ps-20">
                <Breadcrumb postTitle={post.title} />
                <h1 className="text-3xl mt-8 font-bold text-gray-900">{post.title}</h1>

                {/* Author Info for Mobile */}
                <div className="block md:hidden flex items-center mb-4">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
                {/* End Author Info for Mobile */}



                <img src={post.postImageUrl} alt={post.title} className="w-full py-6 h-96 object-cover rounded-2xl" />

                {/* Menampilkan paragraf-paragraf */}
                {paragraphs.map((para, index) => (
                  <p key={index} className="mt-2 text-gray-600 text-justify indent-paragraphs">
                    {para}
                  </p>
                ))}

                  <div className='py-3'></div>
                  <hr className=" border-t  border-gray-300" />
                <div className="flex items-center mt-4 space-x-4">
                  <div className="text-sm text-gray-500">
                    Upload : <time dateTime={post.datetime}>{post.date}</time>
                  </div>
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
