import AppDispatcher from '../framework/AppDispatcher';
import ActionType from '../common/ActionType';
import {ReduceStore} from 'flux/utils';
import update from 'immutability-helper'; // Note: update is a legacy react-addons-update. Use kolodny/immutability-helper instead.(https://github.com/kolodny/immutability-helper)
/*
 immutability-helper usage:
 Available Commands
 {$push: array} push() all the items in array on the target.
 {$unshift: array} unshift() all the items in array on the target.
 {$splice: array of arrays} for each item in arrays call splice() on the target with the parameters provided by the item.
 {$set: any} replace the target entirely.
 {$merge: object} merge the keys of object with the target.
 {$apply: function} passes in the current value to the function and updates it with the new returned value.
 */

/**
 * 앱 디폴트 스토어
 * 레이어 및 팝업의 스택 관리를 한다.
 */
class LayerPopupStore extends ReduceStore {
    getInitialState() {
        this.uniqueId = 0;
        return {
            layers: []
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionType.PUSH_LAYER:
                let newState = update(state, {
                    layers: {
                        $push: [{
                            id: this.uniqueId++,
                            data: action.data,
                            isShow: true,
                            popups: []
                        }]
                    }
                });
                if (newState.layers.length > 1) {
                    newState.layers[newState.layers.length - 2].isShow = false;
                }
                return newState;
            case ActionType.POP_LAYER:
                if (state.layers.length - 1) {
                    let newState = update(state, {
                        layers: {
                            $splice: [[state.layers.length - 1, 1]]
                        }
                    });
                    newState.layers[newState.layers.length - 1].isShow = true;
                    return newState;
                } else {
                    return state;
                }
            case ActionType.PUSH_POPUP:
                return update(state, {
                    layers: {
                        [state.layers.length - 1]: {
                            popups: {
                                $push: [{
                                    id: this.uniqueId++,
                                    data: action.data,
                                    isShow: true
                                }]
                            }
                        }
                    }
                });
            case ActionType.POP_POPUP:
                return update(state, {
                    layers: {
                        [state.layers.length - 1]: {
                            popups: {
                                $splice: [[state.layers[state.layers.length - 1].popups.length - 1, 1]]
                            }
                        }
                    }
                });
            default:
                return state;
        }
    }
}
export default new LayerPopupStore(AppDispatcher);
