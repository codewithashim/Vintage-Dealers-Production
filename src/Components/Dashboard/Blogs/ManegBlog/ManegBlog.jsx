import useBlogs from "@/src/Hooks/useBlogs/useBlogs";
import React from "react";
import ManegBlogCard from "./ManegBlogCard/ManegBlogCard";

const ManegBlog = () => {
  const { blogData, blogLoaded, refetchBlogs } = useBlogs();

  return (
    <section>
      <div className="my-4">
        <h1>Manage Blog</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
        {blogData &&
          blogData.length &&
          blogData.map((blog) => {
            return <ManegBlogCard key={blog._id} blog={blog} />;
          })}
      </div>
    </section>
  );
};

export default ManegBlog;
