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
    <div className="grid grid-cols-4 h-full items-center justify-center p-10">
      <div className="col-span-3 flex justify-center items-center">
        <img
          src={mainImage}
          alt="Product"
          className="h-[400px] rounded object-cover"
        />
      </div>
      <div className="mt-4 col-span-1 flex flex-col justify-center gap-4 mx-auto">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className="w-[120px] h-[120px] flex items-center justify-center p-4 cursor-pointer"
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
