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

export const coloring = (num) => {
  if (num === 100) return 'green';
  else if (num < 100 && num >= 85) return 'green';
  else if (num < 85 && num >= 70) return 'yellow';
  else if (num < 70 && num >= 60) return 'yellow';
  else if (num < 60) return 'red';
};

export function parseTimeToSeconds(time: string): number {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}
