"use client";
import { getMemes } from "../../lib/utils";

import MemeCard from "@/components/MemeCard";

export default function ListPage() {
  const memes = getMemes();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-6 xl:gap-4 max-w-[380px] md:max-w-none mx-auto">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
