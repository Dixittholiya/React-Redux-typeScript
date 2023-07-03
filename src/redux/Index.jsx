import { createStore,applyMiddleware } from 'redux'
import rootreducers from './reducers/Index'
// console.log(logger)
import logger from 'redux-logger'
//

// redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
const persistConfig = {
    key: 'root',
    storage,
  }
//

const persistedReducer = persistReducer(persistConfig, rootreducers)

const store = createStore(persistedReducer, applyMiddleware(logger))
export let persistor = persistStore(store)
// const store = createStore(
//     rootreducers
// )
export default store