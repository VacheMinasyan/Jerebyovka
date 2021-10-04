import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from "react-router-dom"
import { ADDPERSONS } from "../store/CreateFighter/action"


const AddPersons = (props) => {
  const groups = useSelector(({ Group }) => Group.groups)
  const dispatch = useDispatch()
  console.log("Groups" + groups)
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    isFavorite: false,
    win: 0,
    groupsID: "",
    id: "",
    choosen: false,
  })
  console.log("is Favorite " + person.isFavorite)
  console.log("groupsID " + person.groupsID)
  useEffect(() => {
    setPerson({ ...person, id: Math.ceil(Math.random() * 877777) })
  }, [])

  return (
    <div className="PersonsBackground">
      <h1 className="PersonTitleh1" >Ավելացնել նոր մասնակից</h1>
      <div className="PersonsConteiner">
        <div className="x">
          <label
            className="PersonsText"
            htmlFor="Name"> Անուն:</label>

          <input
            className="form-control "
            value={person.name}
            type="text"
            name="name"
            id=""
            placeholder="Գրեք անունը..."
            onChange={(e) => {
              e.preventDefault()
              setPerson({ ...person, name: e.target.value })
            }} />
        </div>

        <div className="x">
          <label
            className="PersonsText"
            htmlFor="Surname"> Ազգանուն: </label>
          <input
            className="form-control"
            type="text"
            value={person.surname}
            name="surname"
            id=""
            placeholder="Գրեք ազգանունը..."
            onChange={(e) => {
              e.preventDefault()
              setPerson({ ...person, surname: e.target.value })
            }} />

        </div>
        <div className="x">
          <label
            className="checkbox PersonsText"
            // className="PersonsText"
            htmlFor="check"> Ֆավորիտ:
          </label>
          <input
            className="PersonsInput"
            value="true"
            type="checkbox"
            name="check"
            id=""
            onChange={(e) => {
              setPerson({ ...person, isFavorite: e.target.checked })
            }} />

        </div>

        <div className="x">

          <label className="PersonsText" htmlFor="Select Groups">
            Ընտրել Խումբը
          </label>
          <select
            className="form-control"
            style={{ height: "150px" }}
            multiple
            onChange={(e) => {
              e.preventDefault()
              console.log(e.target.value)
              let el = groups.find((el) => {
                if (el.groupname === e.target.value) {
                  return el.id
                }
              })
              console.log("ID =====", el.id)

              setPerson({ ...person, groupsID: el.id })

            }}

            className="PersonsInput" >
            {groups.map((el, index) => {
              console.log(el)
              return (
                <option key={index} value={groups.groupsID}>{el.groupname}</option>
              )
            })}
          </select>
        </div>
        <button
          style={{ margin: "auto", marginBottom: "10px" }}
          className="btn btn-primary"
          onClick={
            () => {

              dispatch(ADDPERSONS(person))
              setPerson({
                name: "",
                surname: "",
                isFavorite: false,
                win: 0,
                groupsID: "",
                id: ""
              })
              props.history.push({ pathname: '/Page' })
            }
          }> Պահպանել </button>
      </div>
    </div>
  )
}
export default withRouter(AddPersons)