import React from "react";
import BlogOne from "../../../Assets/Blogs/blog_1.jpg";
import BlogTwo from "../../../Assets/Blogs/blog_2.jpeg";
import BlogThree from "../../../Assets/Blogs/blog_3.jpg";
import Image from "next/image";
import { FaArrowRight, FaRegComment } from "react-icons/fa";
import useBlogs from "@/src/Hooks/useBlogs/useBlogs";


const HomeBlogs = () => {
  const { blogData, blogLoaded } = useBlogs();

  if (blogLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pt-[15px] pb-[30px] mx-2">
      <div className="title my-6">
        <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
          Our Blog Posts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData &&
          blogData?.slice(0,3).map((blog) => {
            return (
              <div
                className="cardBody md:m-0 flex flex-col justify-center  duration-200 hover:border-red-500 w-full"
                key={blog._id}
              >
                <div className="blogImage">
                  <Image
                    src={blog?.blogImage}
                    width={"500"}
                    height={"200"}
                    alt="blog Image"
                    className="w-full h-[18rem]"
                  />
                </div>
                <hr className="w-full bg-slate-400" />
                <div className="blogIntarection flex text-gray-500 justify-center py-2 items-center gap-4">
                  <div>{blog?.blogAuthor}</div>
                  <div>{blog?.blogDate}</div>
                  <div className="blogLike">
                    <div className="flex justify-center items-center gap-2">
                      <FaRegComment /> {blog?.blogComment?.length}
                    </div>
                  </div>
                </div>
                <div className="blogInfo mt-2 p-2">
                  <h2 className="blogName font-bold ">{blog?.blogTitle}</h2>
                  <p className="blogDescription py-3">{blog?.blogContent}</p>
                </div>

                <div className="blogAddToCart flex gap-5 items-center">
                  <div>
                    <button className="border  px-4 py-4 flex justify-center items-center gap-4  hover:border-red-500 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500">
                      See More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HomeBlogs;
