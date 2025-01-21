import React, { use } from "react";

const BlogPost = ({ params }) => {
  const { slug } = use(params);
  return (
    <div className=" flex w-full h-screen justify-center items-center">
      Blog Post: {slug}
    </div>
  );
};

export default BlogPost;
