"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
      console.log(api.canScrollPrev());
    }
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
      console.log(api.canScrollNext());
    }
  }, [api]);

  return (
    <div className="min-h-screen">
      <section className="relative">
        <Image
          src={
            "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_1280.jpg"
          }
          alt="Restaurant"
          className="w-full h-[40em] object-center object-cover"
          width={1920}
          height={1080}
        />
      </section>
      <div className="relative mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <section>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 9000,
              }),
            ]}
            className="mx-auto w-10/12 md:w-11/12 lg:w-full"
          >
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex justify-center items-center p-6 aspect-square">
                        <span className="font-semibold text-2xl">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-end gap-4 mx-auto my-3 lg:my-10 w-10/12 md:w-11/12">
            <Button
              size={"icon"}
              variant={"icon"}
              className="flex justify-center items-center rounded-full"
              onClick={scrollPrev}
            >
              <FaChevronLeft />
            </Button>
            <Button
              size={"icon"}
              variant={"icon"}
              className="rounded-full"
              onClick={scrollNext}
            >
              <FaChevronRight />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
