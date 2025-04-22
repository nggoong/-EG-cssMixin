export const pxToVw = (px: number, base: number = 360): string => {
  const vw = (px / base) * 100;
  const rounded = Math.round(vw * 100) / 100;
  return `${rounded}vw`;
};