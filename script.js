//DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const feedsPage = document.querySelector('.feeds-page');
const feedsPageContent = document.querySelector('.feeds-content');
const loginWarning = document.querySelector('.login-modal');
const loginWarningX = document.querySelector('.login-modal i');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const btnLogin = document.querySelector('.login-form-btn');

const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const modalXbtn = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');

const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarwrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

/*********************************************************/
/*********************************************************/

// Main page
function goToLoginPage(){
    loginPage.style.display = 'grid';
    mainPage.style.display = 'none';
    feedsPage.style.display = 'none';
    // feedsPageContent.style.display = 'none';
};

function goToFeedsPage(){
    feedsPage.style.display = 'grid';
    // feedsPageContent.style.display = 'grid';
    loginPage.style.display = 'none';
    mainPage.style.display = 'none';  
};

function goToMainPAge() {
    feedsPage.style.display = 'none';
    // feedsPageContent.style.display = 'none';
    loginPage.style.display = 'none';
    mainPage.style.display = 'grid'; 
};

function failedLogin() {
    loginPage.style.display = 'grid';
    loginWarning.style.display = 'block';
    mainPage.style.display = 'none';
    feedsPage.style.display = 'none';
};

middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    console.log(inputUserInfo.value);

    if(inputUserInfo.value !== "" && inputPassword.value !== "") {
        goToFeedsPage();
    } else {
        failedLogin();
    }
});
loginWarningX.onclick = () => {
    loginWarning.style.display = 'none';
};
btnLogin.addEventListener('click', () => {
    const UserInfo = document.querySelector('.user-info-login');
    const PasswordInfo = document.querySelector('.password-login');

    if(UserInfo.value !== "" && PasswordInfo.value !== "") {
        goToFeedsPage();
    } else {
        failedLogin();
    }
});


/*********************************************************/
/*********************************************************/

// News feed page
// Post modal

postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

const chanegeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

modalXbtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');
    if(modalInput.value !== "") {
        modalInput.value = "";
        chanegeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress', (e) => {
    if(e.target.value !== "") {
        chanegeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e) => {
    if(e.target.value === '') {
        chanegeOpacity(0.5);
    }
});

//  Sidebar
user.addEventListener('click', ()=> {
    sidebar.classList.add('sidebar-display');
    sidebarwrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarwrapper.classList.remove('sidebar-wrapper-display');
});

// dark mode

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-mode');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map(darkElements1 => darkElements1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkElements2 => darkElements2.classList.toggle('dark-2'));
    Array.from(lightTexts).map(lightText => lightText.classList.toggle('light'));
    Array.from(borders).map(borders => borders.classList.toggle('border-color'));
});
