
interface State<Name, Data = {}> {
  name: Name;
  data: Data;
}

type Transition<
  Entity,
  States extends State<string, any>,
  Data
> = {
  data: Data;
  handleInput: (input: string) => States["name"] | undefined | void;
  update: (
    delta: number,
    data: Data,
    ctx: CanvasRenderingContext2D,
    entity: Entity,
  ) => States["name"] | undefined | void;
}

interface StateMachineOptions<Entity, States extends State<string, any>> {
  current: States["name"];
  transitions: {
    [S in States as S["name"]]: Transition<Entity, States, S["data"]>
  }
}

function createStateMachine<Entity, States extends State<string, any>>(
  options: StateMachineOptions<Entity, States>
) {
  let transition = options.transitions[options.current] as Transition<Entity, States, any>;
  let newState: ReturnType<typeof transition.update>;

  function _setState(state: States["name"]) {
    options.current = state;
    transition = options.transitions[state] as Transition<Entity, States, any>;
  }

  return {
    handleInput(input: string) {
      const newState = transition.handleInput(input);
      if (newState) {
        _setState(newState);
      }
    },
    update(delta: number, ctx: CanvasRenderingContext2D, entity: Entity) {
      newState = transition.update(
        delta,
        transition.data,
        ctx,
        entity,
      );
      if (newState) {
        _setState(newState);
      }
    }
  }
}

type Green = State<"green", { time: number; MAX_TIME: number }>;
type Yellow = State<"yellow", { time: number; MAX_TIME: number }>;
type Red = State<"red", { time: number; MAX_TIME: number }>;

const trafficLight = createStateMachine<{}, Green | Yellow | Red>({
  current: "green",
  transitions: {
    green: {
      data: {
        time: 0,
        MAX_TIME: 3000,
      },
      handleInput(input) {
        return "green"
      },
      update(delta, data, ctx) {
        data.time += delta;
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "40px serif";
        ctx.fillStyle = "black";
        ctx.fillText(
          Math.ceil((data.MAX_TIME - data.time) / 1000).toString(),
          ctx.canvas.width / 2,
          ctx.canvas.height / 2
        );
        ctx.fillStyle = "green";
        if (data.time > data.MAX_TIME) {
          data.time = 0;
          return "yellow";
        }
      },
    },
    yellow: {
      data: {
        time: 0,
        MAX_TIME: 3000,
      },
      handleInput(input) {
        return "green";
      },
      update(delta, data, ctx) {
        data.time += delta;
        ctx.fillStyle = "yellow";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "40px serif";
        ctx.fillStyle = "black";
        ctx.fillText(
          Math.ceil((data.MAX_TIME - data.time) / 1000).toString(),
          ctx.canvas.width / 2,
          ctx.canvas.height / 2
        );
        ctx.fillStyle = "yellow";
        if (data.time > data.MAX_TIME) {
          data.time = 0;
          return "red";
        }
      },
    },
    red: {
      data: {
        time: 0,
        MAX_TIME: 2000,
      },
      handleInput(input) {
        return "green";
      },
      update(delta, data, ctx) {
        data.time += delta;
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "40px serif";
        ctx.fillStyle = "black";
        ctx.fillText(
          Math.ceil((data.MAX_TIME - data.time) / 1000).toString(),
          ctx.canvas.width / 2,
          ctx.canvas.height / 2
        );
        ctx.fillStyle = "red";
        if (data.time > data.MAX_TIME) {
          data.time = 0;
          return "green";
        }
      },
    }
  },
})


export { trafficLight, createStateMachine };
export type { State, StateMachineOptions };
