import { createStore, combineReducers } from 'redux'
import ThemeReducer from './reducers/ThemeReducer'
import GameConfigReducer from './reducers/GameConfigReducer'
import NameReducer from './reducers/NameReducer'

const Store = combineReducers({
  Theme: ThemeReducer,
  GameConfig: GameConfigReducer,
  Name: NameReducer,
})

export default createStore(Store)
