import React from 'react';
import { HomePage } from 'pages/home-page';
import { CreateToDoPage } from 'pages/create-todo-page';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { DetailsToDoPage } from 'pages/details-todo-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create-todo" component={CreateToDoPage} />
        <Route path="/details-todo/:id" component={DetailsToDoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
