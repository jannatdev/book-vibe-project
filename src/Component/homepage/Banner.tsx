import Image from 'next/image';
import React from 'react';
import bannerImage from '@/app/asset/pngwing 1.jpg'

const Banner = () => {
    return (
       <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-100 rounded-2xl px-8 md:px-16 py-10 md:py-14">

    {/* Left Content */}
    <div className="max-w-xl text-center md:text-left">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
        Discover Your Next Read
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
        Books to freshen up
        <br />
        your bookshelf
      </h1>

      <p className="mt-5 max-w-md text-gray-600 leading-relaxed">
        Explore a collection of inspiring stories, timeless classics,
        and exciting new books for every reader.
      </p>

      <button className="mt-7 btn btn-success px-7">
        View the List
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <Image
        src={bannerImage}
        width={280}
        height={280}
        alt="Books banner"
        className="w-56 md:w-64 lg:w-72 object-contain"
        priority
      />
    </div>

  </div>
</div>
    );
};

export default Banner;