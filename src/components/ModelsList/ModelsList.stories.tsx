import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ModelsList } from "./index";
import { Car } from "@/types/sanity";

const meta = {
  title: "Components/ModelsList",
  component: ModelsList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    cars: {
      description: "Array of car models to display",
    },
  },
} satisfies Meta<typeof ModelsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCars: Car[] = [
  {
    _id: "1",
    name: "911 Turbo S",
    manufacturer: "Porsche",
    year: 2024,
    topSpeed: 330,
    acceleration: "2.6s",
    horsepower: 650,
    price: "$230,000",
    description: "The ultimate 911 experience",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      },
    },
    era: "present",
    engineType: "Twin-Turbo Flat-6",
    features: ["All-Wheel Drive", "Launch Control", "Sport Chrono"],
  },
  {
    _id: "2",
    name: "F40",
    manufacturer: "Ferrari",
    year: 1987,
    topSpeed: 324,
    acceleration: "3.8s",
    horsepower: 478,
    price: "$400,000",
    description: "The last pure Ferrari",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      },
    },
    era: "80s",
    engineType: "Twin-Turbo V8",
    features: ["Lightweight", "Raw Experience", "Iconic Design"],
  },
  {
    _id: "3",
    name: "McLaren P1",
    manufacturer: "McLaren",
    year: 2013,
    topSpeed: 350,
    acceleration: "2.8s",
    horsepower: 903,
    price: "$1,150,000",
    description: "Hybrid hypercar revolution",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      },
    },
    era: "2010s",
    engineType: "Twin-Turbo V8 Hybrid",
    features: ["Hybrid Power", "Active Aero", "Track Mode"],
  },
  {
    _id: "4",
    name: "Countach LP400",
    manufacturer: "Lamborghini",
    year: 1974,
    topSpeed: 280,
    acceleration: "5.2s",
    horsepower: 375,
    price: "$500,000",
    description: "The poster car legend",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      },
    },
    era: "70s",
    engineType: "V12",
    features: ["Scissor Doors", "Wedge Design", "Pure Drama"],
  },
  {
    _id: "5",
    name: "Diablo GT",
    manufacturer: "Lamborghini",
    year: 1999,
    topSpeed: 338,
    acceleration: "3.9s",
    horsepower: 575,
    price: "$350,000",
    description: "The ultimate Diablo",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1569154941061-e231b4725e93?w=600&h=400&fit=crop",
      },
    },
    era: "90s",
    engineType: "V12",
    features: ["Track Focused", "Aggressive Styling", "Limited Production"],
  },
  {
    _id: "6",
    name: "Carrera GT",
    manufacturer: "Porsche",
    year: 2004,
    topSpeed: 330,
    acceleration: "3.9s",
    horsepower: 605,
    price: "$440,000",
    description: "Racing DNA in road form",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1580414292315-61d20d0d7e25?w=600&h=400&fit=crop",
      },
    },
    era: "2000s",
    engineType: "V10",
    features: ["Manual Transmission", "Carbon Fiber", "Pure Experience"],
  },
];

export const Default: Story = {
  args: {
    cars: mockCars,
  },
};

export const WithFewCars: Story = {
  args: {
    cars: mockCars.slice(0, 3),
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

export const ModernCarsOnly: Story = {
  args: {
    cars: mockCars.filter(
      (car) => car.era === "present" || car.era === "2010s",
    ),
  },
};

export const ClassicCarsOnly: Story = {
  args: {
    cars: mockCars.filter((car) => car.era === "80s" || car.era === "90s"),
  },
};

export const VintageCarsOnly: Story = {
  args: {
    cars: mockCars.filter((car) => car.era === "70s"),
  },
};

export const MixedEras: Story = {
  args: {
    cars: [
      { ...mockCars[0], era: "present" },
      { ...mockCars[1], era: "2010s" },
      { ...mockCars[2], era: "2000s" },
      { ...mockCars[3], era: "90s" },
      { ...mockCars[4], era: "80s" },
      { ...mockCars[5], era: "70s" },
    ],
  },
};

export const LargeCatalog: Story = {
  args: {
    cars: [
      ...mockCars,
      ...mockCars.map((car, index) => ({
        ...car,
        _id: `${car._id}-${index}`,
        name: `${car.name} Special`,
      })),
    ],
  },
};
