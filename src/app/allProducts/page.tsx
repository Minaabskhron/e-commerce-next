import Image from "next/image";
import Button from "@/Components/myButton";
import { Star } from "lucide-react";

const fetchData = async () => {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  return res.json();
};

const Page = async () => {
  const { data } = await fetchData();
  return (
    <>
      <main className="container mx-auto p-10">
        <div className="grid grid-cols-1 p-10 space-x-2 space-y-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data.map((product: Iproduct, id: number) => {
            return (
              <div key={id} className="">
                <Image
                  src={product.imageCover}
                  width={300}
                  height={300}
                  alt={product.title}
                />
                <h6 className="text-base font-medium text-main">
                  {product.subcategory[0].name}
                </h6>
                <h6 className="text-base font-medium">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h6>
                <div className="flex justify-between mb-2">
                  <p>{product.price} EGP</p>
                  <div className="flex justify-center">
                    <Star size={20} color="#eac510" strokeWidth={1.75} />
                    <p>{product.ratingsAverage}</p>
                  </div>
                </div>
                <Button className="bg-main w-full hover:bg-gray-600 addToCart">
                  add to cart
                </Button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Page;
