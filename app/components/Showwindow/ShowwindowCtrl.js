import AppDispatcher from '../../framework/AppDispatcher';
import RCU from "../../common/RCU";

class ShowwindowCtrl {
    constructor(component) {
        this.component = component;
        this.component.setKeys([RCU.KEY_LEFT, RCU.KEY_RIGHT, RCU.KEY_UP, RCU.KEY_DOWN, RCU.KEY_ENTER, RCU.KEY_1, RCU.KEY_2, RCU.KEY_BACK, RCU.KEY_EXIT]);
        this.component.setKeyCallback(this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        console.log('[Showwindow] onKeyPressed', e);
        if (e.keyCode === RCU.KEY_1) {
            AppDispatcher.dispatch({type: AppDispatcher.ACTION_TYPE.PUSH_LAYER, data: {name: 'Showwindow'}});
        } else if (e.keyCode === RCU.KEY_2) {
            AppDispatcher.dispatch({type: AppDispatcher.ACTION_TYPE.PUSH_POPUP, data: {name: 'DefaultPopup'}});
        } else if (e.keyCode === RCU.KEY_BACK) {
            AppDispatcher.dispatch({type: AppDispatcher.ACTION_TYPE.POP_POPUP});
        } else if (e.keyCode === RCU.KEY_EXIT) {
            AppDispatcher.dispatch({type: AppDispatcher.ACTION_TYPE.POP_LAYER});
        }
    }
}

export default ShowwindowCtrl;