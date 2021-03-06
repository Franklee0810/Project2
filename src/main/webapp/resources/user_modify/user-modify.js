/* Variable */ 
var loginBtn = document.querySelector('.login-btn');
var loginClose = document.querySelector('.login-close'); 
var showIogin = document.querySelector('.login-black-background');

var userBtn = document.querySelector('.main-user-btn'); 
var userInterface = document.querySelector('.user-interface'); 

var userAlramBtn = document.querySelector('.main-user-alram'); 
var userAlram = document.querySelector('.user-alram'); 

var joinStudyBtn = document.querySelector('.join-study-btn');
var joinStudyList = document.querySelector('.join-study-list');  

var footer = document.querySelector('.footer'); 


/* Login */
if(loginBtn != null){
    loginBtn.addEventListener('click', function() {
        showIogin.style.display = 'block';
    })
}

loginClose.addEventListener('click', function() {
    showIogin.style.display = 'none';
})

showIogin.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) { 
        showIogin.style.display = 'none';
    }
 })


 /* Modal Popup */
 userBtn.addEventListener('mouseenter', function() {
    userInterface.style.display = 'block';
})

userInterface.addEventListener('mouseleave', function() {
    userInterface.style.display = 'none';
 })

 userAlramBtn.addEventListener('click', function() {
    userAlram.style.display = 'block';
})

userAlram.addEventListener('mouseleave', function() {
    userAlram.style.display = 'none';
 })

 joinStudyBtn.addEventListener('mouseenter', function() {
    joinStudyList.style.display = 'block';
})

joinStudyList.addEventListener('mouseleave', function() {
    joinStudyList.style.display = 'none';
 })


// User Modify Section 

// Variable
let form = document.member;

let errorNick = document.querySelector('.error_nick');
let nickCheckBtn = document.querySelector('.check-nick-btn');
let errorPassword = document.querySelector('.error_password');
let errorPassword1 = document.querySelector('.error_password1');
let errorEmail = document.querySelector('.error_email');
let errorAge = document.querySelector('.error_age');
let errorGender = document.querySelector('.error_gender');

let userImageBtn = document.querySelector('.uploadimage');

// Nickname Check

form.nickname.addEventListener('focus', (e)=> {
    if (form.nickname.value == '') {
        form.nickname.focus();
        errorNick.innerHTML = '* ???????????? ?????? ????????????';
        e.preventDefault;
    } 
});

form.nickname.addEventListener('change', (e)=> {
    if (form.nickname.value.length >= 2 && form.nickname.value.length <= 8) {
        form.name.focus();
        errorNick.innerHTML = '* ?????? ????????? ????????????';
        $("#reg_submit").attr("disabled",true);
    } else {
        form.nickname.focus();
        errorNick.innerHTML = '* ???????????? 2?????? ?????? 8?????? ?????? ?????? ????????????';
        e.preventDefault;
    }
});

$('#nicknameCheck').click(function () {
    $.ajax({
        url: '/nicknameCheck.me?nickname=' + form.nickname.value,
        type : 'POST',
        success : function (data) {
            if(data == "N"){
                errorNick.innerHTML = '* ???????????? ??????????????????';
                $("#reg_submit").attr("disabled",true);
            }else {
                errorNick.innerHTML = '* ?????? ????????? ??????????????????';
                $("#reg_submit").attr("disabled",false);
            }
        }, error : function () {
            errorNick.innerHTML = '* ???????????? ???????????? ????????? ??????????????????';
            $("#reg_submit").attr("disabled",false);
        }
    });
});

// Password Check

form.password.addEventListener('focus', (e)=> {
    if (form.password.value == '') {
        form.password.focus();
        errorPassword.innerHTML = '* ??????????????? ?????? ????????????';
        e.preventDefault;
    } 
});

form.password.addEventListener('change', (e)=> {
    if (form.password.value.length >= 6 && form.password.value.length <= 12) {
        form.password1.focus();
        errorPassword.innerHTML = '';
    } else {
        form.password.focus(e);
        errorPassword.innerHTML = '* ??????????????? 6?????? ?????? 12?????? ????????? ?????? ????????????';
        e.preventDefault;
    }
});

// Password Recheck 

form.password1.addEventListener('focus', (e)=> {
    if (form.password1.value == '') {
        form.password1.focus();
        errorPassword1.innerHTML = '* ??????????????? ?????? ?????? ????????????';
        e.preventDefault;
    }
});

form.password1.addEventListener('change', (e)=> {
    if (form.password.value == form.password1.value) {
        form.email.focus();
        errorPassword1.innerHTML = '';
    } else {
        form.password1.focus();
        errorPassword1.innerHTML = '* ??????????????? ???????????? ????????????';
        e.preventDefault;
    }
});

// Email Check

form.email.addEventListener('focus', (e)=> {
    if (form.email.value == '') {
        form.email.focus();
        errorEmail.innerHTML = '* ???????????? ?????? ????????????';
        e.preventDefault;
    }
});

form.email.addEventListener('change', (e)=> {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (form.email.value.match(regExp) != null) {
        form.age.focus();
        errorEmail.innerHTML = '';
    } else {
        form.email.focus();
        errorEmail.innerHTML = '* ???????????? ????????? ???????????? ?????? ????????????';
        e.preventDefault;
    }
});

// Age Check

form.age.addEventListener('focus', (e)=> {
    if (form.age.value == null) {
        form.age.focus();
        errorAge.innerHTML = '* ????????? ?????? ????????????';
        e.preventDefault;
    }
});

form.age.addEventListener('change', (e)=> {
    if (form.age.value >= 1) {
        form.gender.focus();
        errorAge.innerHTML = '';
    } else {
        form.age.focus();
        errorAge.innerHTML = '* ????????? ???????????? ?????? ????????????';
        e.preventDefault;
    }
});

// Gender Check 

form.gender.addEventListener('focus', ()=> {
    if (form.gender.value == null) {
        form.gender.focus();
        errorGender.innerHTML = '* ????????? ?????? ????????????';
        event.preventDefault;
    }
});

// User Delete Check 

let userDeleteBtn = document.querySelector('.user-delete-btn');

userDeleteBtn.addEventListener('click', () => {
    let confirmMsg = confirm('?????? ????????? ???????????????????');

    if (confirmMsg == true) {
       location.href = '';
    } else {
        return false;
    }
    
});


// User Profile 

userImageBtn.addEventListener('change', (event) => {
    const reader = new FileReader();

    reader.onload = function(event) { 
        
        let userImgPreview = document.querySelector('.user-image-preview');

        userImgPreview.src = event.target.result;
    }
        reader.readAsDataURL(userImageBtn.files[0]);
 });


  /* footer Event */
  window.addEventListener('scroll', ()=> {
    let scrollLocation = document.documentElement.scrollTop; // ?????? ???????????? ??????
	let windowHeight = window.innerHeight; // ????????? ???
    let fullHeight = document.body.scrollHeight; //  margin ?????? ?????? ?????? ??????
    
    if (scrollLocation + windowHeight >= fullHeight) {
        footer.style.display = 'block';
	} else {
        footer.style.display = 'none';
    }
 })