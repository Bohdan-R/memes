"use client";
import { Meme } from "../types/index";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const initialMemes: Meme[] = [
  {
    id: 1,
    name: "Random meme 1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArxioQw0uitoY6fjMoa-GkuolszfQvaMN9A&s.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 2,
    name: "Random meme 2",
    imageUrl:
      "https://cs12.pikabu.ru/post_img/2022/12/04/11/167017736519472936.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 3,
    name: "Random meme 3",
    imageUrl:
      "https://cdn.idaprikol.ru/images/f81750cd976dd89bbd954a7441ae62b1645d60c5116155f4336dd4a34a780343_1.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 4,
    name: "Random meme 4",
    imageUrl:
      "https://jeka.by/upload/userfiles/1/images/img_developer/developer1.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 5,
    name: "Random meme 5",
    imageUrl:
      "https://sun9-40.userapi.com/impf/q8Ha15B6_ilsPbOm3b7ly0cT_GB48DFd-ND84A/i6ZN2Fn8Qvs.jpg?size=400x400&quality=96&sign=95f275485bf8ec973d05b5d3f3565e82&type=album",
    likes: getRandomNumber(),
  },
  {
    id: 6,
    name: "Random meme 6",
    imageUrl:
      "https://i.pinimg.com/236x/2a/30/75/2a3075f173b0d254d6d8456ce0763c4b.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 7,
    name: "Random meme 7",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiiYDVpkepufj3Tm8-UhpcvB44Pn10gpg1A&s.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 8,
    name: "Random meme 8",
    imageUrl:
      "https://skillbox.ru/upload/setka_images/14055326052022_0ed1686442ac630326a48ddcef43684fa02b904b.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 9,
    name: "Random meme 9",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBB5BHmmbJQTtwb7Dvhvd26rlQItKX7Nu-Q&s.jpg",
    likes: getRandomNumber(),
  },
  {
    id: 10,
    name: "Random meme 10",
    imageUrl:
      "https://cs14.pikabu.ru/post_img/2022/11/25/6/1669368966112972849.jpg",
    likes: getRandomNumber(),
  },
];

export const getMemes = (): Meme[] => {
  if (typeof window === "undefined") return initialMemes;
  const memes = localStorage.getItem("memes");

  return memes ? JSON.parse(memes) : initialMemes;
};

export const saveMeme = (updatedMeme: Meme) => {
  if (typeof window === "undefined") return;
  const memes = getMemes();
  const updatedMemes = memes.map((meme) =>
    meme.id === updatedMeme.id ? updatedMeme : meme,
  );

  localStorage.setItem("memes", JSON.stringify(updatedMemes));
};
