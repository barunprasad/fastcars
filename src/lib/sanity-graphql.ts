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

export async function getHomepageData() {
  const data = (await graphqlClient.request(GET_HOMEPAGE_DATA)) as any;
  const homepage = data.allHomepage[0] || {};
  return {
    homepage,
    featuredCars: data.allCar || [],
    legendary: homepage?.legendaryEngines || null,
    speedRecordsSection: homepage.speedRecordsSection ?? null,
  };
}

export async function getAllCars() {
  const data = (await graphqlClient.request(GET_ALL_CARS)) as any;
  return data.allCar;
}

export async function getCarById(id: string) {
  const data = (await graphqlClient.request(GET_CAR_BY_ID, { id })) as any;
  return data.Car;
}

export async function getAllBlogPosts() {
  const data = (await graphqlClient.request(GET_ALL_BLOG_POSTS)) as any;
  return data.allBlogPost;
}

export async function getBlogPostBySlug(slug: string) {
  const data = (await graphqlClient.request(GET_BLOG_POST_BY_SLUG, {
    slug,
  })) as any;
  return data.allBlogPost[0];
}

export async function getCarsByEra(era: string) {
  const data = (await graphqlClient.request(GET_CARS_BY_ERA, { era })) as any;
  return data.allCar;
}

export async function getBlogHeroData() {
  const { allBlogHero } = (await graphqlClient.request(GET_BLOG_HERO)) as any;
  return allBlogHero[0] || null;
}

export async function getModelsHeroData() {
  const { allModelsHero } = (await graphqlClient.request(
    GET_MODELS_HERO,
  )) as any;
  return allModelsHero[0] || null;
}
