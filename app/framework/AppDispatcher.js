import {Dispatcher} from 'flux';
import ActionType from '../common/ActionType';

/**
 * 액션을 실행시키기 위한 flux dispatcher
 */
class AppDispatcher extends Dispatcher {
    constructor() {
        super(...arguments);
        this.ACTION_TYPE = ActionType; // 액션 타입 참조하도록 저장
    }

    dispatch(action = {}) {
        super.dispatch(action);
    }

    /**
     * Dispatches three actions for an async operation represented by promise.
     */
    dispatchAsync(promise, types = {}, payload = {}) {
        const {request, success, failure} = types;
        if(request){
            this.dispatch({type: request, payload: Object.assign({}, payload)});
        }
        promise.then(
            (response) => {
                this.dispatch({
                    type: success,
                    payload: Object.assign({}, payload, {response})
                })
            },
            error => this.dispatch({
                type: failure,
                payload: Object.assign({}, payload, {error})
            })
        );
    }
}

export default new AppDispatcher();