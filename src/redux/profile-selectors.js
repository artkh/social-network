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

window.addEventListener('DOMContentLoaded', function () {

  let textCroppingArticleBlockTitle = function() {

    let elem = document.querySelectorAll('.more-articles-in-title');
    let text = elem.innerHTML;
    let size = 45;
    let croppingTo = 43;

    for (let i = 0; i < elem.length; i++) {
      if (elem[i].innerHTML.length > size) {
        text = elem[i].innerHTML.substr(0, croppingTo);
        elem[i].innerHTML = text + '...';
      } else {
        text = elem[i].innerHTML;
      }
    }
  }

  textCroppingArticleBlockTitle();

  let textCroppingArticleBlockDescription = function () {

    let elem = document.querySelectorAll('.more-articles-in-info');
    let text = elem.innerHTML;
    let size = 90;
    let croppingTo = 88;

    if (document.documentElement.clientWidth < 980 && document.documentElement.clientWidth > 480) {
      size = 50;
      croppingTo = 48;
    } else if (document.documentElement.clientWidth < 480 && document.documentElement.clientWidth > 350) {
      size = 80;
      croppingTo = 78;
    }

    for (let i = 0; i < elem.length; i++) {
      if (elem[i].innerHTML.length > size) {
        text = elem[i].innerHTML.substr(0, croppingTo);
        elem[i].innerHTML = text + '...';
      } else {
        text = elem[i].innerHTML;
      }
    }
  }

  textCroppingArticleBlockDescription();

})