import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Gauge } from "lucide-react";

const engines = {
  v12: [
    {
      name: "Ferrari Colombo V12",
      description: "The heart of Ferrari since 1947",
      specs: "Up to 6.5L, 800+ hp in modern applications",
      cars: ["Ferrari 812 Superfast", "Ferrari Purosangue"],
    },
    {
      name: "Lamborghini V12",
      description: "The raging bull's signature sound",
      specs: "6.5L naturally aspirated, 770 hp",
      cars: ["Aventador SVJ", "Countach LPI 800-4"],
    },
  ],
  v8: [
    {
      name: "Ferrari Twin-Turbo V8",
      description: "Multiple Engine of the Year awards",
      specs: "3.9L twin-turbo, up to 710 hp",
      cars: ["F8 Tributo", "SF90 Stradale"],
    },
    {
      name: "McLaren M838T",
      description: "Ricardo-built masterpiece",
      specs: "3.8L-4.0L twin-turbo, up to 789 hp",
      cars: ["720S", "765LT", "Senna"],
    },
  ],
  exotic: [
    {
      name: "Bugatti W16",
      description: "Four turbos, sixteen cylinders, one goal",
      specs: "8.0L quad-turbo, 1,578 hp",
      cars: ["Chiron Super Sport", "Veyron"],
    },
    {
      name: "Koenigsegg TFG",
      description: "Freevalve technology revolutionary",
      specs: "5.0L twin-turbo, 1,600 hp on E85",
      cars: ["Jesko", "Gemera"],
    },
  ],
};

export function LegendaryEngines() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-racing text-center mb-4">
          LEGENDARY POWERPLANTS
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          The engines that define automotive excellence
        </p>

        <Tabs defaultValue="v12" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-900">
            <TabsTrigger
              value="v12"
              className="text-white data-[state=active]:bg-red-600"
            >
              V12 Masters
            </TabsTrigger>
            <TabsTrigger
              value="v8"
              className="text-white data-[state=active]:bg-red-600"
            >
              V8 Turbos
            </TabsTrigger>
            <TabsTrigger
              value="exotic"
              className="text-white data-[state=active]:bg-red-600"
            >
              Exotic Config
            </TabsTrigger>
          </TabsList>

          {Object.entries(engines).map(([key, engineList]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {engineList.map((engine, index) => (
                  <Card
                    key={index}
                    className="text-white bg-neutral-900 border-neutral-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Cog className="w-8 h-8 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {engine.name}
                          </h3>
                          <p className="text-gray-400 mb-3">
                            {engine.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm mb-3">
                            <Gauge className="w-4 h-4" />
                            <span>{engine.specs}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {engine.cars.map((car) => (
                              <span
                                key={car}
                                className="text-xs bg-black px-2 py-1 rounded border border-gray-700"
                              >
                                {car}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
