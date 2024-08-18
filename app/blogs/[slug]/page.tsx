"use client";
import Image from "next/image";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BookOpen, Clipboard, Dot } from "lucide-react";
import toast from "react-hot-toast";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  nightOwl,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ScrollToTopButton from "@/components/shared/scroll-to-top";
import globalApi from "@/services/global.api";
import { Skeleton } from "@/components/ui/skeleton";

type BlogDetails = {
  author: { name: string; avatar: Avatar };
  category: { title: string };
  content: { markdown: string };
  id: string;
  title: string;
  updatedAt: string | undefined;
  blogTags: { id: string; tags: string }[];
};

type Avatar = {
  fileName: string | undefined;
  url: string | undefined;
};

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);
  const [readingTime, setReadingTime] = useState<number | null>(null);

  const handleCopyClick = (text: React.ReactNode) => {
    const textString = text ? text.toString() : "";
    navigator.clipboard.writeText(textString);
    toast.success(`Copied to clipboard`);
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  useEffect(() => {
    if (blogDetails?.content.markdown) {
      const wordCount = countWords(blogDetails.content.markdown);
      const avgReadingSpeed = 150;
      const estimatedTime = Math.ceil(wordCount / avgReadingSpeed);
      setReadingTime(estimatedTime);
    }
  }, [blogDetails]);

  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).length;
  };

  const getBlogDetails = () => {
    globalApi.getBlogDetails(params.slug).then((resp: any) => {
      setBlogDetails(resp);
    });
  };

  const SyntaxHighlightedPre = ({
    preText,
    handleCopyClick,
  }: {
    preText?: string;
    handleCopyClick: (text: string) => void;
  }) => {
    const textToDisplay = preText || "";

    return (
      <div>
        <div className="flex items-center justify-between">
          <span>code</span>
          <CopyToClipboard
            text={textToDisplay}
            onCopy={() => handleCopyClick(textToDisplay)}
          >
            <Clipboard
              size={16}
              strokeWidth={2}
              className="hover:text-green-500 duration-300 transition-all cursor-pointer"
            />
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          language="ts"
          style={atomOneDark}
          showLineNumbers={true}
          lineNumberStyle={{ color: "gray" }}
          customStyle={{ backgroundColor: "dark" }}
          wrapLongLines={true}
        >
          {textToDisplay}
        </SyntaxHighlighter>
      </div>
    );
  };

  return (
    <div className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto pt-20 pb-40 flex flex-col gap-10 md:gap-20">
      <ScrollToTopButton />
      <div className="flex flex-col gap-4">
        {blogDetails ? (
          <>
            <h3 className="text-4xl font-bold">{blogDetails?.title}</h3>
          </>
        ) : (
          <div className="flex flex-col gap-1">
            <Skeleton className="h-8 w-full rounded-xl" />
          </div>
        )}

        {blogDetails && blogDetails.updatedAt ? (
          <p className="opacity-70">
            {format(new Date(blogDetails.updatedAt), "dd MMM, yyyy")}
          </p>
        ) : (
          <Skeleton className="h-4 w-full" />
        )}

        <ul className="flex items-center gap-2">
          {blogDetails?.blogTags.map((tag) => (
            <li
              key={tag.id}
              className="text-xs px-1 rounded border border-foreground/15 bg-foreground/10 opacity-70"
            >
              {tag.tags}
            </li>
          ))}
        </ul>
      </div>
      {blogDetails ? (
        <div className="markdown">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              pre: ({ node, ...props }) => {
                const preText = React.isValidElement(props.children)
                  ? (
                      props.children.props.children as React.ReactNode
                    )?.toString()
                  : "";

                return (
                  <SyntaxHighlightedPre
                    preText={preText}
                    handleCopyClick={handleCopyClick}
                  />
                );
              },
              code: ({ node, ...props }) => {
                if (!node) {
                  return <code {...props} />;
                }

                const codeText = node.children
                  .map((child) => (child.type === "text" ? child.value : ""))
                  .join("");

                return (
                  <CopyToClipboard
                    text={codeText || ""}
                    onCopy={() => handleCopyClick(codeText)}
                  >
                    <SyntaxHighlighter
                      language="jsx"
                      style={atomOneDark}
                      wrapLongLines={true}
                    >
                      {codeText}
                    </SyntaxHighlighter>
                  </CopyToClipboard>
                );
              },
            }}
          >
            {blogDetails.content.markdown}
          </Markdown>
        </div>
      ) : (
        <>
          <Skeleton className="h-60 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-60 w-11/12 rounded-xl" />
        </>
      )}
    </div>
  );
};

export default BlogDetails;
