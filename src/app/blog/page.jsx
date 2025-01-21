import Link from "next/link";
import React from "react";

const BlogPage = () => {
  const blogs = [
    "artikel_1",
    "artikel_2",
    "artikel_3",
    "artikel_4",
    "artikel_5",
  ];
  return (
    <div className=" px-6 py-4">
      <ol>
        {blogs.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post}`} className=" underline">
              {post}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogPage;
