import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ModelCard } from "./index";

const meta = {
  title: "Models/ModelCard",
  component: ModelCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        },
        {
          name: "gray",
          value: "#1a1a1a",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    car: {
      description: "Car data object with specifications and details",
    },
  },
} satisfies Meta<typeof ModelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base mock car data
const baseCar = {
  _id: "1",
  name: "Aventador LP 700-4",
  manufacturer: "Lamborghini",
  year: 2011,
  topSpeed: 217,
  acceleration: "0-60 mph in 2.9s",
  horsepower: 700,
  price: "$400,000",
  description: "The ultimate expression of Italian automotive excellence",
  mainImage: {
    asset: {
      url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  },
  era: "2010s",
  engineType: "V12",
  features: ["All-wheel drive", "Carbon fiber", "Racing heritage"],
};

export const Default: Story = {
  args: {
    car: baseCar,
  },
};

export const ModernSupercar: Story = {
  args: {
    car: {
      ...baseCar,
      name: "SF90 Stradale",
      manufacturer: "Ferrari",
      year: 2019,
      topSpeed: 211,
      acceleration: "0-60 mph in 2.5s",
      horsepower: 986,
      price: "$625,000",
      era: "2020s",
      engineType: "V8 Hybrid",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const ClassicMuscle: Story = {
  args: {
    car: {
      ...baseCar,
      name: "Challenger R/T",
      manufacturer: "Dodge",
      year: 1970,
      topSpeed: 125,
      acceleration: "0-60 mph in 5.1s",
      horsepower: 335,
      price: "$85,000",
      era: "1970s",
      engineType: "V8",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const ElectricSupercar: Story = {
  args: {
    car: {
      ...baseCar,
      name: "Model S Plaid",
      manufacturer: "Tesla",
      year: 2021,
      topSpeed: 200,
      acceleration: "0-60 mph in 1.99s",
      horsepower: 1020,
      price: "$135,000",
      era: "Electric",
      engineType: "Electric",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const HyperCar: Story = {
  args: {
    car: {
      ...baseCar,
      name: "Chiron",
      manufacturer: "Bugatti",
      year: 2016,
      topSpeed: 304,
      acceleration: "0-60 mph in 2.4s",
      horsepower: 1479,
      price: "$3,000,000",
      era: "2010s",
      engineType: "W16 Quad-Turbo",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const AffordableSports: Story = {
  args: {
    car: {
      ...baseCar,
      name: "GT86",
      manufacturer: "Toyota",
      year: 2012,
      topSpeed: 140,
      acceleration: "0-60 mph in 6.2s",
      horsepower: 200,
      price: "$32,000",
      era: "2010s",
      engineType: "Flat-4",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const VintageSports: Story = {
  args: {
    car: {
      ...baseCar,
      name: "E-Type",
      manufacturer: "Jaguar",
      year: 1961,
      topSpeed: 150,
      acceleration: "0-60 mph in 6.9s",
      horsepower: 265,
      price: "$150,000",
      era: "1960s",
      engineType: "I6",
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1580414155891-57ab467cea38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const LongCarName: Story = {
  args: {
    car: {
      ...baseCar,
      name: "Huracán Performante Spyder",
      manufacturer: "Lamborghini",
      price: "$308,859",
    },
  },
};

export const HighSpeedRecord: Story = {
  args: {
    car: {
      ...baseCar,
      name: "Veyron Super Sport",
      manufacturer: "Bugatti",
      year: 2010,
      topSpeed: 268,
      acceleration: "0-60 mph in 2.5s",
      horsepower: 1200,
      price: "$2,400,000",
      era: "2010s",
      engineType: "W16 Quad-Turbo",
    },
  },
};
