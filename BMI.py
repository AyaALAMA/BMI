height = float(input("Enter the height : "))  
weight = float(input("Enter the weight : "))  
     
def calculate_bmi():
    BMI = weight / (height/100)**2  
    print("The BMI is", BMI)  
    return BMI

def interpret_bmi(BMI):
    if   BMI <= 18.5:  
        print("Oops! You are underweight.")  
    elif BMI <= 24.9:  
        print("Awesome! You are healthy.")  
    elif BMI <= 29.9:  
        print("Eee! You are over weight.")  
    else:  
        print("Seesh! You are obese.")  


interpret_bmi(calculate_bmi())



















