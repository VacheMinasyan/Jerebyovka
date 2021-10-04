import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "../../Cmponent/Main"
import StartPage from "../../Cmponent/StartPage"
import AddGroups from "../../Cmponent/AddGroups"
import AddPersons from "../../Cmponent/AddPersons"
import Groups from "../../conteiner/Groups"
import GroupID from "../../conteiner/GroupID"
import Jiribyovka from "../../Cmponent/JiribyovkaList"
import JiribyovkaID from "../../Cmponent/FightersList"
import JIRID from "../../Cmponent/JIRID"
const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/Page" exact>
            <Main />
          </Route>
          <Route path="/Page/AddGroups" exact>
            <AddGroups />
          </Route>
          <Route path="/Page/AddPersons" exact>
            <AddPersons />
          </Route>
          <Route path="/Page/Groups" exact>
            <Groups />
          </Route>
          <Route path="/Page/Groups/:id" exact>
            <GroupID />
          </Route>
          <Route path="/Page/Jiribyovka" exact>
            <Jiribyovka />
          </Route>
          <Route path="/FightersList/:id" exact>
            <JIRID />
          </Route>
          <Route path="/FightersList" exact>
            <JiribyovkaID />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routers