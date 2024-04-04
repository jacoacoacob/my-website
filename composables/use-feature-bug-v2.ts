import { createClock } from "~/bug-feature/clock";
import { useDom } from "~/bug-feature/use-dom";

type Dispatch = (nextState: string) => void;

const state = {
  current: "blue",
  transitions: {
    blue: {
      data: {
        chargeTime: 0,
      },
      enter(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 200, 200);
      },
      update(delta: number, dispatch: Dispatch) {
        this.data.chargeTime += delta;
        if (this.data.chargeTime > 1000) {
          this.data.chargeTime = 0;
          dispatch("green");
        }
      }
    },
    green: {
      data: {
        chargeTime: 0,
      },
      enter(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, 200, 200);
      },
      update(delta: number, dispatch: Dispatch) {
        this.data.chargeTime += delta;
        if (this.data.chargeTime > 500) {
          this.data.chargeTime = 0;
          dispatch("blue");
        }
      }
    },
  },
  dispatch(nextState: string) {
    this.current = nextState;
  }
}

function useFeatureBugV2() {
  const { ctx, boundingRects, setup, teardown } = useDom();

  const clock = createClock();

  let animationHandle: number;

  function animate() {
    const delta = clock.tick();

    state.transitions[state.current as "blue" | "green"].enter(ctx.value!);
    state.transitions[state.current as "blue" | "green"].update(delta, state.dispatch.bind(state));
    animationHandle = window.requestAnimationFrame(animate);
  }

  function stopAnimation() {
    cancelAnimationFrame(animationHandle);
  }

  return { animate, stopAnimation, setup, teardown };
}

export { useFeatureBugV2 };
