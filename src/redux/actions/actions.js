import {INCREMENT , DECREMENT , CHANGE_VISIBILITY} from './actionsTypes'




export const increment = () => {


return {type:INCREMENT}


}


export const decrement =() => {

return {type : DECREMENT}



}


export const changeVisibility =() => {

return {

    type: CHANGE_VISIBILITY


}



}