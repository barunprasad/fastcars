import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedCars } from "./index";
import { Car } from "@/types/sanity";

const meta = {
  title: "Components/FeaturedCars",
  component: FeaturedCars,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    cars: {
      description: "Array of featured cars to display",
    },
  },
} satisfies Meta<typeof FeaturedCars>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCars: Car[] = [
  {
    _id: "1",
    name: "McLaren P1",
    manufacturer: "McLaren",
    year: 2013,
    topSpeed: 350,
    acceleration: "2.8s",
    horsepower: 903,
    price: "$1,150,000",
    description: "The ultimate hybrid hypercar that redefined performance",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      },
    },
    era: "2010s",
    engineType: "Twin-Turbo V8 Hybrid",
    features: ["Hybrid Power", "Active Aerodynamics", "Track Mode"],
  },
  {
    _id: "2",
    name: "Ferrari F40",
    manufacturer: "Ferrari",
    year: 1987,
    topSpeed: 324,
    acceleration: "3.8s",
    horsepower: 478,
    price: "$400,000",
    description: "The last pure Ferrari - raw, unfiltered driving experience",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      },
    },
    era: "80s",
    engineType: "Twin-Turbo V8",
    features: ["Lightweight Construction", "Raw Experience", "Iconic Design"],
  },
];

export const Default: Story = {
  args: {
    cars: mockCars,
  },
};

export const SingleCar: Story = {
  args: {
    cars: [mockCars[0]],
  },
};

export const EmptyState: Story = {
  args: {
    cars: [],
  },
};

export const ModernSupercars: Story = {
  args: {
    cars: [
      {
        _id: "3",
        name: "Bugatti Chiron",
        manufacturer: "Bugatti",
        year: 2020,
        topSpeed: 420,
        acceleration: "2.4s",
        horsepower: 1479,
        price: "$3,000,000",
        description: "The pinnacle of automotive engineering",
        mainImage: {
          asset: {
            url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
          },
        },
        era: "present",
        engineType: "Quad-Turbo W16",
        features: ["Luxury", "Extreme Speed", "Craftsmanship"],
      },
      {
        _id: "4",
        name: "Koenigsegg Jesko",
        manufacturer: "Koenigsegg",
        year: 2022,
        topSpeed: 483,
        acceleration: "2.5s",
        horsepower: 1600,
        price: "$3,000,000",
        description: "Swedish hypercar engineering at its finest",
        mainImage: {
          asset: {
            url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
          },
        },
        era: "present",
        engineType: "Twin-Turbo V8",
        features: ["Track Focus", "Aerodynamics", "Lightweight"],
      },
    ],
  },
};

export const ClassicSupercars: Story = {
  args: {
    cars: [
      {
        _id: "5",
        name: "Lamborghini Countach",
        manufacturer: "Lamborghini",
        year: 1974,
        topSpeed: 280,
        acceleration: "5.2s",
        horsepower: 375,
        price: "$500,000",
        description: "The poster car that defined supercar design",
        mainImage: {
          asset: {
            url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
          },
        },
        era: "70s",
        engineType: "V12",
        features: ["Scissor Doors", "Wedge Design", "Pure Drama"],
      },
      {
        _id: "6",
        name: "Porsche 959",
        manufacturer: "Porsche",
        year: 1987,
        topSpeed: 317,
        acceleration: "3.6s",
        horsepower: 444,
        price: "$225,000",
        description: "The technological tour de force of the 80s",
        mainImage: {
          asset: {
            url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
          },
        },
        era: "80s",
        engineType: "Twin-Turbo Flat-6",
        features: ["All-Wheel Drive", "Advanced Tech", "Rally Heritage"],
      },
    ],
  },
};
