"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  popularDrinks,
  popularFood,
  seasonalDrinksCarouselImages,
  seasonalFoodCarouselImages,
} from "@/lib/constants/images/carousels";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HomePage() {
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
          src={"/images/coffeecups.png"}
          alt="Restaurant"
          className="w-full h-[40rem] object-center object-cover"
          width={1920}
          height={1080}
        />
      </section>
      <section className="relative mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <h1>Our Seasonal Drinks</h1>
        <p>
          Our seasonal drinks are a delightful celebration of flavors and
          ingredients that change with the seasons. From refreshing summer
          smoothies to cozy winter lattes, our menu evolves to capture the
          essence of each time of year. Each drink is crafted with care,
          showcasing the freshest ingredients and unique flavor combinations.
          Join us in savoring our seasonal drinks, where every sip is a
          delightful experience that reflects the beauty of nature's bounty.
          Whether you're looking for a refreshing pick-me-up or a comforting
          indulgence, our seasonal drinks are designed to tantalize your taste
          buds and elevate your experience. Discover the magic of the seasons
          through our carefully curated selection of beverages, where every sip
          is a celebration of flavor and creativity.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
          className="mx-auto mt-7 w-10/12 md:w-11/12 lg:w-full"
        >
          <CarouselContent className="-ml-1">
            {seasonalDrinksCarouselImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={image}
                  alt=""
                  className="rounded-lg h-full object-cover"
                  width={400}
                  height={400}
                />
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

      <section className="relative mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <h1>Our Seasonal Food Items</h1>
        <p>
          Our seasonal food items are a delightful fusion of flavors and
          ingredients that celebrate the essence of each season. From hearty
          soups to vibrant salads, our menu changes with the seasons to ensure
          you experience the freshest and most delicious offerings. Whether
          you're looking for a light summer dish or a comforting winter meal,
          our seasonal food items are crafted with care and creativity. Join us
          in savoring the flavors of the season, where every bite is a
          celebration of nature's bounty. Indulge in our seasonal food items and
          discover a world of culinary delights that will tantalize your taste
          buds and leave you craving more.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="mx-auto mt-7 w-10/12 md:w-11/12 lg:w-full"
        >
          <CarouselContent className="-ml-1">
            {seasonalFoodCarouselImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={image}
                  alt=""
                  className="rounded-lg h-full object-cover"
                  width={400}
                  height={400}
                />
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

      <section className="relative mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <h1>Our Popular Drinks</h1>
        <p>
          Our popular drinks are a testament to our commitment to quality and
          flavor. From classic favorites to innovative creations, each drink is
          crafted with the finest ingredients and utmost care. Whether you're in
          the mood for a rich espresso, a refreshing iced tea, or a decadent
          smoothie, our menu has something to satisfy every palate. Join us in
          exploring our most beloved beverages, where every sip is a delightful
          experience that keeps our customers coming back for more.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2850,
            }),
          ]}
          className="mx-auto mt-7 w-10/12 md:w-11/12 lg:w-full"
        >
          <CarouselContent className="-ml-1">
            {popularDrinks.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={image}
                  alt=""
                  className="rounded-lg h-full object-cover"
                  width={400}
                  height={400}
                />
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

      <section className="relative mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <h1>Our Popular Food Items</h1>
        <p>
          Our popular food items are a celebration of flavor and creativity,
          crafted to satisfy every craving. From savory sandwiches to delectable
          pastries, our menu features a diverse range of dishes that have
          captured the hearts of our customers. Each item is made with the
          freshest ingredients and a passion for culinary excellence. Join us in
          indulging in our most beloved food offerings, where every bite is a
          delightful experience that keeps our guests coming back for more.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2700,
            }),
          ]}
          className="mx-auto mt-7 w-10/12 md:w-11/12 lg:w-full"
        >
          <CarouselContent className="-ml-1">
            {popularFood.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={image}
                  alt=""
                  className="rounded-lg h-full object-cover"
                  width={400}
                  height={400}
                />
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
  );
}
