import {
  IBlog,
  IBlogQueryResponse,
  IBlogsQueryResponse,
  ICategoriesQueryResponse,
  ICategory,
} from "@/types";
import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL +
  "/master";

const getCategories = async (): Promise<ICategory[]> => {
  const query = gql`
    {
      categories {
        id
        title
      }
    }
  `;
  const result: ICategoriesQueryResponse = await request(MASTER_URL, query);
  return result.categories;
};

const getBlogs = async (): Promise<IBlog[]> => {
  const query = gql`
    query Blogs {
      blogs {
        id
        slug
        title
        smallDescription
        updatedAt
        category {
          title
        }
        author {
          name
        }
        blogTags {
          id
          tags
        }
      }
    }
  `;

  const result: IBlogsQueryResponse = await request(MASTER_URL, query);

  return result.blogs;
};

const getBlogDetails = async (slug: string): Promise<IBlog | null> => {
  const query = gql`
    query BlogDetails($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        content {
          markdown
        }
        updatedAt
        category {
          title
        }
        author {
          name
          avatar {
            url
            fileName
          }
        }
        blogTags {
          id
          tags
        }
      }
    }
  `;

  const variables = { slug };

  const result: IBlogQueryResponse = await request(
    MASTER_URL,
    query,
    variables
  );

  return result.blog;
};

export default {
  getCategories,
  getBlogs,
  getBlogDetails,
};
