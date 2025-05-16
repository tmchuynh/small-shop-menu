import { MenuItemInfo } from "@/lib/interfaces";
import { formatCurrency } from "@/lib/utils";

export default function MenuItem({ item }: { item: MenuItemInfo }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h3>{item.name}</h3>
        </div>
        <p>{item.description}</p>
      </div>
      <div className="h-1/2">{formatCurrency(item.price)}</div>
    </div>
  );
}
