import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyFirstPage from "./pages/my-first-page";
import MySecondPage from "./pages/my-second-page";
import Header from "./components/header";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import { HelloContextProvider, HelloContext } from "./hello-context/";
import HelloComponent from "./components/hello-component";
import { AuthProvider } from "./authentication";

import HelloState from './components/hello-state';

function App() {
  // Esto es una aplicación react === sitio web

  return <HelloState></HelloState>
  // return (
  //   <AuthProvider>
  //     <Router>
  //       <Header>
  //         <div>
  //           <h1>Hola</h1>
  //         </div>
  //       </Header>

  //       <Header>
  //         <p>Adios</p>
  //       </Header>

  //       <HelloContextProvider>
  //         <HelloComponent></HelloComponent>
  //       </HelloContextProvider>

  //       <HelloContext.Provider
  //         value={() =>
  //           "Esto es otro contexto con otro valor diferente en arrow function"
  //         }
  //       >
  //         <HelloComponent></HelloComponent>
  //       </HelloContext.Provider>

  //       <div className="icon__container">
  //         <CheckCircleOutlineOutlined className="mi_check" />
  //         <p>Hola soy un texto</p>
  //       </div>

  //       {/* LA DEFINICION DE LAS RUTAS
      
  //       http(s)://<ip>:<puerto>/<path_primer_nivel>/<path_segundo_nivel>
  //     */}
  //       <Switch>
  //         <Route path="/my-first-page">
  //           {" "}
  //           {/* Pagina My First */}
  //           <MyFirstPage></MyFirstPage>
  //         </Route>
  //         <Route path="/my-second-page">
  //           {" "}
  //           {/* Pagina My Second */}
  //           <MySecondPage></MySecondPage>
  //         </Route>
  //         <Route exact path="/">
  //           {" "}
  //           {/* Pagina Home*/}
  //           <p>Esta es mi página Home</p>
  //         </Route>
  //         <Route path="*">
  //           <p>No se ha encontrado lo que pides</p>
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </AuthProvider>
  // );
}

export default App;
