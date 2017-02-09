/**
 * 팝업 관리 클래스
 */
class PopupManager {
    setStore(store) {
        this.store = store;
    }

    updateStoreSate() {
        this.storeSate = this.store.getState();
        this.popups = this.storeSate.layers[this.storeSate.layers.length - 1].popups;
    }

    getPopup(id) {
        let popups = this.getPopupAll();
        for (let popup of popups) {
            if(popup.id === id){
                return popup;
            }
        }
    }

    getTopPopup() {
        this.updateStoreSate();
        return this.popups[this.popups.length - 1];
    }

    getPopupAll() {
        this.updateStoreSate();
        return this.popups;
    }
}

export default new PopupManager();