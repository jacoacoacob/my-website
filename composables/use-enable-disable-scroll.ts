

type ParentElement = Window | Element;

function preventDefault(ev: Event) {
  ev.preventDefault();
}

const SCROLL_KEYS = [
  "KeyLeft",
  "KeyUp",
  "KeyRight",
  "KeyDown",
  "Space",
  "Home",
  "PageDown",
  "PageUp",
];

function preventDefaultForScrollKeys(ev: KeyboardEvent) {
  if (SCROLL_KEYS.includes(ev.code)) {
    preventDefault(ev);
    return false;
  }
}

let supportsPassive = false;
try {
  window.addEventListener("test", () => {}, Object.defineProperty({}, "passive", {
    get() {
      supportsPassive = true;
    },
  }));
} catch(e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;

function getWheelEvent() {
  return "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
}

function disableScrollInterrupt(element: ParentElement) {
  element.addEventListener("DOMMouseScroll", preventDefault, false);
  element.addEventListener(getWheelEvent(), preventDefault, wheelOpt);
  element.addEventListener("touchmove", preventDefault, wheelOpt);
  element.addEventListener("keydown", preventDefaultForScrollKeys as any, false);
}

function enableScrollInterrupt(element: ParentElement) {
  element.removeEventListener("DOMMouseScroll", preventDefault, false);
  element.removeEventListener(getWheelEvent(), preventDefault, false);
  element.removeEventListener("touchmove", preventDefault, false);
  element.removeEventListener("keydown", preventDefaultForScrollKeys as any, false);
}

function findInViewChildren(parent: ParentElement, children: Element[]) {
        
}

function usePanelScroll(parent: ParentElement, children: Element[]) {

  const scrollDirection = ref<"up" | "dwon" | "idle">("idle");

  let handle: NodeJS.Timeout;

  function onScroll(ev?: Event) {
    const inView = findInViewChildren(parent, children);
  }

  return { onScroll, scrollDirection };
}

export { usePanelScroll };
