import React from 'react';
import Popup from '../../../framework/components/Popup';
import RCU from '../../../common/RCU';
import styles from './DefaultPopup.css';
import AppDispatcher from '../../../framework/AppDispatcher';

export default class DefaultPopup extends Popup {
    constructor() {
        super(...arguments);
        this.setKeys([RCU.KEY_LEFT, RCU.KEY_RIGHT, RCU.KEY_UP, RCU.KEY_DOWN, RCU.KEY_ENTER, RCU.KEY_1, RCU.KEY_2, RCU.KEY_BACK, RCU.KEY_EXIT]);
        this.setKeyCallback(this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        console.log('[DefaultPopup] onKeyPressed', e);
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

    render() {
        return super.render(
            <div className={styles.bg}>{this.props.id}</div>
        );
    }
}