import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HomeAnimator } from "./index";

const meta = {
  title: "Components/HomeAnimator",
  component: HomeAnimator,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "Child components to animate with staggered fade-slide-up effect",
    },
  },
} satisfies Meta<typeof HomeAnimator>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleCard = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 mb-4">
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-300">{content}</p>
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <SampleCard
          title="First Section"
          content="This is the first section that will animate in."
        />
        <SampleCard
          title="Second Section"
          content="This section will animate in after the first."
        />
        <SampleCard
          title="Third Section"
          content="This section will animate in last."
        />
      </>
    ),
  },
};

export const WithManyChildren: Story = {
  args: {
    children: (
      <>
        <SampleCard
          title="Hero Section"
          content="Main hero content with title and subtitle."
        />
        <SampleCard
          title="Featured Cars"
          content="Showcase of featured supercars."
        />
        <SampleCard
          title="Speed Records"
          content="Historical speed records and achievements."
        />
        <SampleCard
          title="Legendary Engines"
          content="Classic engines that defined eras."
        />
        <SampleCard
          title="Latest News"
          content="Recent blog posts and updates."
        />
        <SampleCard title="Footer" content="Contact information and links." />
      </>
    ),
  },
};

export const WithSingleChild: Story = {
  args: {
    children: (
      <SampleCard
        title="Single Section"
        content="Only one section to animate."
      />
    ),
  },
};

export const WithTextContent: Story = {
  args: {
    children: (
      <>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Fast Cars
          </h1>
          <p className="text-gray-300 text-lg">
            Discover the world's most incredible supercars
          </p>
        </div>
        <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Performance</h2>
          <p className="text-gray-300">
            Experience unmatched speed and precision engineering.
          </p>
        </div>
        <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
          <h2 className="text-2xl font-bold text-white mb-4">Design</h2>
          <p className="text-gray-300">
            Witness automotive art in its purest form.
          </p>
        </div>
      </>
    ),
  },
};

export const WithDifferentSizes: Story = {
  args: {
    children: (
      <>
        <div className="h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white font-bold">Small Section</span>
        </div>
        <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white font-bold">Medium Section</span>
        </div>
        <div className="h-60 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">Large Section</span>
        </div>
      </>
    ),
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Statistics</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Total Cars</span>
                  <span className="font-semibold">847</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Blog Posts</span>
                  <span className="font-semibold">124</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Speed Records</span>
                  <span className="font-semibold">23</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">Added: McLaren P1</div>
                <div className="text-gray-300 text-sm">
                  Updated: Ferrari F40
                </div>
                <div className="text-gray-300 text-sm">
                  New Post: Supercar Evolution
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Explore Collection
          </button>
        </div>
      </>
    ),
  },
};
