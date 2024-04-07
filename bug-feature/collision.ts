import type { Rect } from "./bodies";

function didCollide(r1: Rect, r2: Rect) {
  return (
    r1.x + r1.width >= r2.x &&
    r1.x <= r2.x + r2.width &&
    r1.y + r1.height >= r2.y &&
    r1.y <= r2.y + r2.height
  );
}

export { didCollide };
