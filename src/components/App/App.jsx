import React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.styled.jsx';
import AppBar from "../AppBar";
import { Container } from "./App.styled";
import HomeView from "../../views/HomeView";
import RegisterView from "../../views/RegisterView";
import LoginView from "../../views/LoginView";
import ContactsView from "views/ContactsView";
import {authOperations} from "redux/auth";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/registration">
            <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
    </Container>
  )
}

export default App;
