import types from "./types"

export function ADDGROUP(data) {
  return {
    type: types.ADD_GROUP,
    payload: data
  }
}