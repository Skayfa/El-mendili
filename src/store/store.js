import { combineReducers } from "redux"
import { createStore } from "redux"

const initState = {value: true, invisible: false, music: "STOPPED"}

export const SHOW = 'SHOW'
export const HIDE = 'HIDE'
export const DELETE = 'DELETE'
export const PLAYMUSIC = 'PLAYMUSIC'
export const STOPMUSIC = 'STOPMUSIC'

function LoaderReducer(state=initState, action){
  switch(action.type){
    case SHOW:
      return {...state, value: true, invisible: false}
    case HIDE:
      return {...state, value: false, invisible: false}
    case DELETE:
      return {...state, value: false, invisible: true}
    case PLAYMUSIC:
      return {...state, music: "PLAYING"}
    case STOPMUSIC:
      return {music, music: "STOPPED"}
    default:
      return state
  }
}


export default createStore(
  combineReducers({
    loader: LoaderReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

