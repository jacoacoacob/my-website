
interface State<Name, Data> {
  name: Name;
  data: Data;
}

interface StateMachine<States extends State<string, any>> {
  current: States["name"];
  transitions: {
    [S in States as S["name"]]: {
      data: S["data"];
      update: (delta: number, data: S["data"], ctx: CanvasRenderingContext2D) => States["name"] | undefined;
    }
  }
}

type Green = State<"green", { time: number; MAX_TIME: number }>;
type Yellow = State<"yellow", { time: number; MAX_TIME: number }>;
type Red = State<"red", { time: number; MAX_TIME: number }>;

const trafficLight: StateMachine<Green | Yellow | Red> = {
  current: "green",
  transitions: {
    green: {
      data: {
        time: 0,
        MAX_TIME: 5000,
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
        MAX_TIME: 6000,
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
};

export { trafficLight };






// interface Transition<Name extends string, Data> {
//   name: Name;
//   data: Data;
//   update: (delta: number) => Name | void;
// }






















// interface Transition<Name extends string, Data> {
//   name: Name;
//   data: Data;
//   update: (delta: number) => Name | void;
// }

// type Transitions<T extends Transition<string, any>> = {
//   [Key in T["name"]]: T;
// }

// type StateMachine<T extends Transition<string, any>> = {
//   current: T["name"];
//   transitions: {
//     [Key in T["name"]]: T;
//   }
// }

// type Green = Transition<"green", { chargeTime: number }>;
// type Blue = Transition<"blue", { chargeTime: number; name: string }>;

// const s: StateMachine<Green | Blue> = {
//   current: "blue",
//   transitions: {
//     blue: {
//       name: "blue",
//       data: {
//         name: "",
//         chargeTime: 2,
//       },
//       update(delta) {
//         return "green";
//       }
//     },
//     green: {
//       name: "green",
//       data: {
//         chargeTime: 2,
//       },
//       update(delta) {

//       }
//     }
//   }
// }
















// type StateMachine<S extends State<string, any>> = {
//   current: S["name"];
//   transitions: {
//     [Key in S["name"]]: {
//       data: S[Key]
//     }
//   }
// }

// const h: StateMachine<Green | Blue> = {
//   current: "green",
//   transitions: {
//     blue: {
//       data: {
        
//       },
//       update(delta) {

//       }
//     }
//   }
// }































































////////////////////////
// interface TransitionUpdateParams<Data> {
//   ctx: CanvasRenderingContext2D;
//   delta: number;
//   data: Data;
// }
  
// interface Transition<S, Data> {
//   data: Data
//   update: (params: TransitionUpdateParams<Data>) => S | void;
// }

// type Transitions<State extends string, Data> = {
//   [Key in State]: Transition<State, Data>
// }

// type StateMachine<State extends string, Data> = {
//   currentState: State;
//   transitions: Transitions<State, Data>
// };


// interface StateTransition<Name, Data> {
//   name: Name;
//   data: Data;
//   update: (params: TransitionUpdateParams<Data>) => Name | void
// }

// function createStateMachine<
//   Data,
//   Name extends keyof Transitions,
//   Transitions extends Record<string, StateTransition<string, Data>>,
// >(
//   transitions: Transitions
// ) {
//   return transitions;
// }

// const s = createStateMachine({
//   blue: {
//     name: "blue",
//     data: {
//       count: 0,
//     },
//     update(params) {
//       params.data
//       return  ""
//     }
//   }
// });
////////////////////////





// function createStateMachine<
//   Data,
//   State extends string,
// >(
//   initialState: State,
//   transitions: Transitions<State, Data>
// ): StateMachine<State, Data> {
//   return {
//     currentState: initialState,
//     transitions
//   }
// }


// const colorState = createStateMachine<any, "blue" | "green">("blue", {
//   blue: {
//     data: {
//       hi: 9,
//     },
//     update() {
      
//     }
//   },
//   green: {
//     data: {
//       name: "sd",
//     },
//     update(params) {
//       params.data.
//     }
//   }
// })


// const colorState: StateMachine<"blue" | "green"> = {
//   currentState: "blue",
//   transitions: {
//     blue: {
//       data: {
//         name: "sdlkj"
//       },
//       update({ data, delta, ctx }) {

//       }
//     },
//     green: {
//       data: {
//         chargeTime: 0,
//       },
//       update({ delta, data, ctx }) {

//         return "blue";
//       },
//     }
//   }
// }


// function hi<S extends string, D>(d: StateMachine<S, D>) {
//   return d;
// }

// const sd = hi({
//   currentState: "blue",
//   transitions: {
//     blue: {
//       data: null,
//       update() {
        
//       }
//     },
//     green: {
//       data: {},
//       update() {
        
//       }
//     }
//   }
// })

// sd.blue