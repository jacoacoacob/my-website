import { createStateMachine } from "./state";
import type { State } from "./state";
import type { Rect } from "./bodies";

const ANT_SIZE = 16;

interface Ant {
  rect: Rect;
  dx: number;
  dy: number;
  rotation: number;
}

type AntState =
  State<"moving"> |
  State<"stopped"> |
  State<"turning", { duration: number; destination: number; }>

function createAnt(x: number, y: number) {

  const ant: Ant = {
    rect: {
      x,
      y,
      width: ANT_SIZE,
      height: ANT_SIZE,
    },
    dx: 0,
    dy: 0,
    rotation: 0,
  };

  const antState = createStateMachine<Ant, AntState>({
    current: "stopped",
    transitions: {
      moving: {
        data: {},
        handleInput(input) {

        },
        update(delta, data, ctx, entity) {

        },
      },
      stopped: {
        data: {},
        handleInput(input) {

        },
        update(delta, data, ctx, entity) {

        },
      },
      turning: {
        data: {
          duration: 0,
          destination: 0,
        },
        handleInput(input) {

        },
        update(delta, data, ctx, entity) {

        },
      },
    },
  });

  return {
    entity: ant,
    handleInput(input: string) {
      antState.handleInput(input);
    },
    update(delta: number, ctx: CanvasRenderingContext2D) {
      antState.update(delta, ctx, ant);
    },
  };
}