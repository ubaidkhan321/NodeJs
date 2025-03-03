const user = {
    username : "ubaid",
    price : "Free",
    welcomemessage : function(){
        console.log(`${this.username} , welcome to website `);
        
    }
     
}
user.welcomemessage(),
user.username = "Aneeque Dispatcher",
user.welcomemessage()