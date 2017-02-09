import AppDispatcher from './framework/AppDispatcher';
import TEST_API from './api/TEST_API';

/**
 * 부팅 시작
 */
class Boot {
    constructor() {
        TEST_API.getDataJson().then((res) => console.log(res));
        TEST_API.getDataText().then((res) => console.log(res));
        AppDispatcher.dispatch({type: AppDispatcher.ACTION_TYPE.PUSH_LAYER, data: {name: 'Showwindow'}}); // 시작 레이어 추가!!
    }
}

export default new Boot();