
interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

function createRect(x: number, y: number, width: number, height: number): Rect {
  return { x, y, width, height };
}

export { createRect };
export type { Rect };
