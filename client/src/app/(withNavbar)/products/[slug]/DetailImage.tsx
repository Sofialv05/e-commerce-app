"use client";

import { useState } from "react";

export default function DetailImage({
  images,
  thumbnail,
}: {
  images: string[];
  thumbnail: string;
}) {
  const [mainImage, setMainImage] = useState(thumbnail);

  const handleChangeImage = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="xl:grid lg:grid-cols-4 h-full items-center justify-center p-6 md:p-10">
      <div className="md:col-span-3 flex justify-center items-center">
        <img
          src={mainImage}
          alt="Product"
          className="md:h-[400px] rounded object-cover"
        />
      </div>
      <div className="mt-4 xl:col-span-1 flex flex-row xl:flex-col justify-center gap-4 mx-auto">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className="md:w-[120px] md:h-[120px] flex items-center justify-center p-4 cursor-pointer"
            onClick={() => handleChangeImage(image)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
