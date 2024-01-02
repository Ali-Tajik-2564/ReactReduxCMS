import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserReducer';
import CourseReducer from './reducers/CourseReducer';
import ArticleReducer from './reducers/ArticleReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    course: CourseReducer,
    article: ArticleReducer,
  },
});
export default store;
