export const pxDivide = (px: number, divisor: number = 3): string => {
  return `${Math.round(px / divisor)}px`;
};