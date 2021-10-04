import types from "./types"

const Fighters = {
  fighters: localStorage.fighters ? JSON.parse(localStorage.fighters) : [],
  newfighters: localStorage.newfighters ? JSON.parse(localStorage.newfighters) : [],
  secondetap: localStorage.secondetap ? JSON.parse(localStorage.secondetap) : [],
  thirdetap: localStorage.thirdetap ? JSON.parse(localStorage.thirdetap) : [],
  count: localStorage.count ? JSON.parse(localStorage.count) : 0,
  polufinal: localStorage.polufinal ? JSON.parse(localStorage.polufinal) : [],
  final: localStorage.final ? JSON.parse(localStorage.final) : [],
  middle: localStorage.middle ? JSON.parse(localStorage.middle) : [],
  middle3: localStorage.middle3 ? JSON.parse(localStorage.middle3) : [],
  winners: localStorage.winners ? JSON.parse(localStorage.winners) : [],

}

const FightersReducer = (state = Fighters, option) => {
  console.log(option)
  switch (option.type) {
    case types.ADD_FIGHTER:
      state.fighters.push({ ...option.payload })
      localStorage.fighters = JSON.stringify(state.fighters)
      return state
    case types.DEL_FIGHTER:
      state.fighters = state.fighters.filter(el => el.id !== option.payload.id)
      localStorage.fighters = JSON.stringify(state.fighters)
      return state
    case types.GET_FIGHTER:
      console.log("Optioon Payload", option.payload)
      state.newfighters.push([...option.payload])
      localStorage.newfighters = JSON.stringify(state.newfighters)
      return state
    case types.SET_SECOND_EDAP:
      console.log("Optioon ID Second Etap", option.payload)
      state.secondetap.push({ ...option.payload })
      // state.secondetap.push(option.payload)
      localStorage.secondetap = JSON.stringify(state.secondetap)
      return state
    case types.SET_THIRD_EDAP:
      console.log("Optioon ID Third Etap", option.payload)
      state.thirdetap.push({ ...option.payload })
      // state.secondetap.push(option.payload)
      localStorage.thirdetap = JSON.stringify(state.thirdetap)
      return state
    case types.MIDDLE:
      console.log("Optioon ID Middle", option.payload)
      state.middle.push({ ...option.payload })
      // state.secondetap.push(option.payload)
      localStorage.middle = JSON.stringify(state.middle)
      return state
    case types.MIDDLE3:
      console.log("Optioon ID Middle3", option.payload)
      state.middle3.push({ ...option.payload })
      // state.secondetap.push(option.payload)
      localStorage.middle3 = JSON.stringify(state.middle3)
      return state
    case types.POLUFINAL:
      console.log("Optioon ID Polufinal", option.payload)
      state.polufinal.push({ ...option.payload })
      localStorage.polufinal = JSON.stringify(state.polufinal)
      return state
    case types.FINAL:
      console.log("Optioon ID Final", option.payload)
      state.final.push({ ...option.payload })
      // state.secondetap.push(option.payload)
      localStorage.final = JSON.stringify(state.final)
      return state
    case types.WINNERS:
      console.log("Optioon ID Winners", option.payload)
      state.winners.push({ ...option.payload })
      localStorage.winners = JSON.stringify(state.winners)
      return state
    case types.SET_COUNT:
      let k = state.count
      k++
      option.payload = option.payload + k
      console.log("POPOXVAC COUNT", option.payload)
      state.count = option.payload
      localStorage.count = JSON.stringify(state.count)
      return state

    default:
      return state
  }
}
export default FightersReducer