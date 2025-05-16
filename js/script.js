let btn1 = document.getElementById('myButton')
let btn2 = document.getElementById('myButton2')

const HexValues = () =>{
     let myHexValues = "123456789abcdef"; 
    let colors = "#";
    for(i=0; i < 6; i++ ){
        colors= colors + (myHexValues[Math.floor(Math.random() * 16)]);
        
    }
        return colors ;

}


const handleButton1= () => {
   let rgb1= HexValues()
   console.log(rgb1);
}

const handleButton2 = () => {
   let rgb2= HexValues()
   console.log(rgb2);
}
   
        

btn1.addEventListener("click", handleButton1)
btn2.addEventListener("click", handleButton2)