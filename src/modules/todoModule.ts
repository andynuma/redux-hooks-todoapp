import { PayloadAction, createSlice } from 'redux-starter-kit';

export interface TodoState {
  id: number;
  text: string;
  done?: boolean;
}

const InitialState: TodoState[] = [];

let nextId = 0;

// createSlice() で actions と reducers を一気に生成
const todoModule = createSlice({
  slice: 'todo',
  initialState: InitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      nextId += 1;
      const todo = {
        id: nextId,
        text: action.payload,
        done: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      // const newState = state.filter(todo => todo.id !== action.payload)
      state.splice(action.payload, 1);
    },
  },
});

export default todoModule;
