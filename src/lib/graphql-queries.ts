import { gql } from "graphql-request";

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    allHomepage(limit: 1) {
      heroTitle
      heroSubtitle
      heroVideo {
        asset {
          url
        }
      }
    }
    allCar(
      where: { featured: { eq: true } }
      sort: { topSpeed: DESC }
      limit: 8
    ) {
      _id
      name
      manufacturer
      year
      topSpeed
      acceleration
      price
      mainImage {
        asset {
          url
        }
      }
      era
    }
  }
`;

export const GET_ALL_CARS = gql`
  query GetAllCars {
    allCar(sort: { year: DESC }) {
      _id
      name
      manufacturer
      year
      topSpeed
      acceleration
      horsepower
      price
      description
      mainImage {
        asset {
          url
        }
      }
      gallery {
        asset {
          url
        }
      }
      era
      engineType
      features
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query GetCarById($id: ID!) {
    Car(id: $id) {
      _id
      name
      manufacturer
      year
      topSpeed
      acceleration
      horsepower
      price
      description
      mainImage {
        asset {
          url
        }
      }
      gallery {
        asset {
          url
        }
      }
      era
      engineType
      features
    }
  }
`;

export const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    allBlogPost(sort: { publishedAt: DESC }) {
      _id
      title
      slug {
        current
      }
      excerpt
      publishedAt
      author {
        name
        bio
        image {
          asset {
            url
          }
        }
      }
      mainImage {
        asset {
          url
        }
      }
      categories {
        title
      }
      era
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String!) {
    allBlogPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      _id
      title
      slug {
        current
      }
      excerpt
      publishedAt
      author {
        name
        bio
        image {
          asset {
            url
          }
        }
      }
      mainImage {
        asset {
          url
        }
      }
      categories {
        title
      }
      era
      bodyRaw
    }
  }
`;

export const GET_CARS_BY_ERA = gql`
  query GetCarsByEra($era: String!) {
    allCar(where: { era: { eq: $era } }, sort: { topSpeed: DESC }) {
      _id
      name
      manufacturer
      year
      topSpeed
      acceleration
      price
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;
