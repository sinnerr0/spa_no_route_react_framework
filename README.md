## 이 프로젝트는 SPA(Single page application)를 만들기 위한 boilerplate 프로젝트 이다.

[Redux 버전으로 변경한 boilerplate Project](https://github.com/sinnerr0/spa_no_route_react_framework_with_redux)

---

앱의 전체적인 구조는 아래와 같다.

app  
├─api (Network ineterface module)  
├─common (Defined flux action types and constants module)  
├─component (React components)  
│  └─ComponentFactory.js  
├─data (Something like immutable data)  
├─framework  
│  ├─components (Inherited basic react component)  
│  │  ├Layer.js  
│  │  └Popup.js  
│  ├─AppDispatcher.js (React AppDispatcher)  
│  ├─EventManager.js (User interface event manager)  
│  ├─fetch.js (Interface for fetching resources (including across the network).)  
│  ├─KeyEvent.js  
│  ├─LayerManager.js (Manage layer and have layer data)  
│  └─PopupManager.js (Manage popup and have popup data)  
├─rule  
│  └─KeyDownRule.js (Rules on how to send key events)  
├─stores  
│  └─LayerPopupStore.js (Rules on how to manage layer and popup)  
├─Boot.js (Initialization to configure your app)  
├─index.html  
└─index.js (Bootstrap and overall app structure)  

---

### 앱 구조 및 룰
* 앱은 Layer와 Popup으로 이루어 졌다.
* Layer는 하나의 화면 단위이다.
* Popop은 Layer위에 올라가며, Layer의 속성을 물려받는다.
* 키 이벤트는 최상위 React Component(Layer or Popup)로 전달된다.
