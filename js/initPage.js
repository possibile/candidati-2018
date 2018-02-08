// Inizializza la pagina

function initPage() {
    $(".nome_candidato").text(candidato_nome);
    $(".ruolo").text(ruolo);
    $("#slogan").text(slogan);
    $("#motivazioni").attr('w3-include-html',why_url);
    $("#bio_short").attr('w3-include-html',bio_short_url);
    $("#bio_long_text").attr('w3-include-html',bio_long_url);
    $(".box-profile").css('background-image','url("' + candidato_img_url + '")');
    $(".donation-link").attr('href',donation_url);
	$("#iban_numeber").text(iban_numeber);
	$("#iban_name").text(iban_name);
	
	show_issues(issues_url);
    show_social();
    
    load_happening(group_id);
    
    load_captcha();
    load_privacy();
	
};	

function show_issues(issues_url){
    $("#my_issues").attr('w3-include-html',issues_url); 
    
    
}


//recuperiamo il captcha
function load_captcha(){

    $.post(viva_url+"backend/get_captcha.php",
    {},
    function(data,status){
        $("#waForm_captcha_img_captcha").attr('src',''+viva_url + data.data.img); 
        $("#captcha_hidden_val").html("<input id=\"captcha_id\" type=\"hidden\" name=\"k_captcha\" value="+ data.data.id + ">");
        $("#session_token_hidden_val").html("<input id=\"session_token\" type=\"hidden\" name=\"session_token\" value="+ data.session_token + ">");
    });	
}

//recuperiamo la privacy
function load_privacy() {
    
    $.post(viva_url+"backend/get_privacy_text.php",
    {},
    function(data,status){
        $("#privacy_text").text(data.data.text);
    });	
    
}

//facciamo vedere i social
function show_social() {
    
    var social_link = {
        facebook : {
            nome : "facebook_link_id",
            link : facebook_link,
            icon : "fa-facebook"
        },
        twitter : {
            nome : "twitter_link_id",
            link : twitter_link,
            icon : "fa-twitter"
        },
        linkedin : {
            nome : "linkedin_link_id",
            link : linkedin_link,
            icon : "fa-linkedin"
        },
        wordpress : {
            nome : "wordpress_link_id",
            link : wordpress_link,
            icon : "fa-wordpress"
        },
        youtube : {
            nome : "youtube_link_id",
            link : youtube_link,
            icon : "fa-youtube"
        }
        
    };
    
    var x;
    var social_html = "";
    for (x in social_link){
        if (social_link[x].link !== ""){
            social_html +=  "<li class='list-inline-item'>";
            social_html +=  "<a class='btn btn-outline-dark btn-social text-center rounded-circle' href='" + social_link[x].link + "'>";
            social_html +=  "<i class='fa fa-fw " + social_link[x].icon  +  "'></i>";
            social_html +=  "</a> </li>";
        }
        
    }
    
    $(".social-link").html(social_html);
    //console.log(social_html);
    
}

// carica la tabella degli eventi
function show_calendar(markers){
    var x;
    var location_markers = [];
    
    for (x in markers){
        var row_html = "";
        var happening_href = viva_url+"backoffice/user_frm_happening.php?id="+markers[x].id; 
        row_html += "<tr><td><div class='calendar-day'>"+ markers[x].from_day +"</div><div class='calendar-month'>"+month_ita[markers[x].from_month - 1] + "</div></td>";
        row_html += "<td><a href='" + happening_href + "' target='_blank' class='calendar-event-name'>"+ markers[x].name +"</a>";
        row_html += "<div class='calendar-event-city'>"+ markers[x].happening_venue_name + " - " + markers[x].happening_city_name +"</div></td></tr>";
        $("#myTable").append(row_html);
        var new_location = {
            lat: markers[x].latitude,
            lon: markers[x].longitude,
            title: markers[x].name,
            html: [
                "<a href='",viva_url+"backoffice/user_frm_happening.php?id="+markers[x].id,"' target='_blank' >",
                '<h3>'+markers[x].name+'</h3>',
                '<p>'+markers[x].happening_venue_name+'</p></a>'
                ].join('')
        };
        location_markers.push(new_location);
        
    }
    
    // console.log(JSON.stringify(location_markers));
    
    
    $('#myTable').pageMe({
          pagerSelector:'#myPager',
          activeColor: 'red',
          prevText:'Prev',
          nextText:'Next',
          showPrevNext:true,
          hidePageNumbers:false,
          perPage:2
        });
    
    
    return location_markers;
}


function load_happening(group_id){
    $.post(viva_url+"backend/get_public_happening.php?id_group="+group_id,
    {},
    function(data,status){
        
        var markers = data.data.items;
        var numevents = markers.length;
        $("#count").prepend(numevents);
    
        if (numevents !== 0) {
             var location_markers = show_calendar(markers);
             new Maplace(
                    {
                        generate_controls : false,
                        locations: location_markers,
                        map_div: '#map',
                        controls_on_map: false
                    }).Load();
        } 
        else {
            $("#calendar").remove();
            $("#agenda-menu").remove();
        }
      
    });	
}

