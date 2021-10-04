import types from "./types"

export function ADDPERSONS(data) {
  return {
    type: types.ADD_FIGHTER,
    payload: data
  }
}
export function getNewArray(data) {
  console.log("DATA", data)
  return {
    type: types.GET_FIGHTER,
    payload: data
  }
}
export function SetSecondEtap(data) {
  console.log("ACtions Data", data)
  return {
    type: types.SET_SECOND_EDAP,
    payload: data
  }
}
export function emptyNewArray() {
  console.log("Empty newfighters")
  return {
    type: types.EMPTY,
    
  }
}
export function WinElem(data) {
  console.log("ACtions Data", data)
  return {
    type: types.WINNERS,
    payload: data
  }
}
export function SetThirdEtap(data) {
  console.log("ACtions Data", data)
  return {
    type: types.SET_THIRD_EDAP,
    payload: data
  }
}

export function Middle33(data) {
  console.log("ACtions Data", data)
  return {
    type: types.MIDDLE3,
    payload: data
  }
}
export function poluFinal(data) {
  console.log("ACtions Data", data)
  return {
    type: types.POLUFINAL,
    payload: data
  }
}
export function Middle(data) {
  console.log("ACtions Data", data)
  return {
    type: types.MIDDLE,
    payload: data
  }
}
export function final(data) {
  console.log("ACtions Data", data)
  return {
    type: types.FINAL,
    payload: data
  }
}
export function setCount(data) {
  console.log("ACtions Data", data)
  return {
    type: types.SET_COUNT,
    payload: data
  }
}
export function DELPERSONS(data) {
  console.log(data)
  return {
    type: types.DEL_FIGHTER,
    payload: data
  }
}