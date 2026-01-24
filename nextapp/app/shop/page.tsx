import Image from "next/image";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
