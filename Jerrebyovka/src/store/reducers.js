import FightersReducer from "./CreateFighter/reducer"
import GroupsReducer from "./CreateGroups/reducer"

import { combineReducers } from "redux-immer";
import { produce } from "immer";

export default combineReducers(produce, {
  Fighter: FightersReducer,
  Group: GroupsReducer
})