import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../../domain/posts/post';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import HomePage from '../../../containers/HomePage';
import { useRouter } from 'next/router';
import { PaginationData } from '../../../domain/pagination';
import { countAllPosts } from '../../../data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string:
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Pagina não encontrtada</div>;

  return <HomePage posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';
  const postsPerPage = 9;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previusPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);


    const numberOfPosts = await Number(countAllPosts(categoryQuery));
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previusPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 60,
  };
};
