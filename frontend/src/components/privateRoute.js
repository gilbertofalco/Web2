import React from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("tokenLogin") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = {{
                        pathname: "../buscaCep",
                    }}
                    />
                )
            } 
        />
    );
};