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

## Constants and Configuration

### Naming Conventions

Use **UPPERCASE_SNAKE_CASE** for all constants and configuration values:

```typescript
// ✅ Correct - UPPERCASE_SNAKE_CASE
export const API_BASE_URL = "https://api.example.com";
export const MAX_RETRY_ATTEMPTS = 3;
export const DEFAULT_PAGE_SIZE = 10;

// ✅ For objects and arrays of constants
export const NAV_LINK_ITEMS = [
  { value: "/", label: "Home" },
  { value: "/models", label: "Models" },
  { value: "/blog", label: "Blogs" },
] as const;

export const THEME_COLORS = {
  PRIMARY: "#ff0000",
  SECONDARY: "#00ff00",
  BACKGROUND: "#000000",
} as const;

// ❌ Incorrect - avoid these patterns
const apiBaseUrl = "https://api.example.com"; // camelCase
const ApiBaseUrl = "https://api.example.com"; // PascalCase
const api_base_url = "https://api.example.com"; // lowercase with underscores
```

### Organization

- Place constants in dedicated files within `src/constants/`
- Group related constants by domain (e.g., `navigation.ts`, `api.ts`, `theme.ts`)
- Export interfaces alongside constants when needed
- Use `as const` assertions for immutable data structures

```typescript
// src/constants/navigation.ts
export interface NavLinkItem {
  value: string;
  label: string;
}

export const NAV_LINK_ITEMS: NavLinkItem[] = [
  { value: "/", label: "Home" },
  { value: "/models", label: "Models" },
  { value: "/blog", label: "Blogs" },
] as const;

// src/constants/api.ts
export const API_ENDPOINTS = {
  USERS: "/api/users",
  POSTS: "/api/posts",
  COMMENTS: "/api/comments",
} as const;

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
```

## Design System Principles

### Atomic Design and Component Composition

Design systems are visual and functional structures built from small, reusable components that compose into greater functionality. Projects must adopt atomicity principles to promote component reuse and composition.

Components should be classified by complexity as atoms, molecules, or organisms, but organize them functionally rather than by classification:

```typescript
// ✅ Correct - Organize by function/domain
src/components/
├── Header/
├── BlogCard/
├── HeroSection/
└── Navigation/

// ❌ Incorrect - Don't organize by atomic classification
src/components/
├── atoms/
├── molecules/
└── organisms/
```

### Component Reusability and Portability

Components must function independently of their parent context to enable scale and reuse:

```tsx
// ✅ Correct - Self-contained with clear props
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) => (
  <button
    className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`}
    onClick={onClick}
  >
    {label}
  </button>
);

// ❌ Incorrect - Depends on parent context
export const Button = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ParentContext); // Tight coupling
  const handleClick = () => {
    window.parent.someGlobalFunction(); // External dependency
  };

  return <button onClick={handleClick}>{children}</button>;
};
```

### Abstraction Guidelines

Abstract components only when they are:

1. Used by multiple other components
2. Directly configurable via CMS or similar tools
3. Providing clear value over duplication

```tsx
// ✅ Correct - Abstract when reused
const TextInput = ({ label, value, onChange, type = "text" }: InputProps) => (
  <div className="input-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

// ❌ Incorrect - Don't abstract for single use
const SpecificFormInput = ({ value, onChange }: SpecificProps) => (
  <div className="very-specific-styling-that-only-works-here">
    <input value={value} onChange={onChange} />
  </div>
);
```

## JavaScript Software Design Philosophy

### Declarative over Imperative

Always prefer declarative patterns as they result in fewer stateful conditions, reduced logic complexity, and smaller test surface area:

```tsx
// ✅ Declarative - Describes desired state
const UserList = ({ users, filter }: UserListProps) => {
  const filteredUsers = users.filter((user) =>
    filter ? user.name.includes(filter) : true,
  );

  return (
    <div>
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

// ❌ Imperative - Describes how to achieve state
const UserList = ({ users, filter }: UserListProps) => {
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);

  useEffect(() => {
    const filtered = [];
    for (let i = 0; i < users.length; i++) {
      if (!filter || users[i].name.includes(filter)) {
        filtered.push(users[i]);
      }
    }
    setDisplayUsers(filtered);
  }, [users, filter]);

  return (
    <div>
      {displayUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```

### Pure Functions

Functions should use only supplied arguments and create no side effects. Pure functions enable referential equality, reducing re-renders:

```tsx
// ✅ Correct - Pure function with referential equality
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const UserForm = ({ email }: UserFormProps) => {
  const isValidEmail = validateEmail(email);
  // validateEmail has consistent reference, no re-creation

  return (
    <div>
      <input value={email} />
      {!isValidEmail && <span>Invalid email</span>}
    </div>
  );
};

// ❌ Incorrect - Impure function recreated on each render
const UserForm = ({ email }: UserFormProps) => {
  const validateEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Uses external scope
  };

  const isValidEmail = validateEmail(); // New function reference each render

  return (
    <div>
      <input value={email} />
      {!isValidEmail && <span>Invalid email</span>}
    </div>
  );
};
```

### Complexity Reduction

Reduce cyclomatic complexity through early returns and proper conditional structure:

```tsx
// ✅ Correct - Early returns reduce nesting
const ProcessUser = ({ user }: ProcessUserProps) => {
  if (!user) {
    return <div>No user provided</div>;
  }

  if (!user.isActive) {
    return <div>User is inactive</div>;
  }

  if (!user.hasPermission) {
    return <div>Access denied</div>;
  }

  return <UserProfile user={user} />;
};

// ❌ Incorrect - Deeply nested conditions
const ProcessUser = ({ user }: ProcessUserProps) => {
  return (
    <div>
      {user ? (
        user.isActive ? (
          user.hasPermission ? (
            <UserProfile user={user} />
          ) : (
            <div>Access denied</div>
          )
        ) : (
          <div>User is inactive</div>
        )
      ) : (
        <div>No user provided</div>
      )}
    </div>
  );
};
```

### Generated Files Policy

Never version generated files in the codebase. These create merge conflicts and drift from source of truth:

```bash
# ✅ Correct - .gitignore generated files
/dist/
/build/
/.next/
/coverage/
/generated/
*.generated.ts

# Generate at build time
npm run codegen  # Generate GraphQL types
npm run build    # Generate production assets
```

## Component Architecture & Structure

### Co-location Principles

All files related to a component should be co-located in the component's folder:

```
// ✅ Correct - Co-located component structure
src/components/UserCard/
├── index.tsx              # Main component
├── UserCard.test.tsx      # Tests
├── UserCard.stories.tsx   # Storybook stories
├── UserCard.styles.ts     # Component-specific styles
├── UserCard.graphql       # GraphQL fragments/queries
├── __mocks__/            # Mock data for testing
│   └── mockUser.ts
└── SubComponents/        # Sub-components (max 2 levels)
    └── UserAvatar.tsx

// ❌ Incorrect - Separated by file type
src/
├── components/
│   └── UserCard.tsx
├── tests/
│   └── UserCard.test.tsx
├── styles/
│   └── UserCard.css
└── stories/
    └── UserCard.stories.tsx
```

### Sub-component Guidelines

Sub-components should not exceed 2 levels of nesting and should not have individual stories or tests:

```tsx
// ✅ Correct - Sub-component in main component folder
// components/UserCard/index.tsx
import { UserAvatar } from "./UserAvatar";

export const UserCard = ({ user }: UserCardProps) => (
  <div className="user-card">
    <UserAvatar user={user} />
    <div className="user-info">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  </div>
);

// components/UserCard/UserAvatar.tsx - No separate test/story
export const UserAvatar = ({ user }: { user: User }) => (
  <img src={user.avatar} alt={user.name} className="avatar" />
);

// ❌ Incorrect - Sub-render function
export const UserCard = ({ user }: UserCardProps) => {
  const renderAvatar = () => (
    // Don't do this
    <img src={user.avatar} alt={user.name} className="avatar" />
  );

  return (
    <div className="user-card">
      {renderAvatar()}
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
```

### Export Strategies

Use named exports for better HMR functionality and grep-ability:

```tsx
// ✅ Correct - Named export only
export const UserCard = ({ user }: UserCardProps) => {
  return <div>{user.name}</div>;
};

// ❌ Incorrect - Default export breaks HMR and grep
const UserCard = ({ user }: UserCardProps) => {
  return <div>{user.name}</div>;
};

export default UserCard;
```

### Avoid Barrel Files

Don't create index files that only export other files - they hurt tree-shaking:

```tsx
// ❌ Incorrect - Barrel file
// components/index.ts
export { UserCard } from "./UserCard";
export { Button } from "./Button";
export { Modal } from "./Modal";

// ✅ Correct - Direct imports
import { UserCard } from "@/components/UserCard";
import { Button } from "@/components/Button";
```

## Props & Data Flow

### Props Naming Context

Props should make sense in the component's context, not the parent's:

```tsx
// ✅ Correct - Props named for component context
interface TitleBlockProps {
  title: string;        // Generic prop name
  subtitle?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const TitleBlock = ({ title, subtitle, level = 1 }: TitleBlockProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <Tag>{title}</Tag>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

// Usage in different contexts
<TitleBlock title={article.title} />           // Article context
<TitleBlock title={product.name} />            // Product context
<TitleBlock title={user.displayName} />        // User context

// ❌ Incorrect - Props named for first parent only
interface TitleBlockProps {
  articleTitle: string;  // Too specific
  articleSubtitle?: string;
}
```

### YAGNI Principle for Props

Don't add props for future variations until actually needed:

```tsx
// ✅ Correct - Only current requirements
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>
    {label}
  </button>
);

// ❌ Incorrect - Premature future props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Not needed yet
  icon?: ReactNode; // Not needed yet
  isLoading?: boolean; // Not needed yet
  tooltipText?: string; // Not needed yet
}
```

### Props Spreading Guidelines

Manually map props rather than spreading, unless it's a passthrough wrapper:

```tsx
// ✅ Correct - Manual prop mapping
interface CustomInputProps {
  label: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const CustomInput = ({
  label,
  error,
  value,
  onChange,
}: CustomInputProps) => (
  <div>
    <label>{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={error ? "input-error" : "input"}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

// ✅ Acceptable - Passthrough wrapper (ShadCN style)
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      className={cn("input-base", error && "input-error", className)}
      ref={ref}
      {...props}
    />
  ),
);

// ❌ Incorrect - Spreading arbitrary objects
export const CustomInput = (props: any) => (
  <div>
    <input {...props} /> {/* Could introduce invalid HTML attributes */}
  </div>
);
```

### Mock Data Policy

Never include mock data in components or production code paths:

```tsx
// ✅ Correct - No mock data in component
export const UserProfile = ({ user }: UserProfileProps) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

// ✅ Correct - Mock data in Storybook stories
export const Default: Story = {
  args: {
    user: {
      name: "John Doe",
      email: "john@example.com",
    },
  },
};

// ❌ Incorrect - Mock data in component
export const UserProfile = ({ user }: UserProfileProps) => {
  const displayUser = user || {
    name: "John Doe", // This could mask integration issues
    email: "john@example.com",
  };

  return (
    <div>
      <h2>{displayUser.name}</h2>
      <p>{displayUser.email}</p>
    </div>
  );
};
```

## Rendering Philosophy

### Server vs Client Rendering

Do as much rendering on the server as possible. Validate actual rendering behavior:

```tsx
// ✅ Correct - Server component with data fetching
// app/users/page.tsx
export default async function UsersPage() {
  const users = await fetchUsers(); // Server-side data fetching

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

// ✅ Correct - Client component only when needed
("use client");

export const InteractiveUserCard = ({ user }: UserCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>{user.name}</button>
      {isExpanded && <UserDetails user={user} />}
    </div>
  );
};

// ❌ Incorrect - Unnecessary client component
("use client");

export const StaticUserCard = ({ user }: UserCardProps) => {
  // No interactivity needed
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};
```

### DOM Manipulation Guidelines

Avoid direct DOM manipulation. Use React patterns instead:

```tsx
// ✅ Correct - React ref for focus management
export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // Legitimate DOM access
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
};

// ❌ Incorrect - Direct DOM queries
export const SearchInput = () => {
  useEffect(() => {
    const input = document.querySelector(".search-input"); // Don't do this
    input?.focus();
  }, []);

  return <input className="search-input" placeholder="Search..." />;
};
```

### Safe HTML Rendering

Avoid `dangerouslySetInnerHTML`. Use parsing libraries for trusted content:

```tsx
import DOMPurify from "dompurify";

// ✅ Better - Use a parsing library
export const SafeContent = ({ htmlContent }: { htmlContent: string }) => {
  const sanitizedContent = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

// ✅ Best - Use a React HTML parser
import parse from "html-react-parser";

export const ParsedContent = ({ htmlContent }: { htmlContent: string }) => {
  return <div>{parse(htmlContent)}</div>;
};

// ❌ Dangerous - Raw HTML without sanitization
export const UnsafeContent = ({ htmlContent }: { htmlContent: string }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);
```

## Testing Philosophy

### Un-DRY Testing

Tests should be explicit and avoid complex logic:

```tsx
// ✅ Correct - Explicit, readable tests
describe("UserCard", () => {
  it("renders user name", () => {
    render(<UserCard user={{ name: "John", email: "john@test.com" }} />);
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("renders user email", () => {
    render(<UserCard user={{ name: "John", email: "john@test.com" }} />);
    expect(screen.getByText("john@test.com")).toBeInTheDocument();
  });

  it("renders with different user", () => {
    render(<UserCard user={{ name: "Jane", email: "jane@test.com" }} />);
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("jane@test.com")).toBeInTheDocument();
  });
});

// ❌ Incorrect - DRY tests with logic
describe("UserCard", () => {
  const testUsers = [
    { name: "John", email: "john@test.com" },
    { name: "Jane", email: "jane@test.com" },
  ];

  testUsers.forEach((user) => {
    // Avoid loops in tests
    it(`renders user ${user.name}`, () => {
      render(<UserCard user={user} />);
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });
});
```

### Assertion Counting for Dynamic Tests

When dynamic tests are necessary, assert the number of assertions:

```tsx
// ✅ Correct - Assert expectation count
describe("UserList", () => {
  it("renders all users", () => {
    expect.assertions(3); // Assert exact number of expectations

    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });
});
```

## State Management

### State Simplification

Avoid multiple states that change together:

```tsx
// ✅ Correct - Single state object
interface FormState {
  email: string;
  password: string;
  isValid: boolean;
  errors: string[];
}

export const LoginForm = () => {
  const [formState, setFormState] = useReducer(formReducer, {
    email: "",
    password: "",
    isValid: false,
    errors: [],
  });

  return (
    <form>
      <input
        value={formState.email}
        onChange={(e) =>
          setFormState({ type: "SET_EMAIL", email: e.target.value })
        }
      />
      <input
        value={formState.password}
        onChange={(e) =>
          setFormState({ type: "SET_PASSWORD", password: e.target.value })
        }
      />
    </form>
  );
};

// ❌ Incorrect - Multiple interdependent states
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // These all change together - should be one state
  useEffect(() => {
    const newErrors = [];
    if (!email) newErrors.push("Email required");
    if (!password) newErrors.push("Password required");

    setErrors(newErrors);
    setIsValid(newErrors.length === 0);
  }, [email, password]);

  return (
    <form>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </form>
  );
};
```

### Avoid Derivative State

Don't store transformed props as state:

```tsx
// ✅ Correct - Transform inline or use useMemo
export const UserDisplay = ({ user }: { user: User }) => {
  const displayName = user.firstName + " " + user.lastName;

  return <div>{displayName}</div>;
};

// ✅ Correct - Use useMemo for expensive computations
export const UserDisplay = ({ users }: { users: User[] }) => {
  const sortedUsers = useMemo(
    () => users.sort((a, b) => a.lastName.localeCompare(b.lastName)),
    [users],
  );

  return (
    <div>
      {sortedUsers.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
};

// ❌ Incorrect - Derivative state
export const UserDisplay = ({ user }: { user: User }) => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    setDisplayName(user.firstName + " " + user.lastName);
  }, [user.firstName, user.lastName]);

  return <div>{displayName}</div>;
};
```

## Custom Hooks Guidelines

Use custom hooks for horizontal reuse across components, not for abstracting single-component logic:

```tsx
// ✅ Correct - Horizontal reuse across multiple components
export const useUserPermissions = (userId: string) => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserPermissions(userId)
      .then(setPermissions)
      .finally(() => setLoading(false));
  }, [userId]);

  return { permissions, loading };
};

// Used in multiple components
const UserProfile = ({ userId }: { userId: string }) => {
  const { permissions } = useUserPermissions(userId);
  // ...
};

const AdminPanel = ({ userId }: { userId: string }) => {
  const { permissions, loading } = useUserPermissions(userId);
  // ...
};

// ❌ Incorrect - Custom hook for single component abstraction
const useUserDisplayLogic = (user: User) => {
  // Only used once
  const [isExpanded, setIsExpanded] = useState(false);
  const displayName = user.firstName + " " + user.lastName;

  return { isExpanded, setIsExpanded, displayName };
};

// Better as simple functions or inline logic
const UserCard = ({ user }: { user: User }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayName = user.firstName + " " + user.lastName;

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>{displayName}</button>
    </div>
  );
};
```

## Styling Guidelines

### Class Joining Functions

Always use class joining utilities for dynamic classes:

```tsx
import { cn } from "@/lib/utils"; // or clsx, classnames

// ✅ Correct - Use class joining utility
export const Button = ({ variant, isLoading, className }: ButtonProps) => (
  <button
    className={cn(
      "px-4 py-2 rounded font-medium",
      variant === "primary" && "bg-blue-500 text-white",
      variant === "secondary" && "bg-gray-200 text-gray-900",
      isLoading && "opacity-50 cursor-not-allowed",
      className,
    )}
  >
    {/* ... */}
  </button>
);

// ❌ Incorrect - Template literals with boolean values
export const Button = ({ variant, isLoading, className }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded font-medium ${variant === "primary"} ${isLoading} ${className}`}
    // Results in: "px-4 py-2 rounded font-medium true false additional-class"
  >
    {/* ... */}
  </button>
);
```

### CSS vs JavaScript for Responsive Design

Prefer CSS for device detection over JavaScript:

```tsx
// ✅ Correct - CSS-based responsive design
export const ResponsiveGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);

// ✅ Correct - CSS custom properties for dynamic values
export const ThemedButton = ({ color }: { color: string }) => (
  <button
    style={{ "--button-color": color } as CSSProperties}
    className="bg-[var(--button-color)] text-white px-4 py-2"
  >
    Click me
  </button>
);

// ❌ Incorrect - JavaScript for simple responsive behavior
export const ResponsiveGrid = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={isMobile ? "grid-cols-1" : "grid-cols-3"}>{children}</div>
  );
};
```

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
