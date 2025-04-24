import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
  const about = useLoaderData();
  console.log(about);

  return (
    <div className="p-6 text-center">
      
      <div className="flex  flex-wrap gap-6 justify-start">
        {about.blogs.map((blog) => (
          <div key={blog.slug} className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-950">{blog.title}</h3>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
