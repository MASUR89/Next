import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>  
        <h1>Blog Page </h1> 
        <p>Some new page</p>
        <Image src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" alt="Blog Image" width={100} height={100} />
        
    </div>
  );
};

export default Page;