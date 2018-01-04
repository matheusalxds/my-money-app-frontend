export function selectTab(tabId) {
  return{
    type: 'TAB_SELECTED',
    payload: tabId
  }
}


// showTabs('tabList', 'tabCreate');
// with Spread operator, will generate an array
export function showTabs(...tabIds){
  const tabsToShow = {};
  tabIds.forEach(e => tabsToShow[e] = true);
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}