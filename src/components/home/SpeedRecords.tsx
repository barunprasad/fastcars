"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/animations";

type Record = { title: string; record: string; holder: string; year: string };

type Props = {
  data: {
    title: string;
    subtitle: string;
    videoUrl: { asset: { url: string } };
    records: Record[];
  };
};

export function SpeedRecords({ data }: Props) {
  return (
    <motion.section
      className="py-20 px-6 bg-neutral-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={fadeSlideUp}
          custom={1}
          className="flex-1 flex justify-center"
        >
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <video
              src={data.videoUrl?.asset?.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
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
      </div>

      <motion.div
        variants={fadeSlideUp}
        custom={1}
        className="mt-12 max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeSlideUp}
          custom={3}
          className="grid w-full grid-cols-1 md:grid-cols-3 gap-6"
        >
          {data.records.map((rec, i) => (
            <motion.div key={i} variants={fadeSlideUp} custom={4 + i}>
              <Card className="text-white bg-neutral-950 border-neutral-800 transition-colors">
                <CardHeader className="flex justify-between items-start pb-2">
                  <Badge
                    variant="outline"
                    className="text-white border-neutral-600"
                  >
                    {rec.year}
                  </Badge>
                </CardHeader>
                <CardTitle className="text-lg font-medium px-5">
                  {rec.title}
                </CardTitle>
                <CardContent>
                  <p className="text-xl font-bold mb-2">{rec.record}</p>
                  <p className="text-neutral-400">{rec.holder}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
