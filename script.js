$( "#picture" )
       
       .on( "click", function() {
       var i = 5 ;
       var r = Math.random() ;
       var x = Math.round( (i-1) * r) + 1;
       images = new Array
       images[1] = "1.jpg"
       images[2] = "2.jpg"
       images[3] = "3.jpg"
       images[4] = "4.jpg"
       images[5] = "5.jpg"
       var image = images[x]
       document.getElementById('picture').src = image
       });