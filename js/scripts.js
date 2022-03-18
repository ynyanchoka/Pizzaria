// function orderpizza(type,size,crust,topping,total){
//     this.type = pizza-type;
//     this.size = pizza-size;
//     this.crust =pizza-crust;
//     this.toppings = pizza-topping;
//     this.total = total;

// }

$(document).ready(function(){
    $("button.order").click(function(event){
        let type = $("#pizza-type option:selected").val();
        let size = $("#pizza-size option:selected").val();
        let crust = $("#pizza-crustoption:selected").val();
        let toppings = $("#pizza-topping option:selected").val();
        let number = $("#number option:selected").val();
        console.log (size);

        let order = (ptype, psize, pcrust, ptopping, pnumber, total) => {
            return {ptype, psize, pcrust, ptopping, pnumber, total};
        };


        let price,totalPrice;
        switch (type){
            case pizza-type = "chickenmush":
                switch (size) {
                    case size = "large":
                        price = 600;
                        if (crust === "crispy" ){
                            totalPrice = (price*number) + 100;
                        } else if (crust === "stuffed"){
                            totalPrice = (price*number) + 150;
                        } else (crust === "glutten"){
                            totalPrice = (price * number)+ 200;
                        } 
                        break;
                    case size = "medium":
                        price = 800;
                        
                }

        }

    });

})
  

