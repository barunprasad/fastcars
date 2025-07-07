import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Trophy, Zap } from "lucide-react";

const records = [
  {
    title: "Fastest Production Car",
    record: "304.773 mph",
    holder: "Bugatti Chiron Super Sport 300+",
    year: "2019",
    icon: Trophy,
  },
  {
    title: "Quickest 0-60 mph",
    record: "1.85 seconds",
    holder: "Rimac Nevera",
    year: "2021",
    icon: Zap,
  },
  {
    title: "Highest Top Speed (Claimed)",
    record: "330 mph",
    holder: "Koenigsegg Jesko Absolut",
    year: "Theoretical",
    icon: TrendingUp,
  },
];

export function SpeedRecords() {
  return (
    <section className="text-white py-20 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-4xl md:text-5xl font-racing text-center mb-12">
          CURRENT SPEED RECORDS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {records.map((record, index) => {
            const Icon = record.icon;
            return (
              <Card
                key={index}
                className="text-white bg-black border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Icon className="w-8 h-8 " />
                    <Badge
                      variant="outline"
                      className="text-white border-neutral-600 "
                    >
                      {record.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-racing mt-4">
                    {record.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">{record.record}</p>
                  <p className="text-gray-400">{record.holder}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
