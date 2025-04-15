"use client";
import { Card } from "@heroui/react";

const SkeletonCards = () => {
  const skeletonItems = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-6 xl:gap-4 max-w-[380px] md:max-w-none mx-auto">
      {skeletonItems.map((_, index) => (
        <Card
          key={index}
          className="max-w-sm h-[365px] animate-pulse bg-gray-200 rounded-xl"
        />
      ))}
    </div>
  );
};

export default SkeletonCards;
