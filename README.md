## 10. Практика. 1 часть

Структура приложения будет состоять из доменов.
Домен это папка, содержащая информацию о отдельной части приложения

Наш первый домен: _Gallery_

## 13. Практика. 4 часть
Настройка синхронизации initialState с localStorage
```javascript
const preloadedState = JSON.parse(localStorage.getItem('gallery'))

export const store = preloadedState
    ? createStore(rootReducer, preloadedState, enhancedStore)
    : createStore(rootReducer, enhancedStore);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('gallery', JSON.stringify(state))
})
```
