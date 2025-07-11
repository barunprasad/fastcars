# Next.js Guidelines, Standards, and Best Practices

## App Router Focus

These guidelines emphasize the Next.js App Router, React Server Components, and recommended patterns for high performance, maintainability, and scalability.

## Project Structure

Maintain clarity and scalability by adhering strictly to the App Router structure.

### Recommended Structure

```
project-root/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ loading.tsx               # Global loading state
│  │  ├─ error.tsx                 # Global error boundary
│  │  ├─ (dashboard)/              # Route Group for Dashboard
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ loading.tsx            # Dashboard-specific loading state
│  │  │  ├─ error.tsx              # Dashboard-specific error boundary
│  │  │  └─ settings/
│  │  │     ├─ page.tsx
│  │  │     ├─ loading.tsx         # Loading state for Settings
│  │  │     └─ error.tsx           # Error boundary for Settings
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/                # Dynamic route for individual posts
│  │  │     ├─ page.tsx
│  │  │     ├─ loading.tsx         # Loading state for individual post
│  │  │     └─ error.tsx           # Error boundary for individual post
│  │  └─ shop/
│  │     └─ [[...category]]/       # Optional Catch-all route
│  │        ├─ page.tsx
│  │        ├─ loading.tsx         # Loading state for shop categories
│  │        └─ error.tsx           # Error boundary for shop categories
│  │
│  ├─ components/                  # Reusable components folder
│  │  ├─ Header/                   # Example of component structure
│  │  │  ├─ __mocks__/             # Mock data/helpers for tests
│  │  │  ├─ Header.graphql         # GraphQL fragment/query
│  │  │  ├─ Header.stories.tsx     # Storybook stories
│  │  │  ├─ Header.styles.ts       # Component styles or utility classes
│  │  │  ├─ Header.test.ts         # Component tests
│  │  │  └─ index.tsx              # Main component file
│  │  │
│  │  ├─ Footer/
│  │  │  ├─ Footer.stories.tsx
│  │  │  ├─ Footer.test.ts
│  │  │  └─ index.tsx
│  │  │
│  │  └─ PostCard/
│  │     ├─ PostCard.stories.tsx
│  │     ├─ PostCard.test.ts
│  │     └─ index.tsx
│  │
│  ├─ utils/                       # Reusable utility functions
│  │  ├─ formatDate.ts
│  │  ├─ apiClient.ts
│  │  └─ helpers.ts
│  │
│  ├─ hooks/                       # Custom hooks
│  │  └─ useUserData.ts
│  │
│  └─ styles/                      # Global styles (if any)
│     ├─ globals.css
│     └─ typography.css
│
├─ public/                         # Static assets
│  ├─ images/
│  └─ icons/
│
├─ e2e/                            # Integration tests (e2e)
│  └─ integration/
│
├─ next.config.ts                  # Next.js configuration
├─ postcss.config.mjs              # PostCSS configuration
├─ tsconfig.json                   # TypeScript configuration
├─ package.json                    # Project dependencies
└─ README.md                       # Project documentation
```

### Explanation of Structure Choices

#### App Router (app/):

- Clearly defines route-specific layouts, error, and loading states
- Uses brackets [...] for dynamic routes and [[...]] for optional catch-all segments

#### Components:

Follows a co-located structure to encapsulate everything related to the component:

- GraphQL queries/fragments (Header.graphql)
- Storybook stories (Header.stories.tsx)
- Unit tests (Header.test.ts)
- Styles (Header.styles.ts or utility-based classes)
- Mock data (**mocks**/ for testing)

#### Loading/Error:

- loading.tsx and error.tsx are provided at each meaningful route level to manage granular states, minimizing UI shifts and improving user experience

#### Utilities and Hooks:

- Clearly separated to enhance reusability across the application

#### e2e:

- Integration tests are distinctly placed outside the main source (src) for clear differentiation

## Advanced Routing & Layouts

### Dynamic Routes with Promise-based Params

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  return <article>{post.title}</article>;
}
```

### Catch-all & Optional Catch-all Segments

#### Catch-all ([...slug]):

```tsx
// app/docs/[...slug]/page.tsx
export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const docs = await fetchDocs(slug.join("/"));

  return <div>{docs.content}</div>;
}
```

#### Optional Catch-all ([[...slug]]):

```tsx
// app/shop/[[...category]]/page.tsx
export default async function ShopPage({
  params,
}: {
  params: Promise<{ category?: string[] }>;
}) {
  const { category } = await params;
  const products = await fetchProducts(category?.join("/") || "all");

  return (
    <div>
      <h1>{category?.join(" / ") || "All Products"}</h1>
      {products.map((p) => (
        <Product key={p.id} data={p} />
      ))}
    </div>
  );
}
```

## Data Fetching

Prioritize fetching on the server with React Server Components for better performance and SEO:

```tsx
// app/dashboard/page.tsx
export default async function Dashboard() {
  const user = await fetchUserData();
  return <h1>Welcome, {user.name}</h1>;
}
```

## Image Optimization

Leverage Next.js sizes prop for responsive images:

```tsx
import Image from "next/image";

export const ResponsiveBanner = () => (
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
    priority
  />
);
```

**Explanation:**
Adapts the served image size according to viewport width to optimize load times.

## Environment Variables

Clearly define variables per environment:

- `.env.local` ← Local Development
- `.env.development` ← Development Environment
- `.env.production` ← Production Environment

Access via:

```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL}/endpoint`);
```

### Example Usage:

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.prod.example.com
DATABASE_URL=postgres://prod_db_url
```

## Styling (Tailwind CSS Preferred)

Primary styling with Tailwind CSS:

```tsx
export const Button = ({ active }: { active?: boolean }) => (
  <button
    className={`px-4 py-2 rounded ${active ? "bg-blue-500" : "bg-gray-300"}`}
  >
    Click Me
  </button>
);
```

Use CSS modules as a secondary option for complex styling scenarios only.

## Error Handling and Loading States

### Error Handling Scenarios

#### Case 1: Essential UI (Fail Safely with User Recovery)

```tsx
// app/profile/error.tsx
export default function ProfileError({ error, reset }) {
  return (
    <div className="text-center">
      <h2 className="text-red-500">Unable to load profile.</h2>
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Retry
      </button>
    </div>
  );
}
```

**Use Case:** Critical user info, orders, or primary content.

#### Case 2: Non-Critical UI (Silent Fail)

```tsx
// components/Recommendations.tsx
export const Recommendations = async () => {
  try {
    const items = await fetchRecommendations();
    return items.map((item) => <Item key={item.id} data={item} />);
  } catch {
    return null; // Content omitted gracefully
  }
};
```

**Use Case:** Optional sidebar widgets, recommendations, advertisements.

### Realistic Loading States (Prevent UI Shift)

#### Example: User Profile

**Component:**

```tsx
// app/profile/page.tsx
export default async function UserProfile() {
  const user = await fetchUser();
  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  );
}
```

**Loading State:**

```tsx
// app/profile/loading.tsx
export default function UserProfileLoading() {
  return (
    <div className="animate-pulse">
      <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div className="h-6 bg-gray-300 rounded mt-4 w-32"></div>
    </div>
  );
}
```

## Performance Considerations

1. **Server-first:** Always default to server-rendered components.

2. **Dynamic Imports:** Lazy-load large client-side components.

   ```tsx
   import dynamic from "next/dynamic";
   const AnalyticsChart = dynamic(() => import("@/components/AnalyticsChart"), {
     ssr: false,
   });
   ```

3. **Granular Caching:** Explicitly set fetch cache behavior.

   ```tsx
   await fetch("/api/posts", { cache: "force-cache" });
   await fetch("/api/stats", { cache: "no-store" });
   ```

4. **Deferred Loading (React Suspense):** Optimize load perception.

   ```tsx
   import { Suspense } from "react";
   import PostListSkeleton from "@/components/skeletons/PostListSkeleton";

   export default function HomePage() {
     return (
       <Suspense fallback={<PostListSkeleton />}>
         <PostList />
       </Suspense>
     );
   }
   ```

## New Features in Next.js v15.x

Next.js v15.x introduces significant enhancements, optimizing the development experience and improving performance:

### Partial Prerendering (PPR) for Improved Caching

Enables incremental rendering at component-level granularity.
Enhances caching, allowing static segments to be cached independently from dynamic sections, leading to faster subsequent requests.

**Example:**

```tsx
export const dynamic = "auto";

export default async function Home() {
  const staticData = await fetch("/static-data", { cache: "force-cache" });
  const dynamicData = await fetch("/dynamic-data", { cache: "no-store" });

  return (
    <>
      <StaticSection data={staticData} /> {/* Prerendered */}
      <DynamicSection data={dynamicData} /> {/* Rendered dynamically */}
    </>
  );
}
```

### Enhanced React Server Actions

Improved integration with server-side logic directly in components.
Simplified form submissions and server-side mutations without manual API handlers.

**Example:**

```tsx
// actions.ts
"use server";
export async function createUser(formData: FormData) {
  await saveUser(formData.get("name"), formData.get("email"));
}

// FormComponent.tsx
import { createUser } from "./actions";

export default function Form() {
  return (
    <form action={createUser}>
      <input name="name" />
      <input name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Route-level Caching and Revalidation Improvements

More granular cache controls at the route-level for improved performance and data freshness.

**Example:**

```tsx
// app/blog/page.tsx
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Blog() {
  const posts = await fetch("/posts", { next: { revalidate: 60 } });
  return posts.map((post) => <Post key={post.id} post={post} />);
}
```

## Common Pitfalls to Avoid

### 1. Overusing Client-side Components ('use client')

- **Avoid:** Marking components as client components unless interactivity demands it
- **Instead:** Render on server by default

### 2. Fetching Data Client-side Unnecessarily

- **Problem:** Reduces SEO effectiveness, delays content loading
- **Instead:** Fetch data server-side or with server components for better performance and SEO

### 3. Forgetting Route-specific Error/Loading Handling

- **Problem:** Leads to unhandled UI shifts and poor UX
- **Instead:** Implement loading/error boundaries per route segment:
  ```
  // Correct usage:
  app/blog/loading.tsx
  app/blog/error.tsx
  ```

### 4. Placing Large Providers in Root Layout

- **Problem:** Unnecessarily increases bundle size, affects initial load time
- **Instead:** Scope providers narrowly where needed:
  ```tsx
  // app/(dashboard)/layout.tsx
  export default function DashboardLayout({ children }) {
    return <DashboardContextProvider>{children}</DashboardContextProvider>;
  }
  ```

### 5. Not Configuring Cache/Revalidate Settings

- **Problem:** Leads to stale data or no caching, negatively impacting performance
- **Instead:** Explicitly define cache policies:
  ```tsx
  await fetch("/data", { next: { revalidate: 120 } });
  ```

### 6. Ignoring Error Boundaries

- **Problem:** Results in unstable UX and hard-to-diagnose issues
- **Instead:** Always implement route-specific error components:
  ```tsx
  // app/shop/error.tsx
  export default function Error({ reset }) {
    return <button onClick={reset}>Retry</button>;
  }
  ```

### 7. Mixing Pages and App Router in an Unstructured Way

- **Problem:** Causes unclear routing and unpredictable behavior
- **Instead:** Fully adopt App Router structure. Keep pages/ and app/ clearly separated if migration is ongoing

### 8. Not Splitting Large Dynamic Routes

- **Problem:** Impacts performance, negatively affects caching and SEO
- **Instead:** Break large routes into smaller dynamic segments:
  ```
  // app/blog/[slug]/comments/page.tsx (instead of one massive [slug].tsx)
  ```
