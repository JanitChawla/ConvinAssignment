import { combineReducers } from "redux";
import posts from "./posts";
import users from "./user";
export default combineReducers({
  posts: posts,
  users: users,
});
