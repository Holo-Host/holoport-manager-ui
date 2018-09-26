import {combineReducers} from 'redux';
import widgets from './widgets.reducer';

const analyticsDashboardAppReducers = combineReducers({
    widgets
});

export default analyticsDashboardAppReducers;