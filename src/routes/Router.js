import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PrivateRouter } from '../components/privateRoute';
import buscaCep from '../pages/BuscaCep'
import Login from '../pages/Login'

export default class Router extends Component{

    render(){
        console.log(localStorage.getItem('tokenLogin'))
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRouter 
                        exact
                        path="/buscaCep" 
                        component={buscaCep}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}