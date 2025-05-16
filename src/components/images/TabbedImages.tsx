"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function TabbedImages({
  data,
}: {
  data: { label: string; value: string; images: string[] }[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Tabs defaultValue={data[0].value} className="w-full">
      <TabsList>
        {data.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map(({ value, images }) => (
        <TabsContent
          value={value}
          className="gap-2 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-4"
          key={value}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="group block relative p-2 w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="block z-10 absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl w-full"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.35 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25, delay: 0.4 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Image
                className="relative z-50 rounded-2xl w-full max-w-full h-40 overflow-hidden object-cover object-center"
                src={src}
                alt="image-photo"
                width={500}
                height={500}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
