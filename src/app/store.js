import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


// khởi tạo store chúng ta sẽ dùng hàm configureStore của package redux toolkit thay vì createStore của redux. Hàm này nhận params đầu vào là một object có key là reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
