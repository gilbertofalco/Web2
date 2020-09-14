import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import buscaCep from '../pages/BuscaCep'
import Login from '../pages/Login'

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Web2" component={Login}/>
                    <Route path="/Web2/buscaCep" component={buscaCep}/>
                </Switch>
            </BrowserRouter>
        )
    }
}