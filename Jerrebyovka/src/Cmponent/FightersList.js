import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { withRouter, Link } from "react-router-dom"
const JiribyovkaID = (props) => {
  const dispatch = useDispatch()
  const GROUPS = useSelector(({ Group }) => Group.groups)
  const NEW = useSelector(({ Fighter }) => Fighter.newfighters)

  const [id, setID] = useState("")

  console.log(GROUPS)
  

  // 
  console.log("ID", id)
  return (
    <div>
      <div className="Main">
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "20px" }}> Քաշային Տարիքային կարգեր</h1>

        <div style={{ paddingTop: "20px" }} className="flex">
          {GROUPS.map((el, index) => {
            return (
              <Link key={index} to={`/FightersList/${el.id}`}>
                <div className="btn btn-warning">
                  <h3 >{el.groupname}</h3>
                </div>
              </Link>
            )
          })}
          {

          }
        </div >
      </div >
    </div>
  )


}
export default withRouter(JiribyovkaID)


