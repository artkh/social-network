export const getProfileData = (state) => {
  return state.profilePage.profileData;
}

export const getTextStatus = (state) => {
  return state.profilePage.textStatus;
}

export const getAuthUserId = (state) => {
  return state.auth.userId;
}

export const getErrorProfileForm = (state) => {
  return state.profilePage.errorProfileForm;
}