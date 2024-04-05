interface UsefulStuff {
  ctx: Ref<CanvasRenderingContext2D | undefined>;
  boundingRects: DOMRect[];
  setup: (canvas: HTMLCanvasElement) => void;
  teardown: () => void;
}

function useDom(): UsefulStuff {
  const ctx = ref<CanvasRenderingContext2D>();
  let elements: HTMLElement[] = [];
  let boundingRects: DOMRect[] = [];

  function computeElements() {
    elements = Array.from(document.querySelectorAll("[data-bug-box"));
  }

  function computeBoundingRects() {
    for (let i = 0; i < elements.length; i++) {
      boundingRects[i] = elements[i].getBoundingClientRect();
    }
  }

  function onResize() {
    ctx.value!.canvas.height = window.innerHeight;
    ctx.value!.canvas.width = window.innerWidth;
    computeElements();
    computeBoundingRects();
  }

  function onScroll() {
    computeBoundingRects();
  }

  function setup(canvas: HTMLCanvasElement) {
    ctx.value = canvas.getContext("2d")!;

    
    console.log("setup ctx", ctx);
    onResize();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
  }
  
  function teardown() {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  }

  return { ctx, boundingRects, setup, teardown };
}

export { useDom };