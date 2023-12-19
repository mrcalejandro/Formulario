
var texto= document.querySelector("#texto");
function calculo() {
    let contador= 0;
    let formulariocalculo= document.querySelectorAll(".inputp")
    formulariocalculo.forEach((formulario) => {
        let valores = formulario.value;
        contador += Number(valores);
    });
    if(contador > 50 && contador <= 60){
        texto.innerText = "Probablemente sufres de sobrepreso o tengas algún tipo de enfermedad relacionado a ello, te recomendamos visitar urgentemente un doctor si tienes síntomas de alguna enfermedad o seguir estrictamente un plan de dieta. "
        document.querySelector(".imagen").style.display = "inline";   
        document.querySelector(".imagen").src= "img,10.11/top.avif";
    }
    if(contador > 30 && contador <= 50){
        texto.innerText = "Te recomendamos mejorar tus hábitos ahora mismo antes que estos perjudiquen tu salud si no es que ya lo han hecho, estás en el límite entre lo normal a lo perjudicial.  "
        document.querySelector(".imagen").style.display = "inline";
        document.querySelector(".imagen").src= "img,10.11/principio.jpg"
    }
    if(contador > 15  && contador <= 30){
        texto.innerText = "Si bien es cierto tus hábitos no son los mejores, no tienes grandes excesos de todas formas te recomendamos optar por una dieta saludable y hacer ejercicio regularmente para asi poder gozar de una mejor salud.  "
        document.querySelector(".imagen").style.display = "inline";
        document.querySelector(".imagen").src= "img,10.11/saludable2.avif" 
    }
    if(contador >= 1 &&  contador <= 15){
        texto.innerText = "¡Excelente, vas por buen camino! Haz conseguido tener un balance entre lo saludable y lo perjudicial para tu salud. Nuestra única recomendación es que sigas haciendo lo mismo :D  "
        document.querySelector(".imagen").style.display = "inline";
        document.querySelector(".imagen").src= "img,10.11/toro-fuerte-2_1975-360.avif" 
    }
    if(contador === 0){
        texto.innerText = "Debes marcar al menos una opción"
        document.querySelector(".imagen").style.display = "inline";
        document.querySelector(".imagen").src= "img,10.11/0.jpg" 
    }

}


