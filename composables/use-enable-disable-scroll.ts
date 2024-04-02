

type ParentElement = Window | Element;

function preventDefault(ev: Event) {
  console.log("[preventDefault]", ev.type);
  ev.preventDefault();
}

const SCROLL_KEYS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "Space",
  "Home",
  "PageDown",
  "PageUp",
];

function preventDefaultForScrollKeys(ev: KeyboardEvent) {
  if (SCROLL_KEYS.includes(ev.code)) {
    console.log("[preventDefaultForScrollKeys]", ev.type);
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


function interruptScroll() {
  window.addEventListener("wheel", preventDefault, wheelOpt);
  window.addEventListener("touchmove", preventDefault, wheelOpt);

}

function allowScroll() {
  window.removeEventListener("wheel", preventDefault, false);
  window.removeEventListener("touchmove", preventDefault, false);
}

interface Intersection {
  elementId: string;
  ratio: number;
  distanceToCenter: number;
}

function findInViewChildren(children: HTMLElement[]) {
  return children.reduce((accum: Intersection[], child) => {
    const rect = child.getBoundingClientRect();
    const { top, bottom, height } = rect;

    let _amountShown = height;

    if (top <= 0) {
      _amountShown += top;
    }

    if (bottom >= window.innerHeight) {
      _amountShown += window.innerHeight - bottom;
    }

    const ratio = Math.round((_amountShown / height) * 100) / 100;

    const elementYCenter = top + (height / 2);
    const windowYCenter = window.scrollY + (window.innerHeight / 2);

    const distanceToCenter = Math.abs(windowYCenter - elementYCenter);
    
    if (ratio >= 0) {
      accum.push({
        ratio,
        distanceToCenter,
        elementId: child.dataset.id as string,
      });
    }
    return accum;
  }, []);
}

function usePanelScroll(items: Ref<HTMLElement[]>) {

  const inViewItems = ref(findInViewChildren(items.value));

  function listenForWheelOrSwipe() {
    window.addEventListener("wheel", onWheelOrSwipe);
    window.addEventListener("touchmove", preventDefault);

    allowScroll();
  }

  function unlistenForWheelOrSwipe() {
    window.removeEventListener("wheel", onWheelOrSwipe);
    window.removeEventListener("touchmove", preventDefault);

    allowScroll();
  }

  function onWheelOrSwipe(ev?: Event) {

  }

  function onScroll(ev?: Event) {
    inViewItems.value = findInViewChildren(items.value);
  }  

  return { onScroll, inViewItems, unlistenForWheelOrSwipe, listenForWheelOrSwipe };
}

export { usePanelScroll };
