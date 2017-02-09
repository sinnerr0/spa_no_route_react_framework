import React from 'react';
import Layer from '../../framework/components/Layer';
import ShowwindowCtrl from "./ShowwindowCtrl";

import styles from './Showwindow.css';

export default class Showwindow extends Layer {
    constructor() {
        super(...arguments);
        this.contoller = new ShowwindowCtrl(this);
    }

    render() {
        return super.render(
            <div className={styles.bg}>
                {this.props.id}
                {this.props.children}
            </div>
        );
    }
}