"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeSlideUp } from "@/lib/animations";
import { CardGroup } from "@/components/CardGroup";

interface Car {
  _id: string;
  name: string;
  manufacturer: string;
  year: number;
  topSpeed: number;
  acceleration: string;
  price: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  era: string;
}

interface FeaturedCarsProps {
  cars: Car[];
}

export function FeaturedCars({ cars }: FeaturedCarsProps) {
  return (
    <motion.section
      className="py-20 px-6 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeSlideUp} custom={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-racing mb-4">
              Featured Speed Machines
            </h2>
          </div>
        </motion.div>
        <CardGroup>
          <motion.div
            className="grid w-full md:grid-cols-2 gap-8"
            variants={fadeSlideUp}
            custom={1}
          >
            {cars.map((car, i) => (
              <motion.div
                key={car._id}
                className="group relative overflow-hidden rounded-md border border-white/20"
                variants={fadeSlideUp}
                custom={i + 2}
              >
                <Link
                  key={car._id}
                  href={`/models/${car._id}`}
                  className="group relative overflow-hidden bg-neutral-900 hover:transform transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={car.mainImage.asset.url}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> */}
                    <h3 className="absolute bottom-4 left-4 text-lg font-bold mb-1">
                      {car.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </CardGroup>
      </div>
    </motion.section>
  );
}
