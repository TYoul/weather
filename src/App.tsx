import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import WeatherPage from "./pages/weather/Weather";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/weather/:id" component={WeatherPage} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
