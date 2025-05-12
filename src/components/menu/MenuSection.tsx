import { MenuCategory } from "@/lib/interfaces";
import MenuItem from "./MenuItem";

export default function MenuSection({
  category,
  opt,
}: {
  category: MenuCategory;
  opt?: boolean;
}) {
  return (
    <section className="mb-16">
      <h2>{category.name}</h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} opt={opt} />
        ))}
      </div>
    </section>
  );
}
