var TRESH = {
	nout:null,
	maus:null,
	};
var TreshAll = {
	All:null,
}
function ADD(){
var  ADD = $(".ADD1");
	
ADD.click(function(){  // вместо ADD 01 ? //

var ajax = $.ajax({
 
  url: 'http://localhost2/online-store-api-master/responses/addToBasket.json ',
  data:"",
  success: function(data){
	
	  
	  
  }
});
var DATA;
$.getJSON("http://localhost2/online-store-api-master/responses/addToBasket.json", DATA, function(DATA){
	//alert("GOOD!");
	
	 TRESH.nout++;
	 TreshAll.All++;
	console.log(TRESH.nout);
	var str = TreshAll.All ;
    $(".Numero").html(str);	
	var nout = 0;
	nout = TRESH.nout;
	var $KOC = $.cookie('noyt',nout,{expires: 5, 
	                                 path: '/',
									 domain:"http://localhost2/TRESH.html"  });
		$cok0 = $.cookie('noyt',nout,{expires: 5,
                                    	path: '/',
										domain:"http://localhost2/TRESH.html"
										});
	console.log($KOC);
	PrintObg();
	DeleteObg();
});

});


//PrintObg();
return true;
};
/////////////

function ADD2(){
var  ADD2 = $(".ADD2");
	
ADD2.click(function(){  

var ajax = $.ajax({
  
  url: 'http://localhost2/online-store-api-master/responses/addToBasket.json ',
  data:"",
  success: function(data){
	
	  
  }
});
var DATA;
$.getJSON("http://localhost2/online-store-api-master/responses/addToBasket.json", DATA, function(DATA){
	//alert("GOOD!");
	
	 TRESH.maus++;
	 TreshAll.All++;
	console.log(TRESH.maus);
	var str = TreshAll.All ;
    $(".Numero").html(str);	
	//$.cokies('SHOP',mayShop.maus++);
	var maus = 0;
	maus = TRESH.maus;
    var $KOC1 = $.cookie('maus',maus,{expires: 5,
                                    	path: '/',
										domain:"http://localhost2/TRESH.html"
										});
        $cok1 = $.cookie('maus',maus,{expires: 5,
                                    	path: '/',
										domain:"http://localhost2/TRESH.html"
										});
     console.log($KOC1);
});

});


PrintObg();
return true;
};




////////////Coment
var product0 =  {}; //
var product1 =  {}; //Коментарии
var product2 =  {}; //
var TEXT1 = $(".TEXT1");
var TEXT2 = $(".TEXT2");
var TEXT3 = $(".TEXT3");
var com1 = $(".onecommentButone");
var com2 = $(".twocommentButtwo");
var com3 = $(".treecommentButtree");
var com4 = $(".commentBut");
function CLIK(){
com1.click(function(){
	var GIBS = $('.TEXTClient1').val();
     console.log(GIBS);
    TEXT1.after("<p>"+ GIBS + "</p>");
	ajax = $.ajax({
  
  url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addReview.json',
  data:"",
  success: function(data){
	  var DATA;
	var DA = $.getJSON("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addReview.json", DATA, function(DATA){
	  console.log(data);
	  //alert(data);
	});
	}
	//https://github.com/GeekBrainsTutorial/online-store-api/blob/master/responses/addReview.json
    
});
});


return TEST;
};
	
com2.click(function(){
	var razm = TEXT2.length;
    console.log(razm);
    TEXT2.after("<br>");
    TEXT2.after("<p>");
    TEXT2.after("HELOY!");
    TEXT2.after("</p>");
    console.log(razm);
	razm++;
	razm++;
return TEST;
});
com3.click(function(){
	var razm = TEXT3.length;
    console.log(razm);
    TEXT3.after("<br>");
    TEXT3.after("<p>");
    TEXT3.after("HELOY!");
    TEXT3.after("</p>");
    console.log(razm);
	razm++;
	razm++;
	return TEST;
});



function registration(reg,TEST){
if(reg === 0){ // ne reg
var $login	= $('.login').val();

var	$pas = $('.PAS').val();

var $LOG = $.cookie('login',$login,{expires: 5,
                                    	path: '/',
										domain:"http://localhost2/",
										});
										
var $PAS = $.cookie('PAS',$pas,{expires: 5,
                                    	path: '/',
										domain:"http://localhost2/",
										});

var ajax = $.ajax({
  
url: 'http://localhost2/online-store-api-master/responses/registerUser.json',
data:$login,
  
});
var DATA;
$.getJSON("http://localhost2/online-store-api-master/responses/registerUser.json", DATA, function(DATA){
alert(DATA.userMessage);
console.log(DATA);
});									
										
reg = 1;
return reg;										
										

}
else{
	
	$(".INVIS").after("<p>Мы рады видеть тебя авторизированный пользователь!</p>");
	$(".reg").remove();
	$(".INVIS").remove();
	reg = 1;
    return reg;
}

return TEST;

};
function GetPrice(TEST){
var DATA
 $.getJSON("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json", DATA, function(DATA){
console.log(DATA);
DATAS = DATA;


var m,n = 0;
m = DATAS[0].price;
n = DATAS[1].price;

$(".price0").text(m);
$(".price1").text(n);

return DATAS;

// DATAS[1].price
});									


return TEST;
};
function PrintObg(TEST){
	 var cesh = $(".Numero").html(); // Наличие товара в карзине
	  console.log("0000");
	  console.log(cesh);
	  console.log("0000"); 
		if(cesh != 0){ // Если больше Нуля
			var dEl = $('.DEL').length; // Проверяем есть ли элемент удаления
        if(dEl === 0){ // Если нет создаём
		var del = "DEL"
		$(".TRESH").append("<button class =  "+ del +" >DELETE</button>");
		
			CESH = cesh;
			return CESH;
		} else if (del === 1) {
			$(".TRESH").lastChild.remove();
			$(".DEL").remove();
			console.log("товар не заказан");
		}
		};
return TEST;		
};

function login(TEST){
	$(".submitLogin").on("click",function(){
		////
		
		
		////
		
	var ajaxData,GetData;	
 $.ajax({
  url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/login.json',
  data:ajaxData,
  dataType: 'json',
  success:function(ajaxData){
	  
var LOG = $(".login").val();
var PAS = $(".PAS").val();
	ajaxData.user_login  = LOG;
	ajaxData.user_name = PAS;
	  //console.log(ajaxData);
	  //console.log(ajaxData.user_login);
	  console.log("####");
	  
  }

  
  
  });
$.getJSON("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/login.json", GetData, function(GetData){
//console.log(GetData);
});	
  
  
	});
return TEST;
};

function DeleteObg(TEST){
	var DATA;
var $DELET	 = $('.DEL');
$(".DEL").on("click",function() {
$.ajax({
  url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json',
  data:"",

});
$.getJSON("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json", DATA, 
function(DATA){
console.log(DATA);
console.log(1);
});




$(".DEL").remove();
$(".Numero").text(0);
TRESH.nout = 0;
TRESH.maus = 0;
TreshAll.All = 0;

});

return TEST;
};



window.onload = function() {
var TEST = 0;
var CESH = 0; // Карзина
var DATAS;
var cok0,cok1 = 0;
var reg = 0;
var SESSION = {
	login:null,   //login Пользователя
	password:null,  // password Пользователя
	userLastname:null, // lastname Фамилия Пользователя
}
GetPrice();




registration(reg);
ADD();	
CLIK();
ADD2();

DeleteObg();
login();
};