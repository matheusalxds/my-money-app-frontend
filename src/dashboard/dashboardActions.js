import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';

export const SUMMARY =  {
  BILLING_SUMMARY_FETCHED: 'BILLING_SUMMARY_FETCHED',
}

export function getSummary(){
  const request = axios.get(`${BASE_URL}/billingCycle/summary`);
  return {
    type: SUMMARY.BILLING_SUMMARY_FETCHED,
    payload: request
  }
}