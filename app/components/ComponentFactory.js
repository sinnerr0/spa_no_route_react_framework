import React from 'react';
import Showwindow from './Showwindow/Showwindow';
import DefaultPopup from './popup/DefaultPopup/DefaultPopup';

class ComponentFactory {
    getComponent(name, data) {
        switch (name){
            case 'Showwindow':
                return <Showwindow {...data}/>;
            case 'DefaultPopup':
                return <DefaultPopup {...data}/>;
            default:
                return <div/>;
        }
    }
}

export default new ComponentFactory();