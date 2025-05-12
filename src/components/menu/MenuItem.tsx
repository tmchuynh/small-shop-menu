import { MenuItemInfo } from "@/lib/interfaces";
import { formatCurrency } from "@/lib/utils";
import { FaCarrot } from "react-icons/fa";
import { GiBeet } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { PiCheeseFill } from "react-icons/pi";

export default function MenuItem({
  item,
  opt,
}: {
  item: MenuItemInfo;
  opt?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h3>{item.name}</h3>
          {opt && (
            <div className="flex items-center gap-2 mt-2">
              {item.isNew && <MdStar />}
              {item.isPopular && <IoMdHeart />}
              {item.isVegetarian && <FaCarrot />}
              {item.isVegan && <GiBeet className="-mb-1" />}
              {!item.isDairyFree && (
                <PiCheeseFill className="-mb-0.5 transform -rotate-10" />
              )}
            </div>
          )}
        </div>
        <p>{item.description}</p>
      </div>
      <div className="h-1/2">{formatCurrency(item.price)}</div>
    </div>
  );
}
