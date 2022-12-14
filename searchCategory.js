const btn = document.querySelector('button');

var weight =  document.getElementById('weight'); //Receive weight value
var height =  document.getElementById('height'); //Receive height value
var result = document.getElementById('result') //Receive result value
var resultcategory = document.getElementById('resultBmi')

var error =''; // variable that receives error messages
var categoryBmi ='';// variable that receives category

btn.addEventListener('click', () => {
    console.log("searching categories...");

    if (weight.value==''){
        error ="type a value for weight";
        alert(error)
    }
    else if(height.value =='')
    {
        error ="type a value for height";
        alert(error)
    }else{

    var weight_right = parseFloat(weight.value)
    var height_right = parseFloat(height.value)  
    
    var bmi = calculateBmi(weight_right,height_right)
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "listing.js");

    xhr.addEventListener("load", function() {
        var answer = xhr.responseText;
        //console.log(answer)

        var categories = JSON.parse(answer);
        categories.forEach(function(category) {
           if ((bmi > category.bmi_minimum) && (bmi < category.bmi_maximum ))
           {
               categoryBmi = category.category
           }
           resultcategory.innerHTML = categoryBmi
        });
    });
    xhr.send();
}
    
    result.value =  bmi.toFixed(2)
});

function calculateBmi(weight , height){
     
    return (weight / (height * height)) 
}