


interface State<Entity, Data> {
  data: Data;

  update: (entity: Entity) => void;
}

interface WalkingStateData {
  chargeTime: number;
}

function walkingState(data: WalkingStateData): State<Ant, WalkingStateData>  {
  return {
    data,
    update(ant) {
      this.data.chargeTime++;
      if (this.data.chargeTime > 3233) {

      }
    },
  }
}

class WalkingState {
  
  handleInput(ant: Ant) {

  }
}


interface Ant {
  x: number;
  y: number;
  w: number;
  h: number;
}

function makeWalkingState<Data>(data: Data): State<Ant, Data, "stop" | "rotate"> {
  return {
    data,
    handleInput(ant, input) {
      switch (input) {
        case "rotate":
        case "stop":
          return;
      }
    },
    update(ant) {

    }
  }
}

function makeFallingState<Data>(data: Data): State<Ant, Data, "stop" | "rotate"> {
  return {
    data,
    handleInput(ant, input) {
      switch (input) {
        case "rotate":
          return;
        case "stop":
          return;
        default:
          console.log("unrecognized input");
          return;
      }
    },
    update(ant) {

    }
  }
}

type Dispatch<Transitions> = (event: keyof Transitions) => void;

// interface Transition<Entity> {
//   update: (entity: Entity) => void;
// }

type Transition<Entity> = (entity: Entity) => void;

// type Transitions<Entity> = Record<string, Transition<Entity>>;

// interface FSM<Entity, Transitions extends Record<string, Transition<Entity>>> {
//   currentState: keyof Transitions;
//   transitions: Transitions;
//   dispatch: Dispatch<Transitions>;
// }


// // function createFSM<Entity, T extends Transitions<Entity>>(options: { currentState: keyof T, transitions: T, dispatch: Dispatch<T> }): FSM<Entity, T> {
// //   return options;
// // }


// // function createFSM<Entity>(options: { currentState: keyof Transitions<Entity>, transitions: Transitions<Entity>, dispatch: Dispatch<Transitions<Entity>> }): FSM<Entity, Transitions<Entity>> {
// function createFSM<Entity>(options: FSM<Entity, Transitions<Entity>>) {
//   return {
    
//   };
// }



interface FSM2<Entity> {
  currentState: string;
  transitions: {
    [key: string]: Transition<Entity>
  }
}



function makeFSM<
  Entity,
  T extends Record<string, Transition<Entity>>,
  State extends keyof T
>(
  initialState: State,
  transitions: T
) {
  return {
    currentState: initialState,
    transitions,
    setState(newState: State) {
      this.currentState = newState;
    }
  }
}



const sd = makeFSM<Ant>("", {
  falling(ant) {

  }
})

// const antFSM = createFSM<Ant>({
//   currentState: "walking",
//   transitions: {
//     walking(ant) {

//     }
//   },
//   dispatch(event) {
//     switch (event) {

//     }
//   },
// })

// function makeAntFSM<T extends Transistions<Ant>>(currentState: ): FSM<Ant, T> {

// }

const AntFSM = {
  currentState: "walking",
  transitions: {
    walking: {
      update(ant: Ant) {

      }
    },
    stopped: {
      update(ant: Ant) {

      }
    },
    rotate_right: {

    },
    rotate_left: {
      update(ant: Ant) {

      }
    }
  },
  dispatch(event: "walking" | "stopped") {

  }
}


const antFsm = {
  current: "walking"
}

function createAnt(): Ant {

  const state = new AntState();

  return {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  }
}