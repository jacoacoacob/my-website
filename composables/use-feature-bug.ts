
function createAnt(x: number, y: number) {
  return {
    x,
    y,
    r: 8,
    dx: 0,
    dy: 0,
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = "green";
      ctx.closePath();
      ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
    },
    update() {
      this.x += this.dx;
      this.y += this.dy;
    }
  };
}

type EdgeX = "left" | "right";
type EdgeY = "top" | "bottom";
type Edge = EdgeX | EdgeY;

type Ant = ReturnType<typeof createAnt>;

function didCollide(ant: Ant, rect: DOMRect) {
  let edgeX: EdgeX | undefined;
  let edgeY: EdgeY | undefined;
  
  let testX = ant.x;
  let testY = ant.y;

  if (ant.x < rect.x) {
    testX = rect.x;
    edgeX = "left";
  }
  else if (ant.x > rect.right) {
    testX = rect.right;
    edgeX = "right";
  }

  if (ant.y < rect.y) {
    testY = rect.y;
    edgeY = "top";
  }
  else if (ant.y > rect.bottom) {
    testY = rect.bottom;
    edgeY = "bottom";
  }

  const distX = ant.x - testX;
  const distY = ant.y - testY;
  const distance = Math.sqrt(distX**2 + distY**2)

  return {
    edgeX,
    edgeY,
    collision: distance <= ant.r
  };
}


function didHitEdgeOfTheWorld(ant: Ant, edge: Edge) {
  if (edge === "top") {
    return ant.y - ant.r <= 0;
  }
  if (edge === "right") {
    return ant.x + ant.r >= window.innerWidth;
  }
  if (edge === "bottom") {
    return ant.y + ant.r >= window.innerHeight;
  }
  if (edge === "left") {
    return ant.x - ant.r <= 0;
  }
}

function physics(ant: Ant, rects: DOMRect[]) {
  let rect: DOMRect;

  for (let i = 0; i < rects.length; i++) {
    rect = rects[i];
    const { collision, edgeX, edgeY } = didCollide(ant, rect);
    if (collision) {
      if (typeof edgeX === "string") {
        ant.dx = -ant.dx;
      }
      if (typeof edgeY === "string") {
        ant.dy = -ant.dy;
      }
    }
  }

  if (
    didHitEdgeOfTheWorld(ant, "top") ||
    didHitEdgeOfTheWorld(ant, "bottom")
  ) {
    ant.dy = -ant.dy;
  }
  if (
    didHitEdgeOfTheWorld(ant, "right") ||
    didHitEdgeOfTheWorld(ant, "left")
  ) {
    ant.dx = -ant.dx;
  }
}

function letThatAntRoam(ctx: CanvasRenderingContext2D, rects: DOMRect[], ant: Ant) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  physics(ant, rects);
  ant.update();
  ant.draw(ctx);
}

function useFeatureBug() {

  const ant = createAnt(20, 20);

  ant.dx = 1;
  ant.dy = 1; 
  
  let _ctx: CanvasRenderingContext2D;
  let _animationHandle: number;
  let _rects: DOMRect[];
  let _boxes: HTMLElement[];

  const canvas = ref<HTMLCanvasElement>();

  function _computeBoundingRects() {
    for (let i = 0; i < _boxes.length; i++) {
      _rects[i] = _boxes[i].getBoundingClientRect();
    }
  }

  function _onScroll() {
    _computeBoundingRects();
  }

  function _onResize() {
    _boxes = Array.from(document.querySelectorAll("[data-bug-box]"));
    _ctx.canvas.height = window.innerHeight;
    _ctx.canvas.width = window.innerWidth;
    _computeBoundingRects();
  }

  function animate() {
    letThatAntRoam(_ctx, _rects, ant);
    _animationHandle = window.requestAnimationFrame(animate)
  }

  function stopAnimation() {
    window.cancelAnimationFrame(_animationHandle);
  }

  function setup() {
    _boxes = Array.from(document.querySelectorAll("[data-bug-box]"));
    _rects = _boxes.map((box) => box.getBoundingClientRect());
    _ctx = canvas.value?.getContext("2d") as CanvasRenderingContext2D;
    _onResize();
    _onScroll();
    
    window.addEventListener("resize", _onResize);
    window.addEventListener("scroll", _onScroll);
  }

  function teardown() {
    window.removeEventListener("scroll", _onScroll);
  }

  return { setup, teardown, animate, stopAnimation, canvas };
}

export { useFeatureBug };
