import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from "react-router-dom"
import { SHuffleArr } from "../conteiner/functions"
import { getNewArray, emptyNewArray, setCount } from "../store/CreateFighter/action"
const Jiribyovka = () => {
  const dispatch = useDispatch()
  const GROUPS = useSelector(({ Group }) => Group.groups)
  const FIGHTER = useSelector(({ Fighter }) => Fighter.fighters)
  const NEW = useSelector(({ Fighter }) => Fighter.newfighters)
  const COUNT = useSelector(({ Fighter }) => Fighter.count)

  console.log('COUNT', COUNT)


  const empty = [];
  const GroupsID = GROUPS.map(el => el.id)

  for (let i = 0; i < GroupsID.length; i++) {
    let all = []
    for (let j = 0; j < FIGHTER.length; j++) {
      if (GroupsID[i] === FIGHTER[j].groupsID) {
        all.push(FIGHTER[j])
      }
    }
    empty.push(all)
  }
  console.log(empty)

  const Jerebyovka1 = []
  for (let i = 0; i < empty.length; i++) {
    Jerebyovka1.push(SHuffleArr(empty[i]))

  }
  // console.log(Jerebyovka1)
  console.log("NEW", NEW)








  return (
    <div className="StartS">
      <div className="jiribyovkaGroupList ">
        <Link to="/FightersList">
          <button onClick={() => {
            if (COUNT === 0) {
              dispatch(getNewArray(Jerebyovka1))
              dispatch(setCount(0))
            }

          }} className="CreateButton" >Սկսել !!!</button>
        </Link>
      </div >
    </div >

  )
}
export default withRouter(Jiribyovka)




