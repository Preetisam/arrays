(function(){

    //split
    var str = "Relevel";
    var char =str.split("");
    console.log(char);
    console.log(str);

    var sentence =" Tony Stark is the Iron Man";
    var words =sentence.split(" ");
    console.log(words);
    console.log(str);

       //based on delimitor value it split the 
    var anchor ="<a href='www.relevel.com'></a>";
    var link = anchor.split("'");
    var link = anchor.split("www");// ["<a href='", ".relevel.com'></a>"]
    console.log(link);
    console.log(str);// ['<a href=', 'www.relevel.com', '></a>'] 



})();