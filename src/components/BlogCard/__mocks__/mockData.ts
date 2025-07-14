export const mockBlogPost = {
  _id: "1",
  title: "Mock Blog Post Title",
  excerpt: "This is a mock excerpt for testing purposes",
  slug: { current: "mock-blog-post" },
  publishedAt: "2023-01-01T10:00:00Z",
  author: { name: "John Doe" },
  mainImage: {
    asset: {
      url: "/mock-image.jpg",
    },
  },
  categories: [{ title: "Technology" }, { title: "Innovation" }],
  era: "2020s",
};

export const mockBlogPostWithoutImage = {
  _id: "2",
  title: "Blog Post Without Image",
  excerpt: "This post has no main image",
  slug: { current: "blog-post-without-image" },
  publishedAt: "2023-01-01T10:00:00Z",
  author: { name: "Jane Smith" },
};

export const mockBlogPostWithoutCategories = {
  _id: "3",
  title: "Blog Post Without Categories",
  excerpt: "This post has no categories",
  slug: { current: "blog-post-without-categories" },
  publishedAt: "2023-01-01T10:00:00Z",
  author: { name: "Bob Johnson" },
  mainImage: {
    asset: {
      url: "/mock-image.jpg",
    },
  },
  era: "2010s",
};

export const mockBlogPostWithoutEra = {
  _id: "4",
  title: "Blog Post Without Era",
  excerpt: "This post has no era",
  slug: { current: "blog-post-without-era" },
  publishedAt: "2023-01-01T10:00:00Z",
  author: { name: "Alice Williams" },
  mainImage: {
    asset: {
      url: "/mock-image.jpg",
    },
  },
  categories: [{ title: "Classic Cars" }],
};

export const mockBlogPostMinimal = {
  _id: "5",
  title: "Minimal Blog Post",
  excerpt: "Short",
  slug: { current: "minimal-blog-post" },
  publishedAt: "2023-01-01T10:00:00Z",
  author: { name: "Test Author" },
};
