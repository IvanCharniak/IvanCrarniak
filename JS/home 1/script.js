let firstName = prompt("Введите Вашу Фамилию"),
    lastName = prompt("Введите Ваше Имя"),
    middleName = prompt("Введите Ваше Отчество (если таковое имеется)"),
    age = prompt ("Сколько Вам полных лет?"),
    ageNumber = +age +5,
    sex= confirm ('Ваш пол - мужской?');
    
    if (sex== true && age > 63) {
        
   alert(
    firstName + " " + lastName+ " " +  " "  +middleName + "\n" 
    + "Ваш возраст в годах: " + age + "\n" 
    + 'Ваш возраст в днях: ' + (age*365) + "\n"
    + 'через 5 лет Вам будет: ' + ageNumber + "\n"
    + 'Ваш пол: мужской'  +  "\n"
    + 'Вы на пенсии: да '  +  "\n"
   );
    }
    else if (sex==false && age > 60){
        alert(
            firstName + " " + lastName+ " " +  " "  +middleName + "\n" 
            + "Ваш возраст в годах: " + age + "\n" 
            + 'Ваш возраст в днях: ' + (age*365) + "\n"
            + 'через 5 лет Вам будет: ' + ageNumber + "\n"
            + 'Ваш пол: женский'  +  "\n"
            + 'Вы на пенсии: да '  +  "\n"
           );
    }
    else if (sex==false && age <= 60){
        alert(
            firstName + " " + lastName+ " " +  " "  +middleName + "\n" 
            + "Ваш возраст в годах: " + age + "\n" 
            + 'Ваш возраст в днях: ' + (age*365) + "\n"
            + 'через 5 лет Вам будет: ' + ageNumber + "\n"
             + 'Ваш пол: женский'  +  "\n"
            + 'Вы на пенсии: нет '  +  "\n"
           );
    }
    else if(sex==true && age <= 63) {
        alert(
            firstName + " " + lastName+ " " +  " "  +middleName + "\n" 
            + "Ваш возраст в годах: " + age + "\n" 
            + 'Ваш возраст в днях: ' + (age*365) + "\n"
            + 'через 5 лет Вам будет: ' + ageNumber + "\n"
            + 'Ваш пол: мужской'  +  "\n"
            + 'Вы на пенсии: нет '  +  "\n"
           );
    }