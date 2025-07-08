/**
 * Shared asset reference from Sanity
 */
export interface AssetRef {
  url: string;
}
export interface FileAsset {
  asset: AssetRef;
}

/**
 * Homepage section types
 */
export interface Engine {
  name: string;
  description: string;
  specs: string;
  cars: string[];
}
export interface EngineVariant {
  key: string;
  label: string;
  engines: Engine[];
}
export interface LegendaryEngines {
  title: string;
  subtitle: string;
  videoUrl: FileAsset;
  variants: EngineVariant[];
}

export interface SpeedRecord {
  title: string;
  record: string;
  holder: string;
  year: string;
}
export interface SpeedRecordsSection {
  title: string;
  subtitle: string;
  videoUrl: FileAsset;
  records: SpeedRecord[];
}

export interface Homepage {
  heroTitle: string;
  heroSubtitle: string;
  heroVideo: FileAsset;
  legendaryEngines?: LegendaryEngines;
  speedRecordsSection?: SpeedRecordsSection;
}

/**
 * Car types (summary and detail)
 */
export interface Car {
  _id: string;
  name: string;
  manufacturer: string;
  year: number;
  topSpeed: number;
  acceleration: string;
  horsepower?: number; // optional for summary
  price: string;
  description?: string;
  mainImage: FileAsset;
  gallery?: FileAsset[];
  era: string;
  engineType?: string;
  features?: string[];
}

/**
 * Blog types
 */
export interface Author {
  name: string;
  bio?: string;
  image?: FileAsset;
}
export interface Category {
  title: string;
}
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: Author;
  mainImage: FileAsset;
  categories?: Category[];
  era?: string;
  bodyRaw?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Hero singleton types
 */
export interface BlogHeroData {
  heroTitle: string;
  heroSubtitle: string;
  heroVideo: FileAsset;
}
export interface ModelsHeroData {
  heroTitle: string;
  heroSubtitle: string;
  heroVideo: FileAsset;
}

/**
 * GraphQL response wrappers
 */
export interface GetHomepageDataResponse {
  allHomepage: Homepage[];
  allCar: Car[];
}
export interface GetAllCarsResponse {
  allCar: Car[];
}
export interface GetCarByIdResponse {
  Car: Car;
}
export interface GetAllBlogPostsResponse {
  allBlogPost: BlogPost[];
}
export interface GetBlogPostBySlugResponse {
  allBlogPost: BlogPost[];
}
export interface GetCarsByEraResponse {
  allCar: Car[];
}
export interface GetBlogHeroResponse {
  allBlogHero: BlogHeroData[];
}
export interface GetModelsHeroResponse {
  allModelsHero: ModelsHeroData[];
}
