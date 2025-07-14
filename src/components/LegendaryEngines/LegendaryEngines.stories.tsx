import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LegendaryEngines } from "./index";

const meta = {
  title: "Components/LegendaryEngines",
  component: LegendaryEngines,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "Legendary engines data including title, subtitle, video, and engine variants",
    },
  },
} satisfies Meta<typeof LegendaryEngines>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = {
  title: "Legendary Engines",
  subtitle: "The powerplants that defined automotive history",
  videoUrl: {
    asset: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  },
  variants: [
    {
      key: "classic",
      label: "Classic",
      engines: [
        {
          name: "Ferrari V12",
          description:
            "The soundtrack of speed, delivering pure Italian passion through 12 cylinders of perfection.",
          specs: "6.5L V12 • 800 HP • 9000 RPM",
          cars: ["Ferrari F12", "Ferrari 812 Superfast", "Ferrari LaFerrari"],
        },
        {
          name: "Porsche Flat-6",
          description:
            "The heart of every 911, this air-cooled masterpiece defined sports car engineering.",
          specs: "3.6L Flat-6 • 450 HP • 7200 RPM",
          cars: ["Porsche 911 Turbo", "Porsche 959", "Porsche Carrera GT"],
        },
      ],
    },
    {
      key: "modern",
      label: "Modern",
      engines: [
        {
          name: "McLaren Twin-Turbo V8",
          description:
            "British engineering excellence delivering explosive performance with surgical precision.",
          specs: "4.0L Twin-Turbo V8 • 720 HP • 8500 RPM",
          cars: ["McLaren 720S", "McLaren P1", "McLaren Senna"],
        },
        {
          name: "Bugatti W16",
          description:
            "The most powerful production engine ever created, featuring 16 cylinders and 4 turbochargers.",
          specs: "8.0L Quad-Turbo W16 • 1479 HP • 6700 RPM",
          cars: ["Bugatti Chiron", "Bugatti Veyron", "Bugatti Divo"],
        },
      ],
    },
    {
      key: "electric",
      label: "Electric",
      engines: [
        {
          name: "Tesla Tri-Motor",
          description:
            "The future of performance, delivering instant torque and mind-bending acceleration.",
          specs: "3 Electric Motors • 1020 HP • Instant Torque",
          cars: [
            "Tesla Model S Plaid",
            "Tesla Roadster",
            "Tesla Model X Plaid",
          ],
        },
        {
          name: "Rimac Electric Powertrain",
          description:
            "Croatian innovation pushing the boundaries of electric hypercars.",
          specs: "4 Electric Motors • 1914 HP • 2300 Nm Torque",
          cars: ["Rimac Nevera", "Rimac Concept Two", "Rimac C_Two"],
        },
      ],
    },
  ],
};

export const Default: Story = {
  args: {
    data: mockData,
  },
};

export const ClassicOnly: Story = {
  args: {
    data: {
      ...mockData,
      variants: [mockData.variants[0]],
    },
  },
};

export const ModernOnly: Story = {
  args: {
    data: {
      ...mockData,
      variants: [mockData.variants[1]],
    },
  },
};

export const ElectricOnly: Story = {
  args: {
    data: {
      ...mockData,
      variants: [mockData.variants[2]],
    },
  },
};

export const WithSingleEngine: Story = {
  args: {
    data: {
      ...mockData,
      variants: [
        {
          key: "legendary",
          label: "Legendary",
          engines: [mockData.variants[0].engines[0]],
        },
      ],
    },
  },
};

export const EmptyVariants: Story = {
  args: {
    data: {
      ...mockData,
      variants: [],
    },
  },
};

export const CustomContent: Story = {
  args: {
    data: {
      title: "Racing Powerplants",
      subtitle: "Engines that conquered the track",
      videoUrl: {
        asset: {
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      },
      variants: [
        {
          key: "f1",
          label: "Formula 1",
          engines: [
            {
              name: "Honda RA120E",
              description:
                "The turbocharged heart of McLaren's championship-winning cars.",
              specs: "1.5L Turbo V6 • 1000+ HP • 15000 RPM",
              cars: ["McLaren MP4/4", "McLaren MP4/5", "McLaren MP4/6"],
            },
            {
              name: "Ferrari 065/6",
              description:
                "Modern F1 hybrid power unit combining efficiency with raw performance.",
              specs: "1.6L Turbo V6 Hybrid • 1000 HP • 15000 RPM",
              cars: ["Ferrari SF90", "Ferrari SF1000", "Ferrari F1-75"],
            },
          ],
        },
        {
          key: "lemans",
          label: "Le Mans",
          engines: [
            {
              name: "Porsche 919 Hybrid",
              description:
                "The most advanced racing powertrain ever created for endurance racing.",
              specs: "2.0L Turbo 4-cyl Hybrid • 1000 HP • Energy Recovery",
              cars: ["Porsche 919 Hybrid", "Porsche 919 Hybrid Evo"],
            },
            {
              name: "Audi R18 TDI",
              description:
                "Diesel dominance that revolutionized endurance racing.",
              specs: "3.7L V6 TDI • 550 HP • Massive Torque",
              cars: ["Audi R18", "Audi R18 e-tron quattro", "Audi R18 Ultra"],
            },
          ],
        },
      ],
    },
  },
};
