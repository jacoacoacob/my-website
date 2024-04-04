
function createClock() {
  let prev: number;
  let current: number;
  let delta: number;

  return {
    tick() {
      current = Date.now();
      delta = current - prev || Date.now();
      prev = current;
      return delta;
    }
  }
}

export { createClock };