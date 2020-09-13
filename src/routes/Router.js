import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import buscaCep from '../pages/BuscaCep'
import Login from '../pages/Login'

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/buscaCep" component={buscaCep}/>
                </Switch>
            </BrowserRouter>
        )
    }
}