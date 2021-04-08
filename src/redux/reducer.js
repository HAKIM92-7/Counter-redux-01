import {INCREMENT , DECREMENT , CHANGE_VISIBILITY} from './actions/actionsTypes'


const initialstate = {

 count : 0 ,
 isVisible : true 

}




const reducer = (state=initialstate , action) => {

switch(action.type) {

case INCREMENT : return {...state , count : state.count +1}
case DECREMENT : return {...state , count : state.count >0 ? state.count -1 : 0 }
case CHANGE_VISIBILITY : return {...state , isVisible : !state.isVisible}
default : 

return state




}


}

export default reducer