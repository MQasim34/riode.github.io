






// close btn in nws letter
const Datafroactivenl = document.querySelector('#Data-fro-active-nl');

// main-modal
const btnforClosedata = document.querySelector('#btn-for-close-data');

const overLay = document.querySelector('#data-for-overlay');



function newsLetter() {
    btnforClosedata.addEventListener('click', function () {
        // console.log("remove news letter");
        Datafroactivenl.classList.remove('active');
    });
};
newsLetter();


// ==========> the functtion is for the close of news letter

// const newsLetter = function () { Datafroactivenl.classList.remove('active') };
// btnforClosedata.addEventListener('click', newsLetter );

//  end of news letter function <============


// ============> menu navigation starts here
const mobomenuSlide = document.querySelector('#mobo-menu-slide');

const mobomenuOpen = document.querySelector('#mobo-menu-open');
const mobomenuclose = document.querySelector('#mobo-menu-close');

function moboOpen() {
    mobomenuOpen.addEventListener('click', function () {
        // console.log('this is open mobo bar')
        if (mobomenuSlide.classList.contains('active')) {
            mobomenuSlide.classList.remove('active');
            overLay.classList.remove('active');
        } else {
            mobomenuSlide.classList.add('active');
            overLay.classList.add('active');
        }
    });
}
moboOpen();


function moboClose() {
    mobomenuclose.addEventListener('click', function () {
        // console.log('this is open mobo bar')
        if (mobomenuSlide.classList.contains('active')) {
            mobomenuSlide.classList.remove('active');
            overLay.classList.remove('active');
        } else {
            mobomenuSlide.classList.add('active');
            overLay.classList.add('active');
        }
    });
}

moboClose();


// menu navigation starts here <=========








// ========>  logreg-btn functtion
// ======>open form
const mainLogRegistration = document.querySelector('#main-logRegistration');
const openLogreg = document.querySelector('#open-logreg');
const logregBtn = document.querySelector('#logreg-btn');

// Sign-In forms show and hide functions in js 

const SignInForm = document.querySelector('#SignIn-form');
const registerForm = document.querySelector('#register-form');


const SignInformBtn = document.querySelector('#SignIn-form-btn');

function logRegistrationopenopen() {
    openLogreg.addEventListener('click', function () {
        console.log('hello');
        if (mainLogRegistration.classList.contains('active')) {
            mainLogRegistration.classList.remove('active');
            logregBtn.classList.remove('active');
            overLay.classList.remove('active');
            SignInForm.classList.remove('active');
            // registerForm.classList.remove('active');
        } else {
            mainLogRegistration.classList.add('active')
            openLogreg.classList.add('active');
            overLay.classList.add('active');
            SignInForm.classList.add('active');
            // registerForm.classList.add('active');

        }
    })
}
logRegistrationopenopen();


//=========> close form

function logRegistrationclose() {
    logregBtn.addEventListener('click', function () {
        console.log('hello');
        if (mainLogRegistration.classList.contains('active')) {
            mainLogRegistration.classList.remove('active');
            logregBtn.classList.remove('active');
            overLay.classList.remove('active');
            SignInForm.classList.remove('active');
            registerForm.classList.remove('active');


        } else {
            mainLogRegistration.classList.add('active');
            overLay.classList.add('active');
            SignInForm.classList.add('active');
            registerForm.classList.add('active');
            // openLogreg.classList.add('active');
        }
    })
}
logRegistrationclose();



// // Sign-In forms show and hide functions in js 

// const SignInForm = document.querySelector('#SignIn-form');
// const registerForm = document.querySelector('#register-form');


// const SignInformBtn = document.querySelector('#SignIn-form-btn');

function signinfun() {
    SignInformBtn.addEventListener('click', function () {
        //    console.log("this is SignIn form function") ;



        registerForm.classList.remove('active');
        SignInForm.classList.add('active');
        SignInformBtn.classList.add('active');
        registrationformBtn.classList.remove('active');


    });
};
signinfun();


const registrationformBtn = document.querySelector('#registration-form-btn');


function registrationFun() {
    registrationformBtn.addEventListener('click', function () {
        console.log('this is Registration form function');
        SignInForm.classList.remove('active');
        registerForm.classList.add('active');
        SignInformBtn.classList.remove('active');
        registrationformBtn.classList.add('active');
    });
};

registrationFun();









// for the body function

document.onclick = function (e){
    if( e.target.id == 'Data-fro-active-nl' || e.target.id == 'data-for-overlay' || e.target.id == 'main-logRegistration' ){
        overLay.classList.remove('active');
        Datafroactivenl.classList.remove('active');
        mobomenuSlide.classList.remove('active');
        mainLogRegistration.classList.remove('active');
        SignInForm.classList.remove('active');
        registerForm.classList.remove('active');
        // overLay.classList.remove('active');
    };
}