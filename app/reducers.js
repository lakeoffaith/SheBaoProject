import {combineReducers} from 'redux-immutable';
import globalNavigation from './components/GlobalNavigation/reducer';
const applicationReducers={
  globalNavigation
};
export default function createReducer(){
  return combineReducers(applicationReducers);
}
