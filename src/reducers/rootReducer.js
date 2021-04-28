
import { combineReducers} from 'redux';

import { authRreducer} from './authReducer';


export const rootReducer = combineReducers({

  
    auth:authRreducer
   


})