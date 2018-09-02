/**
 * Created by tx on 2018/9/2.
 */
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'
import app from "./App"
import home from "./app/page/Home"


const AppNavigator = createStackNavigator({
    app: {screen: app},
    home: {screen: home},

}, {
    navigationOptions: {
        headerBackTitle: '返回',
        headerTintColor: "#ff0000",
        headerBackTitleStyle: {
            color: "#ff0000"
        },
        headerTitleStyle: {
            color: "#ff0000"
        },
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
})


export default AppNavigator;

