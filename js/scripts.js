// function orderpizza(type,size,crust,topping,total){
//     this.type = pizza-type;
//     this.size = pizza-size;
//     this.crust =pizza-crust;
//     this.toppings = pizza-topping;
//     this.total = total;

// }



$(document).ready(function(){
    $(function () {
        $(".odsum").hide();
        $(".deliver").hide();



    $("#odnow").click(function(event){
        event.preventDefault();
        let type = $("#pizza-type option:selected").val();
        let size = $("#pizza-size option:selected").val();
        let crust = $("#pizza-crust option:selected").val();
        let toppings = $("#pizza-topping option:selected").val();
        let number = $("#pizza-number").val();
       

        let order = (ptype, psize, pcrust, ptopping, pnumber, total) => {
            return {ptype, psize, pcrust, ptopping, pnumber, total};
        };


        let price,totalPrice;
        switch (type){
            case type = "chicken":
                switch (size) {
                    case size = "Large":
                        price = 1000;
                        if (crust === "Crispy" ){
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number)+ 200;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 800;
                        if (crust === "Crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number) + 200;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 600;
                        if (crust === "Crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number) + 200;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
            case type = "bbqsteak":
                switch (size) {
                    case size = "Large":
                        price = 1000;
                        if (crust === "Crispy" ){
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number)+ 200;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 800;
                        if (crust === "Crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number) + 200;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 600;
                        if (crust === "Crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * number) + 200;
                        }
                        else{
                            totalPrice === price
                        }  
                        break;      
                        
                }
                break;
                case type = "vegtikka":
                    switch (size) {
                        case size = "Large":
                            price = 1000;
                            if (crust === "Crispy" ){
                                totalPrice = (price*number) + 100;
                            } else if (crust === "Stuffed") {
                                totalPrice = (price*number) + 150;
                            } else if (crust === "Glutten free") {
                                totalPrice = (price * number)+ 200;
                            } 
                            else{
                                totalPrice === price
                            }
                            break;
                        case size = "Medium":
                            price = 800;
                            if (crust === "Crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "Stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "Glutten free") {
                                totalPrice = (price * number) + 200;
                            }
                            else{
                                totalPrice === price
                            }
                            break;
                        case size = "Small":
                            price = 600;
                            if (crust === "Crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "Stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "Glutten free") {
                                totalPrice = (price * number) + 200;
                            }
                            else{
                                totalPrice === price
                            }  
                            break            
                    }
                    break;
                    case type = "Hawaiian":
                        switch (size) {
                            case size = "Large":
                                price = 1000;
                                if (crust === "Crispy" ){
                                    totalPrice = (price*number) + 100;
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price*number) + 150;
                                } else if (crust === "Glutten free") {
                                    totalPrice = (price * number)+ 200;
                                } 
                                else{
                                    totalPrice === price
                                }
                                break;
                            case size = "Medium":
                                price = 800;
                                if (crust === "Crispy") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "Glutten free") {
                                    totalPrice = (price * number) + 200;
                                }
                                else{
                                    totalPrice === price
                                }
                                break;
                            case size = "Small":
                                price = 600;
                                if (crust === "Crispy") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "Glutten free") {
                                    totalPrice = (price * number) + 200;
                                }
                                else{
                                    totalPrice === price
                                } 
                                break;       
                                
                        }
                        break;
                        case type = "Boerewors":
                            switch (size) {
                                case size = "Large":
                                    price = 1000;
                                    if (crust === "Crispy" ){
                                        totalPrice = (price*number) + 100;
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price*number) + 150;
                                    } else if (crust === "Glutten free") {
                                        totalPrice = (price * number)+ 200;
                                    } 
                                    else{
                                        totalPrice === price
                                    }
                                    break;
                                case size = "Medium":
                                    price = 800;
                                    if (crust === "Crispy") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "Glutten free") {
                                        totalPrice = (price * number) + 200;
                                    }
                                    else{
                                        totalPrice === price
                                    }
                                    break;
                                case size = "Small":
                                    price = 600;
                                    if (crust === "Crispy") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "Glutten free") {
                                        totalPrice = (price * number) + 200;
                                    }
                                    else{
                                        totalPrice === price
                                    } 
                                    break;      
                                    
                            }
                            break;

        }
        switch (toppings){
            case toppings = "Mushrooms and onions":
                totalPrice = totalPrice + 150;
                break;
            case toppings = "Green pepper and tomatoes":
                totalPrice = totalPrice + 120;
                break;
            case toppings = "Macoon pineapple":
                totalPrice = totalPrice + 170;
                break;
            case toppings = "BBQ chicken":
                totalPrice = totalPrice +180;
                break;
            case toppings = "Minced beef, tomatoes and onionsd":
                totalPrice = totalPrice + 100;
                break;
            case toppings = ">Sweet corn and pepper":
                totalPrice = totalPrice + 80;
                break;
        
        }
        

        let newOrder= order(type,size,crust,toppings,number,totalPrice);

        $(".odsum").slideDown(2000)
        $('.deliver').slideUp();
        $('#list').slideDown();
        $('.delivery').show(1000);
        $('.pick').show(1000);

        

        console.log(newOrder); 

        $("#list").text(" ");
        $("#list").append( "Pizza type: " + newOrder.ptype + "<br>"
         + "Size: " + newOrder.psize + "<br>"
         + "Crust: " + newOrder.pcrust + "<br>"
         + "Topping: " + newOrder.ptopping + "<br>"
         + "Quantity: " + newOrder.pnumber + "<br>"
         + "Total: " + newOrder.total)
    });
        $(".delivery").click(function () {
        $(".odsum").slideUp();
        $("#list").slideUp();
        $(".odsum").text("Please provide your location for deliveries.").slideToggle();
        $(".delivery").hide(1000);
        $(".pick").hide(1000);
        $(".deliver").slideDown();
    });

    $(".pick").click(function () {

    });

    });

});
  
function validate () {
    var name = document.getElementById("yourname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email  == ""|| message  == ""){
      alert("Please enter your name, email and message!");
       return false;

    }
    else{
      alert ("Thank you " +  name + " for contacting us. We will get back to you as soon as possible.");
          }
    }

