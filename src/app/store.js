import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import _product from '../features/ListItem/_product';


// khởi tạo store chúng ta sẽ dùng hàm configureStore của package redux toolkit thay vì createStore của redux. Hàm này nhận params đầu vào là một object có key là reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: _product
  },
});
