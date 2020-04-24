import {createSelector} from 'reselect';

const getFriendsDataSelector = (state) => {
    return state.friendsPage.friendsData;
}

export const getFriendsData = createSelector(getFriendsDataSelector, (friends) => {
    return friends; //сделан для примера рыботы реселекторов
})

export const getTotalCount = (state) => {
    return state.friendsPage.totalCount;
}

export const getPageSize = (state) => {
    return state.friendsPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
}

export const getIsLoading = (state) => {
    return state.friendsPage.isLoading;
}

export const getFollowingIsProgress = (state) => {
    return state.friendsPage.followingIsProgress;
}