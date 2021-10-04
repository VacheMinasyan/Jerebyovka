import { Link, withRouter } from "react-router-dom"


const StartPage = () => {
  return (

    <div className="StartPageSquare">
      <div>
        <Link className="StartPage" to="/Page"> Սկսել ժիրիբյովկան !!!</Link>

      </div>

    </div>



  )
}
export default withRouter(StartPage)