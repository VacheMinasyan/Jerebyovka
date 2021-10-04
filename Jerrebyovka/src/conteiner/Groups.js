import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom"
const Groups = () => {
  const groups = useSelector(({ Group }) => Group.groups)
  console.log(groups)
  return (
    <div className="GROUPSPAGE" >
      <h1 className="GROUPSPAGETITLE" >Խմբեր</h1>
      <div className="GroupsTable">
        {groups.map((el, index) => {
          return (
            <div key={index}>
              <Link className="hrefBlack" to={`/Page/Groups/${el.id}`}> {el.groupname}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withRouter(Groups)