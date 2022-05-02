print("Body Mass Index is a international scale used for showing a person's body condition regarding weight"
      ", please follow the instruction and we will calculate your BMI :)")


def calculate_bmi(weight_in_kilogram: float, meter: float) -> float:
    """
    Calculate and return the user's BMI
    """
    return round(weight_in_kilogram/(meter ** 2), 1)


while True:
    weight = float(input("\tplease enter your weight in kilogram: "))
    height = float(input("\tplease enter your height in meters: "))
    BMI = calculate_bmi(weight, height)

    if BMI <= 18.5:
        suggestion = "you are too thin, gain more weight"
    elif 25 > BMI > 18.5:
        suggestion = "Congratulation, you are in perfect Body Mass Index"
    else:
        suggestion = "you are overweight regarding your height, be prepared to lose weight"

    print("Your BMI value is:" + str(BMI) + ", " + suggestion)
