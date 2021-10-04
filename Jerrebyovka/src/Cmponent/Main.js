import { BrowserRouter as Router, Link, Route, Switch, withRouter } from "react-router-dom"


const Main = () => {
  return (
    <div className="Main">
      <div className="ChooseButtons">
        <Link className="href" to="/Page/AddGroups"> <button className="ChooseButtons__Group"  > Ավելացնելնոր Խումբ</button></Link>
        <Link className="href" to="/Page/AddPersons"> <button className="ChooseButtons__Person"  > Ավելացնել նոր մասնակից </button></Link>
        <Link className="href" to="/Page/Groups"> <button className="ChooseButtons__Person active"  > Խմբեր</button></Link>
        <Link className="href" to="/Page/Jiribyovka"> <button className="ChooseButtons__Person violet"  > Ժիրիբյովկա </button></Link>



      </div>


    </div>
  )
}
export default withRouter(Main)