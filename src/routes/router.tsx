import { CreateToDoPage } from 'pages/create-todo-page';
import { DetailsToDoPage } from 'pages/details-todo-page';
import { HomePage } from 'pages/home-page';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routers() {
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
