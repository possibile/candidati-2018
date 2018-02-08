// libreria per viva backend

//**********************************************************************
function rest(endpoint, data, successCallback, errorCallback, completeCallback)
        {

        var toPost = 
                {
                version : "1.2.3", 
                time	: "2016-07-22 16:52:34",
                session_token: $("#session_token").val(),
                data	: data
                };
        console.log(toPost);
        $.ajax
                (
                        {
                        url		: "" + viva_url + "backend/" + endpoint + ".php",
                        type		: 'POST',
                        dataType	: 'json',
                        data		: {payload: JSON.stringify(toPost)},
                        success		: successCallback,
                        error		: errorCallback,
                        complete        : completeCallback,
                        timeout		: 20000
                        }
                );
        }

//**********************************************************************
function sonoAndatoBene(response, textStatus, jqXHR)
        {
        var stringifiedresponse = JSON.stringify(response, null, 4);
        if (response.status){
                //alert("errore applicativo! risposta del server\n\n" + stringifiedresponse);
                console.log("errore applicativo! risposta del server\n\n" + stringifiedresponse);
                alert("ATTENZIONE! Il tuo modulo non è stato inviato correttamente. Il server sempra non rispondere. Se il problema persiste segnalo a ufficiotecnico@possibile.com");

                }
        else{
                if (response[0].status == 16 ) {//"VIVA_STATUS_INVALID_CAPTCHA
                        console.log("Risposta del server: " + stringifiedresponse);
                        alert("CAPTCHA non valido, riprova \n");
                        loadForm();
                        document.getElementById("captcha_value").value = "";
                        document.getElementById("captcha_value").focus();
                        exit() ;
                        }
                else {
                        alert("Grazie di aver effettuato la registrazione.\n\nTi abbiamo inviato una email di conferma!");
                        console.log("Risposta del server: " + stringifiedresponse);
                        console.log("textStatus: " + textStatus);

                        //$('#formtest').data('bootstrapValidator').resetForm();
                        //$('#formtest')[0].reset();
                        //loadForm();
                        }
                }
        }

//**********************************************************************
function sonoAndatoMale(jqXHR, textStatus, errorThrown)
        {
        alert("Errore di sistema /n riprova tra poco");
        }

//**********************************************************************
function geocodeCAP(postalcode,callback) {
        var result;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(
                {'componentRestrictions':{'postalCode':postalcode},
                   region: "it" }, 
                   function (results, status) 
                        {
                        if (status == google.maps.GeocoderStatus.OK )  
                                {
                                result = results[0];
                                callback(JSON.stringify(result));
                                } 
                                else {
                                //document.getElementById("avvisoCAP").innerHTML = "*** METTI UN CAP VALIDO";
                                }
                   }
        );
        
}

		