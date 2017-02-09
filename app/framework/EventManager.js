class EventManager {

    /**
     * 이벤트 매니져
     */
    constructor() {
        /**
         * @type {object} 등록된 이벤트 리스트
         */
        this.eventList = {};
        /**
         * @type {boolean} 키다운 룰에 맞는 등록된 모든 이벤트 리스트를 확인할 지 여부
         */
        this.isCheckAllCondition = false;
        this.registerKeyDown();
    }

    /**
     * 이벤트 등록
     * @param id
     * @param type
     * @param listener
     */
    addEventListener(id, type, listener) {
        this.removeEventListener(id, type);
        !this.eventList[type] && (this.eventList[type] = []);
        this.eventList[type].push({id, listener: listener});
    }

    /**
     * 이벤트 제거
     */
    removeEventListener(id, type) {
        let index = 0,
            check = this.eventList[type] && this.eventList[type].some((listener, _index) => {
                    if (id === listener.id) {
                        index = _index;
                    }
                    return id === listener.id;
                });
        check && this.eventList[type].splice(index, 1);
    }

    /**
     * keydown 이벤트 등록
     */
    registerKeyDown() {
        document.addEventListener('keydown', (e) => {
            let listeners = this.eventList['keydown'];
            if (listeners && listeners.length) {
                for (let i = listeners.length - 1; i >= 0; i--) {
                    if (this.keyDownRuleObj.handleKeyDown(listeners[i])) {
                        if (this.isCheckAllCondition) {
                            setTimeout(() => listeners[i].listener(e)); // 관련된 모든 핸들러에 이벤트 전파
                        } else {
                            listeners[i].listener(e);
                            break;
                        }
                    }
                }
            }
        });
    }

    setKeydownRule(keyDownRuleObj) {
        this.keyDownRuleObj = keyDownRuleObj;
    }
}

export default new EventManager();