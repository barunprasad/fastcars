"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";
import { motion } from "motion/react";
import { fadeSlideUp } from "@/lib/animations";

type Engine = {
  name: string;
  description: string;
  specs: string;
  cars: string[];
};
type Variant = { key: string; label: string; engines: Engine[] };

type Props = {
  data: {
    title: string;
    subtitle: string;
    videoUrl?: {
      asset: {
        url: string;
      };
    };
    variants: Variant[];
  };
  defaultValue?: string;
};

export function LegendaryEngines({ data, defaultValue }: Props) {
  return (
    <motion.section
      className="py-20 px-6 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={fadeSlideUp}
          custom={0}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-white text-4xl md:text-7xl font-racing mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-neutral-400">{data.subtitle}</p>
        </motion.div>

        <motion.div
          variants={fadeSlideUp}
          custom={1}
          className="flex-1 flex justify-center"
        >
          <div className="w-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <video
              src={data?.videoUrl?.asset.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeSlideUp}
        custom={2}
        className="mt-12 max-w-7xl mx-auto"
      >
        <Tabs defaultValue={defaultValue} className="w-full">
          <TabsList className="grid grid-cols-3 bg-neutral-900 rounded-lg overflow-hidden">
            {data.variants.map((v) => (
              <TabsTrigger
                key={v.key}
                value={v.key}
                className="text-white data-[state=active]:bg-red-600"
              >
                {v.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.variants.map((v) => (
            <TabsContent key={v.key} value={v.key} className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {v.engines.map((engine, j) => (
                  <Card
                    key={j}
                    className="text-white bg-neutral-900 border-neutral-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {engine.name}
                          </h3>
                          <p className="text-neutral-400 mb-3">
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
                                className="text-xs bg-black px-2 py-1 rounded border border-neutral-700"
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
      </motion.div>
    </motion.section>
  );
}
