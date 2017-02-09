import EventManager from './EventManager';

export default class KeyEvent {
    /**
     * 키 이벤트
     */
    constructor() {
        this.keys = [];
    }

    /**
     * @returns {number}
     */
    getId() {
        return this.id;
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     * @returns {Array} keys
     */
    getKeys() {
        return this.keys;
    }

    /**
     * @param {Array} keys
     */
    setKeys(keys) {
        this.keys = keys;
    }

    /**
     * @param {function} callback
     */
    setCallback(callback) {
        this.callback = callback;
    }

    addEventListener() {
        EventManager.addEventListener(this.id, 'keydown', (e) => {
            if (this.keys.includes(e.keyCode)) {
                this.callback && this.callback(e);
            }
        });
    }

    /**
     * 등록된 이벤트 제거
     */
    removeEventListener() {
        EventManager.removeEventListener(this.id, 'keydown');
    }
}