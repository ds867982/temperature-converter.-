const celciusE1 = document.getElementById("Celcius")
const FahrenheitE1 = document.getElementById("Fahrenheit")



function computeTemp() {

    const currentValue = +event.target.value;
    
    switch (event.target.name) {
        case "Celcius":
            FahrenheitE1.value = currentValue * 1.8 + 32;
            
            break;
         case "Fahrenheit":
            celciusE1.value = currentValue - 32 / 1.8;
                
            break;
        
    
        default:
            break;
    }
}