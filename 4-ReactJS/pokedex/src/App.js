import "./App.css";
import Header from "./components/header";
import PokemonList from "./pages/pokemon-list-function";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PokemonDetail from "./pages/pokemon-detail-function";
import DemoColorCounter from './components/demo-counter';
import MyComponent from './components/demo-diego';
import DemoCityFetch from "./components/demo-city-fetch";

function App() {

  
  return (
    <div className="App">
      <DemoCityFetch></DemoCityFetch>
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Header></Header>
    //     <DemoColorCounter></DemoColorCounter>
    //     <MyComponent></MyComponent>

    //     <Switch>
    //       <Route
    //         path="/pokemon-list/:name"
    //         render={(props) => <PokemonDetail {...props} />}
    //       />
    //       <Route
    //         path="/pokemon-list"
    //         render={(props) => <PokemonList {...props} />}
    //       />

    //       {/* <Route path="/">
    //         <Redirect to="/pokemon-list"></Redirect>
    //       </Route> */}
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
