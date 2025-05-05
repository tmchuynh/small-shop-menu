import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The numeric value to format.
 * @returns A string representing the formatted currency value.
 *          If the input is not a number, it returns "$0.00".
 */
export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";

  return "$" + value.toLocaleString(undefined);
};

export const capitalize = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Applies a percentage discount to the given price.
 * @param price - The original price.
 * @param discountPercentage - The discount percentage to apply (e.g., 10 for 10%).
 * @returns The discounted price.
 */
export function applyDiscount(
  price: number,
  discountPercentage: number
): number {
  return price - (price * discountPercentage) / 100;
}

/**
 * Generates a random string of specified length.
 *
 * @param length - The length of the random string to generate.
 * @returns A random string consisting of alphanumeric characters.
 *
 * @example
 * // Generate a random string of 10 characters
 * const randomStr = generateRandomString(10);
 * // Output example: "a7bZ9pQ3xY"
 */
export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Sorts an array of strings alphabetically in ascending order.
 *
 * @param array - The array of strings to sort
 * @returns A new array sorted alphabetically
 *
 * @example
 * const names = ["Charlie", "Alice", "Bob"];
 * const sortedNames = sortAlphabetically(names);
 * // Output: ["Alice", "Bob", "Charlie"]
 */
export function sortAlphabetically(array: string[]): string[] {
  return [...array].sort((a, b) => a.localeCompare(b));
}

/**
 * Sorts an array of objects by a specified property.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to sort
 * @param property - The property to sort by
 * @param ascending - Whether to sort in ascending order (default: true)
 * @returns A new array sorted by the specified property
 *
 * @example
 * const users = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 20 }
 * ];
 * const sortedByAge = sortByProperty(users, "age");
 * // Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
 */
export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}
