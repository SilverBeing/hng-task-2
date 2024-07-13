"use client";

import Image from "next/image";

export default function Gallery({ photos }) {
  return (
    <div className={`grid grid-cols-5`}>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={`https://api.timbu.cloud/images/${photo.url}`}
          alt=""
          width={300}
          height={300}
          className="w-[90px] h-[120px] object-contain"
        />
      ))}
    </div>
  );
}
