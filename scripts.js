$(document).ready(function() {
    changeClasses();
    validateFields();
});

var name_input=$('#name-field');
var is_name=name_input.val();
var email_input=$('#email-field');
var is_email=email_input.val();
var password_input=$('#password-field');
var is_password=password_input.val();

function changeClasses() {
    $("#float-topline").on('click', function() {
        $('.field').removeClass('float-botline float-invis').addClass('float-topline');
    });
    $("#float-botline").on('click', function() {
        $('.field').removeClass('float-topline float-invis').addClass('float-botline');
    });
    $("#float-invis").on('click', function() {
        $('.field').removeClass('float-topline float-botline').addClass('float-invis');
    });
    $("#signupL").on('click', function() {
        $('#name').removeClass('no-show');
        $('#signupL').addClass('no-show');
        $('#loginL').removeClass('no-show');
        $('#forgot').addClass('no-show');
        $('#continue-btn').text('Signup');
    });
    $("#signupR").on('click', function() {
        $('#name').removeClass('no-show');
        $('#password').removeClass('no-show');
        $('#signupR').addClass('no-show');
        $('#loginL').removeClass('no-show');
        $('#forgot').addClass('no-show');
        $('#continue-btn').text('Signup');
    });
    $("#forgot").on('click', function() {
        $('#name').addClass('no-show');
        $('#password').addClass('no-show');
        $('#signupL').addClass('no-show');
        $('#forgot').addClass('no-show');
        $('#loginL').removeClass('no-show');
        $('#signupR').removeClass('no-show');
        $('#continue-btn').text('Send Reset Link');
    });
    $("#loginL").on('click', function() {
        $('#name').addClass('no-show');
        $('#password').removeClass('no-show');
        $('#signupL').removeClass('no-show');
        $('#loginL').addClass('no-show');
        $('#signupR').addClass('no-show');
        $('#forgot').removeClass('no-show');
        $('#continue-btn').text('Login');
    });
};

function validateFields() {
    $("#continue-btn").on('click', function() {
        if(is_name) {
            alert("Submitted");
        }
        else {
            $('#name-error').removeClass("no-show");
        }
        if(is_email) {
            alert("Submitted");
        }
        else {
            $('#email-error').removeClass("no-show");
        }
        if(is_password) {
            alert("Submitted");
        }
        else {
            $('#password-error').removeClass("no-show");
        }
    });
};
