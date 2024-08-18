"use client";

import { IBlogItem } from "@/app/blogs/page";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";

type BlogProps = {
  blogs: IBlogItem[];
};

export const Blogs = (props: BlogProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.ul
      className="flex flex-col gap-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {props.blogs.map((blog) => (
        <motion.li key={blog.id} variants={item}>
          <Link
            href={`/blogs/${blog.slug}`}
            className="flex items-center justify-between group"
            prefetch={false}
          >
            <p className="opacity-75 group-hover:opacity-100 transition-opacity duration-500 w-5/6">
              {blog.title}
            </p>
            <p className="text-xs opacity-60 w-1/6">
              {format(new Date(blog.updatedAt), "MMMM d, yyyy")}
            </p>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
