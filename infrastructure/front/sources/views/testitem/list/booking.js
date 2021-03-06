import MenuView from "views/top";
import TestItemsView from "views/testitem/list"
import {iterationCopy} from "utils/func"
import {beta_url} from "models/beta"

export default class TestItemsBookingView extends TestItemsView{
	init(){
	    $$("mytable_ui").load(beta_url + "/testitem?type=booking")
	    $$("add_item").config.click = () => {
            this.app.show("/top/testitem.add?type=booking");
        }
	}
};