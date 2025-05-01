import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const parsedDate = new Date(date);

  // Array of month names (short form)
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Get month and year
  const month = monthNames[parsedDate.getUTCMonth()];
  const year = parsedDate.getUTCFullYear();

  // Format as "Month Year"
  return `${month} ${year}`;
}
