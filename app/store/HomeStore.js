/**
 * Created by tx on 2018/9/2.
 */
import {observable, action} from "mobx";

class HomeStore {
    @observable text;
    @observable num;
    @observable userInfo;


    constructor(){
        this.text = "1111"
        this.num = 0
        // this.userInfo = "77777"
    }

    @action
    plus=()=>{
        this.num+=1
    }

    @action
    minus=()=>{
        this.num-=1
    }

    @action
    getListData = () => {
        fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
            .then(
                action("fetchRes", res => {
                    console.log(res)
                    return res.json();
                })
            )
            .then(
                action("fetchSuccess", data => {
                    return (this.userInfo = data);
                })
            )
            .catch(
                action("fetchError", e => {
                    console.log(e.message);
                })
            );
    };

}
const homeStore = new HomeStore();
export { homeStore }