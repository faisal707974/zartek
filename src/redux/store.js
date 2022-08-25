import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartCountReducer, productCountReducer } from './reducers/reducer'


const reducer = combineReducers({
    Cart: cartCountReducer,
    ProductsCount: productCountReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;