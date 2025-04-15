import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

import { Meme } from "../types/index";

interface MemeCardProps {
  meme: Meme;
}

export default function MemeCard({ meme }: MemeCardProps) {
  return (
    <Card isFooterBlurred={false}>
      <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start flex-grow">
        <h4 className="font-bold text-large py-1">{meme.name}</h4>
      </CardHeader>
      <CardBody className=" overflow-hidden py-2">
        <Image
          removeWrapper
          alt="Card background"
          className=" object-cover rounded-xl"
          height={250}
          src={meme.imageUrl}
        />
      </CardBody>
      <CardFooter className="justify-between">
        <div className="flex items-center text-base">
          <FaHeart className="text-blue-500 mr-1" />
          <span className="text-default-500">{meme.likes}</span>
        </div>
        <Link
          className="bg-blue-500 hover:bg-blue-600 rounded px-2 py-1 ml-auto text-white transition-colors duration-300 ease-in-out"
          href={meme.imageUrl}
        >
          Go to meme
        </Link>
      </CardFooter>
    </Card>
  );
}
