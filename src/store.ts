import { combineReducers, configureStore, getDefaultMiddleware  } from "redux-starter-kit";
import logger from 'redux-logger';
import todoModule from './modules/todoModule';

// rootReducer の準備
const rootReducer = combineReducers({
  todos: todoModule.reducer,
});

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
};
