import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importación de los componentes
import Cover from "./components/cover/Cover";
import Budines from "./components/budines/Budines";

// Importación de la página de error de rutacion
import NotFound from "./components/NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Cover} />
      <Route path="/budines" component={Budines} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
