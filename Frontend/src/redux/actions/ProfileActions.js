
import {LoadProfile} from '../../services/ProfileServices';
import * as ActionTypes from '../ActionTypes';


export const LoadProfileAction = () => {
    return (dispatch) => {
        

        LoadProfile().then((res) => {
             debugger
            if(res.length){
                
                dispatch({type: ActionTypes.LOAD_PROFILE_SUCCESS,res});
            }
            
        }, error => {
            dispatch({type : ActionTypes.CODE_ERROR, error})
        })
    }
}
