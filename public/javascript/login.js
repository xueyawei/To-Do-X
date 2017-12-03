


$("#sign-up-form").on('submit',function(evt){

    evt.preventDefault();
    
    var formNode = $(this);
    var action = $(this).attr('action');
    console.log(formNode.serializeArray());

    
    $.ajax({
        url:action,
        method: 'post',
        data: formNode.serialize(),
        success: success

    });

    

})

$('#sign-username').blur(function(evt){
    $('#username-alert-error').hide()
    var username = $(this).val();
    if(username!='' && username!=undefined){
        $('#username-icon').show();
        $.ajax({
            url: '/api/check-username?username='+username,
            method: 'get',
            success: (data)=>{
                $('#username-icon').hide();
                if(!data.isValid){
                    $('#username-alert').show();
                    $('#sign-username').removeClass('is-valid');
                }else{
                    $('#username-alert').hide();
                    $('#sign-username').addClass('is-valid');
                }
            }
        })
        
    }

});

$('#sign-password').blur(function(evt){
    var password = $(this).val();
});

function success(data){
    $('#username-alert-error').hide();
    console.log("Post Success")
    console.log(data)
    if(data.isSuccess){
        $("#sign-up-modal").modal('hide');
        $('#success-modal').modal('show');

    }else{
        if(data.isExist){
            $('#username-alert').show();
        }else{
            $('#username-alert-error').show();
        }
    }
}

$('#register').click(function(){
    $("#sign-up-form").submit();
})