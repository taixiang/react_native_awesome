/**
 * Created by tx on 2018/9/2.
 */
import React from "react";
import { Provider } from "mobx-react";
import App from "./App";
import store from "./app/store";
import NavigationService from './app/NavigationUtil'
import AppStackNavigator from './router';


export default function setup() {
    class Root extends React.Component {
        render() {
            return (
                <Provider {...store}>
                    <AppStackNavigator
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}/>
                </Provider>
            );
        }
    }
    return Root;
}