import { Link, Route, Router, Switch, useRouteMatch } from "react-router-dom";
import MyFirstSubPage from "./pages/my-sub-page";


function MyFirstPage () {
  let match = useRouteMatch();
  return (
    <div>
      <h1>Mi Primera Página</h1>
      <p>Esta sería un párrafo de mi primera página</p>
      <Link to={`${match.url}/my-first-subpage`}>Ir a una subpágina</Link>
      <Switch>
        <Route path={`${match.path}/my-first-subpage`}>
          <MyFirstSubPage></MyFirstSubPage>
        </Route>
        <Route exact path={`${match.path}`}></Route>
        <Route path="*">
          <p>No se ha encontrado lo que pides dentro de tu subpagin</p>
        </Route>
      </Switch>
    </div>
  );
};

/**
 * const MyFirstPage = (props) => <h1>{prop.name}</h1>
 */

export default MyFirstPage;
