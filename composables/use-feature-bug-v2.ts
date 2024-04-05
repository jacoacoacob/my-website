import { createClock } from "~/bug-feature/clock";
import { useDom } from "~/bug-feature/use-dom";
import { trafficLight } from "~/bug-feature/state";

function useFeatureBugV2() {
  const { ctx, boundingRects, setup, teardown } = useDom();

  const clock = createClock();

  let animationHandle: number;

  function animate() {
    const delta = clock.tick();
    ctx.value?.clearRect(0, 0, ctx.value.canvas.width, ctx.value.canvas.height);
    const transition = trafficLight.transitions[trafficLight.current];
    const newState = transition.update(delta, transition.data, ctx.value!);
    if (newState) {
      trafficLight.current = newState;
    }
    animationHandle = window.requestAnimationFrame(animate);
  }

  function stopAnimation() {
    cancelAnimationFrame(animationHandle);
  }

  return { animate, stopAnimation, setup, teardown };
}

export { useFeatureBugV2 };
