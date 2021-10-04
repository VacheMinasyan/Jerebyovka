import { useState } from "react"
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ADDGROUP } from "../store/CreateGroups/action"
const AddGroups = () => {
  const groupss = useSelector(({ Group }) => Group)
  console.log(groupss)
  const dispatch = useDispatch()
  const [group, setGroup] = useState({
    groupname: ""
  })
  return (
    <div className="AddGroups">
      <h3 className="PersonTitleh1"> Ավելացնել Խումբ</h3>

      <div className="AddGroups_conteiner">
        <input className="form-control groupName"
          type="text"
          placeholder="Գրեք խմբի անունը..."
          value={group.groupname}
          onChange={(e) => {
            e.preventDefault()
            setGroup({ groupname: e.target.value })
          }} name="" id="" />
        <button className="btn btn-primary GroupSubmit" onClick={() => {
          if (group.groupname === "") {
            alert("You can`t send empty Group to Server")

          } else {
            console.log("erkrord " + group.groupname)
            dispatch(ADDGROUP({ groupname: group.groupname, id: Math.ceil(Math.random() * 8000) }))
            setGroup({ groupname: "" })
          }

        }}> Պահպանել</button>
      </div>
    </div>
  )
}
export default withRouter(AddGroups)