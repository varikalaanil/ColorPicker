


//  WRITTEN A CODE FOR COLOR RANDOM SWITCHER USING JQUERIES...

   $("button").click(function(){

        var colors = ["red" , "yellow" ,"blue", "purple", "grey", "skyblue", "green", "pink","orange", "darkgrey","lightgrey"] ;
        var RandomClick = Math.floor(Math.random() * colors.length);
        var Change = colors[RandomClick];  
        $(".box").css("backgroundColor" , Change);
        $("button").css("color",Change);
        $("h1").css("color",Change)

        
  })
  

