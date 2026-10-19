import Banner from '@/Component/homepage/Banner';
import Books from '@/Component/homepage/Books';

import React from 'react';

const page = () => {
  return (
    <div className='mx-w-7xl mx-auto'>
      <Banner></Banner>
      <Books ></Books>
    </div>
  );
};

export default page;