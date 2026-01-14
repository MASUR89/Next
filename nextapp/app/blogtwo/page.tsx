import Image from "next/image";

const PageTwo = () => {
  return (
    <div>   
        <h1>Page Two</h1>
        <p>Another new image</p>
        <Image src="https://www.bu.edu/files/2024/03/lq-feat-crop-SGRA_polarimetric_press_image.jpg" alt="Blog Image" width={100} height={100} />
    </div>
    );
};
export default PageTwo;