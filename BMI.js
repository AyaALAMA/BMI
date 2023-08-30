// height = prompt("Enter the height : ") ;
// weight = prompt("Enter the weight : ")  ;




function calculate_bmi()

    {
        var height= document.getElementById("h");
        var weight =  document.getElementById("w");
        var h=height.value;
        var w=weight.value;
        BMI = h / (w/100)*2  ;
        // alert(BMI)  ;
        // return BMI;
        if  ( BMI <= 18.5 ) 
        {alert("Oops! You are underweight.",BMI);}  
        else if (BMI <= 24.9 ) 
            {alert("Awesome! You are healthy.") ; }
        else if (BMI <= 29.9) 
            {alert("Eee! You are over weight.") ;} 
        else
        alert("Seesh! You are obese.") ; 

    }
// calculate_bmi()
// 
// function interpret_bmi(BMI);
// {
    // if  ( BMI <= 18.5 ) 
    // {alert("Oops! You are underweight.");}  
    // else if (BMI <= 24.9 ) 
        // {alert("Awesome! You are healthy.") ; }
    // else if (BMI <= 29.9) 
        // {alert("Eee! You are over weight.") ;} 
    // else
    // alert("Seesh! You are obese.") ; 
// }
                                
// interpret_bmi(calculate_bmi());
