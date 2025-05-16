import MenuSection from "@/components/menu/MenuSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { drinkMenu } from "@/lib/constants/menu/drinkMenu";
import { foodMenu } from "@/lib/constants/menu/foodMenu";
import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="relative mx-auto w-11/12">
      <h1>Menus</h1>

      <section>
        <div className="gap-10 grid">
          <Card className="relative flex flex-col justify-start items-start p-4 h-[10rem] md:h-[15rem] lg:h-[20rem] 2xl:h-[25rem]">
            <Image
              src="https://cdn.pixabay.com/photo/2016/02/03/17/24/coffee-1177526_1280.jpg"
              alt="Food image background"
              width={1200}
              height={900}
              className="absolute inset-0 opacity-50 rounded-lg w-full h-full object-cover"
            />
            <h2>Food</h2>
            <Dialog>
              <DialogTrigger asChild className="z-10">
                <Button variant="outline">View Menu</Button>
              </DialogTrigger>
              <DialogContent className="m-auto max-w-[90%] md:max-w-[95%] max-h-[90%]">
                <DialogTitle className="sr-only">Food Menu</DialogTitle>
                <ScrollArea className="mx-auto px-7 xl:w-full h-[16%] md:h-[29%] 2xl:h-[30%]">
                  <div className="gap-4 grid">
                    {foodMenu.map((category) => (
                      <MenuSection key={category.name} category={category} />
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </Card>
          <Card className="relative flex flex-col justify-start items-start p-4 h-[10rem] md:h-[15rem] lg:h-[20rem] 2xl:h-[25rem]">
            <Image
              src="https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_1280.jpg"
              alt="Drinks image background"
              width={1200}
              height={900}
              className="absolute inset-0 opacity-50 rounded-lg w-full h-full object-cover"
            />
            <h2>Drinks</h2>
            <Dialog>
              <DialogTrigger asChild className="z-10">
                <Button variant="outline">View Menu</Button>
              </DialogTrigger>
              <DialogContent className="m-auto max-w-[90%] md:max-w-[95%] max-h-[90%]">
                <DialogTitle className="sr-only">Drinks Menu</DialogTitle>
                <ScrollArea className="mx-auto px-7 xl:w-full h-[16%] md:h-[29%] 2xl:h-[30%]">
                  <div className="gap-4 grid">
                    {drinkMenu.map((category) => (
                      <MenuSection key={category.name} category={category} />
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </section>
    </div>
  );
}
