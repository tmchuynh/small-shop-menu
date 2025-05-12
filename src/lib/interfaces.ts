export interface MenuItemInfo {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isNew: boolean;
  isPopular: boolean;
  isVegetarian: boolean;
  isVegan: boolean;
  isDairyFree: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItemInfo[];
}
