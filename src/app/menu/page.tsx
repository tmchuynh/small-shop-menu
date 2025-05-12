import MenuSection from "@/components/menu/MenuSection";
import { drinkMenu } from "@/lib/constants/menu/drinkMenu";
import { foodMenu } from "@/lib/constants/menu/foodMenu";

export default function MenuPage() {
  return (
    <div>
      <div className="relative mx-auto w-11/12">
        <h1>Menu</h1>

        <section>
          <div>
            <div className="gap-4 grid">
              {foodMenu.map((category) => (
                <MenuSection
                  key={category.name}
                  category={category}
                  opt={true}
                />
              ))}
            </div>
            <div className="gap-4 grid">
              {drinkMenu.map((category) => (
                <MenuSection key={category.name} category={category} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
