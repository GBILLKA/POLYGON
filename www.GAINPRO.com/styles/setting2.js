$(document).ready(function(){

    wow = new WOW(
          {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
              console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          }
        );
        wow.init();
    
    var percent = document.getElementById("Ultra").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra").value); 
        var minMoney 	= [10,50,100,200,500,500,500 ];
        var maxMoney	= [1000000.00,1000000.00,1000000.00,1000000.00,1000000.00,1000000.00,1000000.00 ];
        $("#money").val(minMoney[0]);
        console.log($("#money").val(minMoney[0]));
        
        //Calculator
        function calc(){
            var money = parseFloat($("#money").val());
            switch (percent) {
                case 0:
                    if( (money >= 10 && money <= 3000)){
                        var profitDaily = money / 100 * 101;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 103;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 110;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 120;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 130;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$10");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 1:
                   if( (money >= 100 && money <= 3000)){
                        var profitDaily = money / 100 * 106;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 117;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 210;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 350;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 430;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$100");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 2:
                          if( (money >= 100 && money <= 3000)){
                        var profitDaily = money / 100 * 113;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 260;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 530;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 750;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 900;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$100");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 3:
                    if( (money >= 100 && money <= 3000)){
                        var profitDaily = money / 100 * 120;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 460;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 750;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 1100;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 1500;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$100");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 4:
                    if( (money >= 500 && money <= 3000)){
                        var profitDaily = money / 100 * 145;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 650;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 1200;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 1800;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 2200;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$500");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 5:
                     if( (money >= 1000 && money <= 3000)){
                        var profitDaily = money / 100 * 210;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 1250;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 3250;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 4250;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 5000;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$1000");
                        $("#profitMonthly").text("");
                    }
                    break;
                case 6:
                    if( (money >= 1000 && money <= 3000)){
                        var profitDaily = money / 100 * 310;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 3001 && money <= 5000) {
                        var profitDaily = money / 100 * 2250;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 5001 && money <= 25000) {
                        var profitDaily = money / 100 * 5550;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    } if (money >= 25001 && money <= 50000) {
                        var profitDaily = money / 100 * 7500;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                     } if (money >= 50001 && money <= 75000) {
                        var profitDaily = money / 100 * 9000;
                        var profitDaily = profitDaily.toFixed(2);
                        var profitMonthly = profitDaily * 30;
                        var profitMonthly = profitMonthly.toFixed(2);
    
                        $("#profitDaily").text(profitDaily);
                        $("#profitMonthly").text(profitMonthly);
                    //} else if(isNaN(money) == true) {
                    } if (money < 10){
                        $("#profitDaily").text("Min.$1000");
                        $("#profitMonthly").text("");
                    }
                    break;
    
            }
        }
        if($("#money").length){
            calc();
        }
        $("#money").keyup(function(){
            calc();
        });
    
        $("#Ultra").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    
    
    });
    
    $(document).bind("contextmenu",function(e){
      return false;
        });
    