import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SpeedRecords } from "./index";

const meta = {
  title: "Components/SpeedRecords",
  component: SpeedRecords,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "Speed records data including title, subtitle, video, and records array",
    },
  },
} satisfies Meta<typeof SpeedRecords>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = {
  title: "Speed Records",
  subtitle: "The fastest cars in history",
  videoUrl: {
    asset: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  },
  records: [
    {
      title: "Land Speed Record",
      record: "763 mph",
      holder: "ThrustSSC",
      year: "1997",
    },
    {
      title: "Production Car Record",
      record: "304.7 mph",
      holder: "Bugatti Chiron Super Sport",
      year: "2019",
    },
    {
      title: "Electric Car Record",
      record: "282 mph",
      holder: "McMurtry Spéirling",
      year: "2022",
    },
  ],
};

export const Default: Story = {
  args: {
    data: mockData,
  },
};

export const WithManyRecords: Story = {
  args: {
    data: {
      ...mockData,
      records: [
        ...mockData.records,
        {
          title: "Nürburgring Lap Record",
          record: "6:43.300",
          holder: "Porsche 919 Hybrid Evo",
          year: "2018",
        },
        {
          title: "Pikes Peak Record",
          record: "7:57.148",
          holder: "Volkswagen I.D. R",
          year: "2018",
        },
        {
          title: "Quarter Mile Record",
          record: "6.05s",
          holder: "McMurtry Spéirling",
          year: "2022",
        },
      ],
    },
  },
};

export const WithFewRecords: Story = {
  args: {
    data: {
      ...mockData,
      records: mockData.records.slice(0, 2),
    },
  },
};

export const SingleRecord: Story = {
  args: {
    data: {
      ...mockData,
      records: [mockData.records[0]],
    },
  },
};

export const EmptyRecords: Story = {
  args: {
    data: {
      ...mockData,
      records: [],
    },
  },
};

export const DifferentContent: Story = {
  args: {
    data: {
      title: "Historical Milestones",
      subtitle: "Breaking barriers through automotive innovation",
      videoUrl: {
        asset: {
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
      },
      records: [
        {
          title: "First 200 mph Car",
          record: "203.7 mph",
          holder: "Ferrari F40",
          year: "1987",
        },
        {
          title: "First 300 mph Car",
          record: "301.7 mph",
          holder: "Bugatti Chiron",
          year: "2019",
        },
        {
          title: "First 400 mph Car",
          record: "TBD",
          holder: "Future Hypercar",
          year: "TBD",
        },
      ],
    },
  },
};

export const ClassicRecords: Story = {
  args: {
    data: {
      title: "Classic Speed Records",
      subtitle: "When legends were born",
      videoUrl: {
        asset: {
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
      },
      records: [
        {
          title: "Fastest Production Car 1987",
          record: "201 mph",
          holder: "Porsche 959",
          year: "1987",
        },
        {
          title: "Fastest Production Car 1993",
          record: "240 mph",
          holder: "McLaren F1",
          year: "1993",
        },
        {
          title: "First Supercar",
          record: "170 mph",
          holder: "Lamborghini Miura",
          year: "1966",
        },
      ],
    },
  },
};
