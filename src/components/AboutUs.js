import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to <span className='text-red-500'>Trendy Shop</span>
        </h2>
        <p className="text-gray-600 leading-loose">
          At Neo Desire, we believe in the power of quality and the joy of
          discovery. Our journey began with a simple idea: to create an online
          shopping experience that goes beyond transactions and transforms into
          memorable moments.
        </p>
        <p className="text-gray-600 leading-loose mt-4">
          Born out of passion, our brand is a celebration of uniqueness and
          craftsmanship. We curate a collection of products that not only meet
          your needs but also tell a story. Each item is carefully selected,
          reflecting our commitment to style, functionality, and innovation.
        </p>
        <p className="text-gray-600 leading-loose mt-4">
          What sets us apart is not just what we sell but the way we connect
          with our community. We believe in fostering a sense of belonging and
          strive to create a space where you feel inspired and valued.
        </p>
        <p className="text-gray-600 leading-loose mt-4">
          Our team is dedicated to ensuring your shopping experience is seamless
          and enjoyable. From the moment you browse our site to the day your
          carefully packaged order arrives, we want you to feel the excitement
          of discovering something special.
        </p>
        <p className="text-gray-600 leading-loose mt-4">
          Thank you for being a part of our journey. Together, let's continue
          to explore, inspire, and redefine the way we shop.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
