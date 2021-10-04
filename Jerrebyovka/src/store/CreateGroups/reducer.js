import types from "./types"
const Groups = {
  groups: localStorage.groups? JSON.parse(localStorage.groups) : []
}

const GroupsReducer = (state = Groups, option) => {
  switch (option.type) {
    case types.ADD_GROUP:
      state.groups.push({ ...option.payload })
      localStorage.groups = JSON.stringify(state.groups)
      return state
    default:
      return state
  }
}
export default GroupsReducer