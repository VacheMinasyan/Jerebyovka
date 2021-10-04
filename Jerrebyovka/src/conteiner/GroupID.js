import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom"
import { DELPERSONS } from "../store/CreateFighter/action";
const GroupID = (props) => {
  const id = +props.match.params.id
  console.log(id)
  const dispatch = useDispatch()

  const fighters = useSelector(({ Fighter }) => Fighter.fighters)
  console.log("FIGHTERS === ", fighters)
  let newFigtersList = fighters.filter(el => el.groupsID === id)
  console.log("newFigthersList====", newFigtersList)
  return (
    <div className="GROUPSIDPAGE" >
      {newFigtersList.map((el, index) => {
        return (
          <div className="FightersDIV" key={index} >
            <h1 className="FightersName">
              {index + 1})
              {el.isFavorite === true ? el.name + " " + el.surname + "(Favorite)" : el.name + " " + el.surname}
            </h1>
            <button className="btn btn-danger" onClick={() => {
              dispatch(DELPERSONS({ id: el.id }))
            }}>Delete Fighter</button>
          </div>
        )
      })}


    </div>
  )
}

export default withRouter(GroupID)