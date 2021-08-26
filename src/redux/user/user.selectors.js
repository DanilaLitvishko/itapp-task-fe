import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);

export const selectError = createSelector(selectUser, (user) => user.error);

export const selectLoading = createSelector(selectUser, (user) => user.loading);

export const selectUserInfo = createSelector(
  selectUser,
  (user) => user.userInfo
);

export const selectImage = createSelector(selectUser, (user) => user.image);

export const selectRole = createSelector(selectUser, (user) => user.isAdmin);
