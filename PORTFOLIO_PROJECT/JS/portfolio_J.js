
function threebars() {

    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className -= " responsive";
    } else {
      x.className = "topnav";
    }

}
  
function logoUpdate() {
  //Change logo and colors based on date  
        
        //Get month
        var _date = new Date();
        var _month = _date.getMonth();

        //Look at the month and change this value
        var _logoSrc;
        var _colorVar;

        if(_month==9){ _logoSrc = "ASSETS/LOGOS/logo_halloween.png"; }
        else{
            _logoSrc = "ASSETS/LOGOS/logo.png";
        }

       
        document.getElementById("title-logo").src = _logoSrc;
        return;
        
        
}  
  

function popupwindow(id) {

// code for Pass the value to modal window

$("[input[name = 'button']").click(function(){
  $(this).attr('id'); // This will give the ID of the button clicked. 
});
  
}

