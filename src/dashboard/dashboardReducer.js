const INITIAL_STATE = { summary : { credit: 0, debt: 0 }};

import { SUMMARY } from './dashboardActions';

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case SUMMARY.BILLING_SUMMARY_FETCHED:{
      return{
        ...state, summary: action.payload.data
      }
    }

    default:
      return state;
  }
  return state;
}