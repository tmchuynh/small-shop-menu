export interface MenuItemInfo {
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface MenuCategory {
  name: string;
  description: string;
  items: MenuItemInfo[];
}
