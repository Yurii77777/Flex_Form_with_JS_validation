'use strict';

let isUserName;
let isUserSurname;
let isUserEmail;
let isUserPassword;

const userName = document.getElementById('user_name');

userName.addEventListener('blur', function(event) {
    const USER_NAME_REGEX = /^[A-ZА-Яa-zа-я]+$/;
    let errorMessageUserName = document.querySelectorAll('.user_name_error');
    let errorInputUserName = document.querySelectorAll('.user_name');
    let userNameLabel = document.querySelectorAll('.label_user_name');

        if (userName.value.length < 2 || !userName.value.match(USER_NAME_REGEX)) {
            errorMessageUserName[0].className = 'user_name_error active';
            errorInputUserName[0].className = 'user_name active';
            isUserName = false;
            
        } else {
            errorMessageUserName[0].className = 'user_name_error';
            errorInputUserName[0].className = 'user_name';
            isUserName = true;
        }
        
        if (userName.value.length > 0) {
            userNameLabel[0].className = 'label_user_name active';
            
        } else {
            userNameLabel[0].className = 'label_user_name';
        }
    
})

const userSurname = document.getElementById('user_surname');

userSurname.addEventListener('blur', function(event) {
    const USER_SURNAME_REGEX = /^[A-ZА-Яa-zа-я]+$/;
    let errorMessageUserSurname = document.querySelectorAll('.user_surname_error');
    let errorInputUserSurname = document.querySelectorAll('.user_surname');
    let userSurnameLabel = document.querySelectorAll('.label_user_surname');
    
    if (userSurname.value.length < 2 || !userSurname.value.match(USER_SURNAME_REGEX)) {
        errorMessageUserSurname[0].className = 'user_surname_error active';
        errorInputUserSurname[0].className = 'user_surname active';
        isUserSurname = false;
        
    } else {
        errorMessageUserSurname[0].className = 'user_surname_error';
        errorInputUserSurname[0].className = 'user_surname';
        isUserSurname = true;
    }
    
    if (userSurname.value.length > 0) {
        userSurnameLabel[0].className = 'label_user_surname active';
        
    } else {
        userSurnameLabel[0].className = 'label_user_surname';
    }
    
})

const userEmail = document.getElementById('user_email');

userEmail.addEventListener('blur', function(event) {
    const USER_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errorMessageUserEmail = document.querySelectorAll('.user_email_error');
    let errorInputUserEmail = document.querySelectorAll('.user_email');
    let userEmailLabel = document.querySelectorAll('.label_user_email');
    
    if (!userEmail.value.match(USER_EMAIL_REGEX)) {
        errorMessageUserEmail[0].className = 'user_email_error active';
        errorInputUserEmail[0].className = 'user_email active';
        isUserEmail = false;
        
    } else {
        errorMessageUserEmail[0].className = 'user_email_error';
        errorInputUserEmail[0].className = 'user_email';
        isUserEmail = true;
    }
    
    if (userEmail.value.length > 0) {
        userEmailLabel[0].className = 'label_user_email active';
        
    } else {
        userEmailLabel[0].className = 'label_user_email';
    }
    
})

const userPassword = document.getElementById('user_password');

userPassword.addEventListener('blur', function(event) {
    let errorMessageUserPassword = document.querySelectorAll('.user_password_error');
    let errorInputUserPassword = document.querySelectorAll('.user_password');
    let userPasswordLabel = document.querySelectorAll('.label_user_password');
    
    if (userPassword.value.length < 6) {
        errorMessageUserPassword[0].className = 'user_password_error active';
        errorInputUserPassword[0].className = 'user_password active';
        isUserPassword = false;
        
    } else {
        errorMessageUserPassword[0].className = 'user_password_error';
        errorInputUserPassword[0].className = 'user_password';
    }

    if (userPassword.value.length > 0) {
        userPasswordLabel[0].className = 'label_user_password active';
        
    } else {
        userPasswordLabel[0].className = 'label_user_password';
    }
    
})

const userPswrdConfirm = document.getElementById('user_password-confirm');

userPswrdConfirm.addEventListener('blur', function(event) {
    let errorMessageUserPswrdConfirm = document.querySelectorAll('.user_password-confirm_error');
    let errorInputUserPswrdConfirm = document.querySelectorAll('.user_password-confirm');
    let userPswrdConfirmLabel = document.querySelectorAll('.label_user_password-confirm');
    
    if (userPassword.value !== userPswrdConfirm.value) {
        errorMessageUserPswrdConfirm[0].className = 'user_password-confirm_error active';
        errorInputUserPswrdConfirm[0].className = 'user_password-confirm active';
        isUserPassword = false;
        
    } else {
        errorMessageUserPswrdConfirm[0].className = 'user_password-confirm_error';
        errorInputUserPswrdConfirm[0].className = 'user_password-confirm';
        isUserPassword = true;
    }

    if (userPswrdConfirm.value.length > 0) {
        userPswrdConfirmLabel[0].className = 'label_user_password-confirm active';

    } else {
        userPswrdConfirmLabel[0].className = 'label_user_password-confirm';
    }
    
})

function submitForm() {

    if (isUserName === true && isUserSurname === true && isUserEmail === true && isUserPassword === true) {
        let registerForm = document.forms['registration__form'];
    
        registerForm.submit();
        console.log("It's ok!")

    } else {
        return console.log('Somthing wrong!')
    }

}
