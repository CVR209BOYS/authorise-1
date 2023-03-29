import React from "react";
import BookCard from "../Utils/BookCard";
import Carousel from "../Utils/Carousal";

export default function Book() {
  const coverPageUrl =
    "https://firebasestorage.googleapis.com/v0/b/authorise-f26ef.appspot.com/o/images%2Fservice3.png?alt=media&token=49b6377a-4580-40c9-98fb-32eefb8ad174";
  const title = "the subtle art of not giving a fuck!";
  const stars = "4.7";
  const authors = ["Mark Manson"];
  const genres = ["Self Growth", "Self Development"];
  return (
    <div className="border-2 border-red-500 overflow-hidden">
      best seller
      <Carousel />
    </div>
  );
}