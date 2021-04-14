$(document).ready(function(){
 
   $(".consecutive").consecutive();
  $(".consecutive-2").consecutive({animation:      'slide',});

      const arr = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  
];;
    var search = document.getElementById('search');
     autocomplete(search, arr);

  $.stickToMe({
        layer: '#stickLayer'      
      });

     $(".alink").rxHtmlButton();

     $.alert("#alert", 3000, "Have you heard about the new game?", false).info();
});

   

 