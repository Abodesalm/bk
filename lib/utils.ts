import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function format(...ch) {
  if (ch[-1] === null) {
    ch.pop();
  }
  return ch.join('/');
}
