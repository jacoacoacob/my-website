

function useDynamicBreadcrumbSections() {

  const activeStack = ref<string[]>([]); 

  const activeSection = computed(() => activeStack.value[activeStack.value.length - 1]);

  function pushActive(value: string) {
    if (!activeStack.value.includes(value)) {
      activeStack.value.push(value);
    }
  }

  function removeActive(value: string) {
    activeStack.value.splice(
      activeStack.value.indexOf(value),
      1
    );
  }

  const projectsSection = ref<HTMLElement>();
  const workSection = ref<HTMLElement>();

  const sections = [["Projects", projectsSection], ["Work", workSection]] as const;

  const showBreadcrumbHeader = ref(false);

  function onScroll() {
    showBreadcrumbHeader.value = window.scrollY > 270;
  }

  function setup() {
    onScroll();

    window.addEventListener("scroll", onScroll);

    sections.forEach(([label, domRef]) => {
      const io = new IntersectionObserver((entries) => {
        const [item] = entries;
        if (
          item.intersectionRect.bottom === 0 &&
          item.intersectionRect.height === 0 &&
          item.intersectionRect.left === 0 &&
          item.intersectionRect.right === 0 &&
          item.intersectionRect.top === 0 &&
          item.intersectionRect.width === 0
        ) {
          return;
        }
        if (item.isIntersecting) {
          pushActive(label);
        } else {
          removeActive(label);
        }
      }, { threshold: [0.01, 0.05, 0.1], root: document });

      if (domRef.value) {
        io.observe(domRef.value);
      }
    });
  }

  function teardown() {
    window.removeEventListener("scroll", onScroll);
  }

  return { setup, teardown, projectsSection, workSection, activeSection, showBreadcrumbHeader };
}

export { useDynamicBreadcrumbSections };
