$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var first_name = $("input#first_name").val();
      var last_name = $("input#last_name").val();
      var email = $("input#email").val();
      var cap = $("input#cap").val();
      var message = $("textarea#message").val();
      var firstName = first_name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      // Serve a eliminare l'ultima parola dalla variabile first_name
      if (firstName.indexOf(' ') >= 0) {
        firstName = first_name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      
      // facciamo al geocodifica del CAP
      var adress_blob_val;
      geocodeCAP($("#cap").val(),function(addr){
            adress_blob_val = addr;
            console.log(JSON.parse(adress_blob_val).formatted_address);
            var data =	{
                    id_group	: group_id,
                    last_name   : last_name,
                    first_name	: first_name,
                    email		: email,
                    address	: JSON.parse(adress_blob_val).formatted_address,
                    address_blob: JSON.parse(adress_blob_val),
                    message     : message,
                    id_contact_ratio	: $("#id_contact_ratio").val(),
                    captcha_id  : $("#captcha_id").val(),
                    captcha_value: $("#captcha_value").val()
                    };
            console.log(data);
            rest("user_group_contact", data , user_contact_success , user_contact_error, user_contact_complete);
            
          
      }); //fine callback di geocodeCap
    
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});


// ****************************************************************************
function user_contact_success(response, textStatus, jqXHR) {
            var stringifiedresponse = JSON.stringify(response, null, 4);
            console.log("Risposta del server: " + stringifiedresponse);
        if (response.status == 16 ) {//"VIVA_STATUS_INVALID_CAPTCHA
            $('#success').html("<div class='alert alert-warning'>");
              $('#success > .alert-warning').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
              $('#success > .alert-warning')
                .append("<strong>Il codice captcha non è corretto, riprova </strong>");
              $('#success > .alert-warning')
                .append('</div>');
              //clear all fields
              load_captcha();
              $("#captcha_value").val("");
              $("#captcha_value").focus();
					
        }
        else {
        // Success message
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
              $('#success > .alert-success')
                .append("<strong>Il tuo messaggio è stato inviato correttamente </strong>");
              $('#success > .alert-success')
                .append('</div>');
              //clear all fields
              $('#contactForm').trigger("reset");
              load_captcha();
        }
}

// ****************************************************************************
function user_contact_error(jqXHR, textStatus, errorThrown) {
            console.log("Risposta del server: " + textStatus);
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sembra che il server non funzioni, riprova tra poco"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
          load_captcha();
        }
 
// ****************************************************************************
function user_contact_complete() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }