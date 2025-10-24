export function getContrastColor(rgb: string) {
  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues || rgbValues.length < 3) {
    throw new Error("Invalid RGB color format");
  }
  const r = parseInt(rgbValues[0], 10);
  const g = parseInt(rgbValues[1], 10);
  const b = parseInt(rgbValues[2], 10);
  const maxContrast = 255;
  const minContrast = 128;
  const y = Math.round(0.299 * r + 0.587 * g + 0.114 * b); // luma
  let oy = 255 - y; // opposite
  let dy = oy - y; // delta
  if (Math.abs(dy) > maxContrast) {
    dy = Math.sign(dy) * maxContrast;
    oy = y + dy;
  } else if (Math.abs(dy) < minContrast) {
    dy = Math.sign(dy) * minContrast;
    oy = y + dy;
  }
  return `rgb(${oy},${oy},${oy})`;
}
