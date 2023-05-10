import { configureStore } from "@reduxjs/toolkit";

import postsReducer from 'features/posts/postsSlice';
import usersReducer from 'features/users/usersSlice';
import notificationsReducer from 'features/notifications/notificationsSlice';
import { authApi } from "api/authApi";
import { postApi } from "api/postApi";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat([
      authApi.middleware,
      postApi.middleware,
    ]),
});