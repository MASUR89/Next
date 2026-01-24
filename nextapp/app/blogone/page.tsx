import Image from "next/image";

const PageOne = () => {
  return (
    <div>   
        <h1>Page One</h1>
        <p>New image</p>
        <Image src="https://h5p.org/sites/default/files/h5p/content/825/images/image-53e9e429bba63.jpg" alt="Blog Image" width={500} height={300} />
    </div>
    );
};

export default PageOne;