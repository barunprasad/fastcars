import { graphqlClient } from "@/lib/graphql-client";
import {
  GET_HOMEPAGE_DATA,
  GET_ALL_CARS,
  GET_CAR_BY_ID,
  GET_ALL_BLOG_POSTS,
  GET_BLOG_POST_BY_SLUG,
  GET_CARS_BY_ERA,
  GET_BLOG_HERO,
  GET_MODELS_HERO,
} from "@/lib/graphql-queries";
import {
  GetAllBlogPostsResponse,
  GetAllCarsResponse,
  GetBlogHeroResponse,
  GetBlogPostBySlugResponse,
  GetCarByIdResponse,
  GetCarsByEraResponse,
  GetHomepageDataResponse,
  GetModelsHeroResponse,
} from "@/types/sanity";

export async function getHomepageData() {
  const data =
    await graphqlClient.request<GetHomepageDataResponse>(GET_HOMEPAGE_DATA);
  const homepage = data.allHomepage[0] || {};
  return {
    homepage,
    featuredCars: data.allCar || [],
    legendary: homepage?.legendaryEngines || null,
    speedRecordsSection: homepage.speedRecordsSection ?? null,
  };
}

export async function getAllCars() {
  const data = await graphqlClient.request<GetAllCarsResponse>(GET_ALL_CARS);
  return data.allCar;
}

export async function getCarById(id: string) {
  const data = await graphqlClient.request<GetCarByIdResponse>(GET_CAR_BY_ID, {
    id,
  });
  return data.Car;
}

export async function getAllBlogPosts() {
  const data =
    await graphqlClient.request<GetAllBlogPostsResponse>(GET_ALL_BLOG_POSTS);

  return data.allBlogPost;
}

export async function getBlogPostBySlug(slug: string) {
  const data = await graphqlClient.request<GetBlogPostBySlugResponse>(
    GET_BLOG_POST_BY_SLUG,
    { slug },
  );
  return data.allBlogPost[0];
}

export async function getCarsByEra(era: string) {
  const data = await graphqlClient.request<GetCarsByEraResponse>(
    GET_CARS_BY_ERA,
    { era },
  );

  return data.allCar;
}

export async function getBlogHeroData() {
  const data = await graphqlClient.request<GetBlogHeroResponse>(GET_BLOG_HERO);

  return data.allBlogHero[0] || null;
}

export async function getModelsHeroData() {
  const data =
    await graphqlClient.request<GetModelsHeroResponse>(GET_MODELS_HERO);
  return data.allModelsHero[0] || null;
}
