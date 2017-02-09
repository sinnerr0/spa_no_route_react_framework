import PopupManager from '../framework/PopupManager';
import LayerManager from '../framework/LayerManager';

/**
 * 키 전파 룰 설정
 */
class KeyDownRule {
    /**
     * 키 전파 핸들러
     * @param {object} listener {id:number, listener:function}
     * @returns {boolean} 키를 전달할 지 여부
     */
    handleKeyDown(listener) {
        let propagation = false;
        if (PopupManager.getTopPopup()) { // 팝업이 있을 경우
            if (listener.id === PopupManager.getTopPopup().id) {
                propagation = true;
            }
        } else if (LayerManager.getTopLayer()) { // 레이어가 있을 경우
            if (listener.id === LayerManager.getTopLayer().id) {
                propagation = true;
            }
        }
        return propagation;
    }
}

export default new KeyDownRule();