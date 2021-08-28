
 function threebars() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className -= " responsive";
    } else {
      x.className = "topnav";
    }
   }
  
   function change_image() {
      var url = document.getElementById('Change_Image').src;
      if (url == 'IMAGES/tankman1.png') {
          document.getElementById('Change_Image').src = 'IMAGES/tankman2.png';
      } else {
          document.getElementById('Change_Image').src = 'IMAGES/tankman1.png';
      }
  }
  change_image();
  
  $('.first-image').mouseover(function(){
          $(this).toggleClass('second-image');	
      });
      $('.second-image').mouseover(function(){
          $(this).toggleClass('first-image');	
      });



function popupwindow(id) {

// code for Pass the value to modal window

$("[input[name = 'button']").click(function(){
  $(this).attr('id'); // This will give the ID of the button clicked. 
});
  
}