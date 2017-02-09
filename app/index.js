import LayerManager from './framework/LayerManager';
import PopupManager from './framework/PopupManager';
import EventManager from './framework/EventManager';
import KeyDownRule from './rule/KeyDownRule';
import ComponentFactory from './components/ComponentFactory';
import LayerPopupStore from './stores/LayerPopupStore';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Container} from 'flux/utils';
import Boot from './Boot';

class App extends Component {
    render() {
        let layers = LayerManager.getLayerAll().map((layer) => { // 레이어 가져옴
            let popups;
            if(layer && layer.popups && layer.popups.length){
                popups = layer.popups.map((popup) => { // 팝업 가져옴
                    return ComponentFactory.getComponent(popup.data.name, {key: popup.id, id: popup.id, isShow: popup.isShow});
                });
            }
            return ComponentFactory.getComponent(layer.data.name, {key: layer.id, id: layer.id, isShow: layer.isShow, children: popups});
        });
        return <div>{layers}</div>; // 화면에 출력
    }
}

LayerManager.setStore(LayerPopupStore);
PopupManager.setStore(LayerPopupStore);
EventManager.setKeydownRule(KeyDownRule);

App.getStores = () => ([
    LayerPopupStore
]); // Store객체 등록(앱에서 추가적으로 Store 등록 가능)
App.calculateState = (prevState) => ({
    LayerPopupStore: LayerPopupStore.getState()
}); // FluxContainer의 Reduce에서 prevState를 가져오기 위한 현재 State전달(앱에서 추가적인 Store 등록 시 추가)
const AppContainer = Container.create(App); // flux Container에 해당 앱 전달
render(<AppContainer />, document.getElementById('root')); // 앱 화면에 render 시작