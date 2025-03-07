"use client";
import * as React from "react";
import { Header } from "../components/Header";
import { FeaturedPosts } from "./FeaturedPosts";
import { MoreBlogs } from "./MoreBlogs";
import { Footer } from "../components/Footer";

const Blogpage = () => {
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <main className="flex flex-col items-center mt-20 w-full max-md:mt-20 max-md:max-w-full">
        <FeaturedPosts />
        <MoreBlogs />
      </main>
      <Footer />
    </div>
  );
};

export default Blogpage;
