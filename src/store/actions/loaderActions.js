import { DELETE, HIDE, PLAYMUSIC, SHOW, STOPMUSIC } from "../store";


export const hideAction = ()=>({
    type: HIDE
}) 
export const showAction = ()=>({
    type: SHOW
}) 
export const destroyAction = ()=>({
    type: DELETE
}) 
export const startMusic = ()=>({
    type: PLAYMUSIC
}) 
export const stopMusic = ()=>({
    type: STOPMUSIC
}) 