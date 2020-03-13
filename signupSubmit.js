$(document).ready(function () {

    var signupForm = $('#signupForm');
    signupForm.validate({
        rules:
            {
                name: {
                    required: true,
                    minlength: 3,
                    maxlength: 100
                },

                email: {
                    required: true,
                    email: true
                },

                password:{
                    required: true,
                    minlength: 6
                },
                cpassword:{
                    required: true,
                    equalTo: '#password'
                }
            },
        messages:
            {
                name:{
                    required: "please provide your full name",
                    minlength: "name should be at least 5  characters",
                    maxlength: "name should be at most 100 characters"
                },
                email:{
                    required: "please provide your email",
                    email : "Please enter a valid email"
                },
                password:{
                    required: "please enter your password",
                    minlength: "password should be at least 8 characters"
                },
                cpassword:{
                    required: "please confirm your password",
                    equalTo: "password do not match"
                }
            },
        submitHandler: submitDetails
    });
    function submitDetails () {
        var errorDiv = $('#formerror');
        var button = $('#submitDetails');
        var buttonHtml = '<span class="fa fa-send-o"></span> &nbsp; submit';
        var data = signupForm.serialize();
        //alert(formData);
        $.ajax({
            type:'get',
            url: 'submitRegistration.php',
            data: data,
            beforeSend: function () {
                errorDiv.fadeOut(800);
                button.html('<span class="fa fa-spin fa-spinner"></span> submitting...').attr('disabled','disabled');
            },
            success :  function(data) {
                if(data=="inserted") {
                    //show signUpError div after 1 second
                    errorDiv.fadeIn(1000, function(){
                        //shows the user a success message
                        errorDiv.html('<div class="alert alert-success"><span class="glyphicon glyphicon-ok"></span> Info added successfully. Please Login...</div>');
                        //changes the content of the signUpButton to the original content
                        button.html(buttonHtml).removeAttr('disabled');
                        window.setTimeout(function(){
                            window.location.href='login.html';
                        },1000)
                    });
                }

                else if(data=='notInserted'){

                    errorDiv.fadeIn(1000, function(){

                        errorDiv.html('<div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span> &nbsp; Could not insert data, please try again later!</div>');

                        button.html(buttonHtml).removeAttr('disabled');

                    });

                }

                else if(data=='exist'){

                    errorDiv.fadeIn(1000, function(){

                        errorDiv.html('<div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span> &nbsp; Username is linked to an account!</div>');

                        button.html(buttonHtml).removeAttr('disabled');

                    });

                }

                else if(data=='notSame'){

                    errorDiv.fadeIn(1000, function(){

                        errorDiv.html('<div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span> &nbsp; Passwords do not match</div>');

                        button.html(buttonHtml).removeAttr('disabled');

                    });

                }

                else if(data=='noData'){

                    errorDiv.fadeIn(1000, function(){

                        errorDiv.html('<div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span> &nbsp; Input all fields of the form</div>');

                        button.html(buttonHtml).removeAttr('disabled');

                    });

                }

                else{

                    errorDiv.fadeIn(1000, function(){

                        errorDiv.html('<div class="alert alert-danger"><span class="fa fa-exclamation-triangle"></span> &nbsp; Oops an error occurred. Please try again later</div>');

                        button.html(buttonHtml).removeAttr('disabled');

                    });

                }
            },
            error: function (e) {
                alert(e+' please check your internet connection');
                window.setTimeout(function(){
                    window.location.href='signup.html';
                },1000)
            }
        });

        return false;
    }

})
