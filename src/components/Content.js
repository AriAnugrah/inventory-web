import React from 'react'
import routes from "../configs/routes";
import {Route, Switch} from "react-router-dom";

export default function Content(){
    return(
        <div>
            <div className="content-wrapper">
                <Switch>
                    {
                        routes.map((e, i) => {
                            return (
                                <Route exact={e.exact} key={i} path={e.path}>
                                    {e.component}
                                </Route>
                            )
                        })
                    }

                </Switch>
            </div>
        </div>
    )
}