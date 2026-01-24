import Image from "next/image";

const PageTwo = () => {
  return (
    <div>   
        <h1>Page Two</h1>
        <p>Another new image</p>
        <Image src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" alt="Blog Image" width={500} height={100} />
    </div>
    );
};
export default PageTwo;