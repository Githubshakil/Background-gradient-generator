let btn1 = document.getElementById('myButton')
let btn2 = document.getElementById('myButton2')
let copyDiv = document.querySelector(".copyCode")

const HexValues = () => {
    let myHexValues = "0123456789abcdef"; 
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + (myHexValues[Math.floor(Math.random() * 16)]);
    }
    return colors;
}


const handleButton1= () => {
   let rgb1= HexValues()
   console.log(rgb1);
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #444)`
   copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, rgb(152, 63, 198))`
}

const handleButton2 = () => {
   let rgb2= HexValues()
   console.log(rgb2);
   document.body.style.backgroundImage = `linear-gradient(to right, #000, ${rgb2})`
   copyDiv.innerHTML = `background-image: linear-gradient(to right, #000, ${rgb2})`

}
   
        

btn1.addEventListener("click", handleButton1)
btn2.addEventListener("click", handleButton2)