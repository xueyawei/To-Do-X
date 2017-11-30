


$("#sign-up-form").on('submit',function(evt){

    evt.preventDefault();
    
    var formNode = $(this);
    var action = $(this).attr('action');
    console.log(formNode.serializeArray());

    
    $.ajax({
        url:action,
        method: 'post',
        data: formNode.serialize(),
        success: success,

    });

    

})

function success(data){
    console.log("Post Success")
    console.log(data)
}

$('#register').click(function(){
    console.log("Click");
    $("#sign-up-form").submit();
})