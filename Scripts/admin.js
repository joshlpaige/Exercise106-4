var serverURL = "http://restclass.azurewebsites.net/API/";

function saveItem(){
    var code = $("#txtCode").val();
    $("#txtCode").val("");

    var description = $("#txtDescription").val();
    $("#txtDescription").val("");

    var price = $("#txtPrice").val();
    $("#txtPrice").val("");

    var image = $("#txtImage").val();
    $("#txtImage").val("");

    var category = $("#txtCategory").val();
    $("#txtCategory").val("");

    var stock = $("#txtStock").val();
    $("#txtStock").val("");

    var deliveryDays = $("#txtDeliveryDays").val();
    $("#txtDeliveryDays").val("");

    // HOMEWORK:
    // read the values from the rest of the input fields

    // create an object
    // HOW TO CREATE OBJECTS IN JS, using object constructor
    // Object Literal

    // send the object to the server
    $.ajax({

    });

}

function testAjax(){

    // Async
    // JavaScript
    // And
    // XML com JSON


    $.ajax({
        url: serverURL + "test",
        type: 'Get',
        success: function(res){
            console.log("Payment accepted")
            console.log("Server says", res);
        },
        error: function (err){
            console.log("Comm finished")
            console.log("Error ocurred", err);
        }

    });

};




function init(){
    // console.log("This is the Admin page!!");


    $("#btnSave").click(saveItem);

    $("#txtCode").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtDescription").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtPrice").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtImage").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtCategory").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtStock").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtDeliveryDays").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })
    
}



window.onload = init;
