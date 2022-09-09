let firstNameReq = prompt("Введите Вашу Фамилию"),
    lastNameReq = prompt("Введите Ваше Имя"),
    middleNameReq = prompt("Введите Ваше Отчество (если таковое имеется)"),
    ageReq = prompt ("Сколько Вам полных лет?"),
    sexReq= confirm ('Ваш пол - мужской?'),
    ageNumber = +ageReq +5;

    if (ageReq > 63 && sexReq == true){
        moneya = 'да';
        sex = 'мужской';
    }
    
    else if (ageReq < 63 && sexReq ==true)
    {   
        sex = 'мужской';
        moneya = 'нет';
    }
    else if (ageReq < 58 && sexReq ==false)
    {   
        sex = 'женский';
        moneya = 'нет';
    }
    else if (ageReq > 58 && sexReq ==false)
    {   
        sex = 'женский';
        moneya = 'да';
    }
    else if (ageReq == 58 && sexReq ==false) {
        moneya = 'возможно'
        sex = 'женский';
    }
    else if (ageReq == 63 && sexReq ==true) {
        moneya = 'возможно'
        sex = 'мужской';
    };;
    

    alert(
        firstNameReq + " " + lastNameReq+ " " +  " "  +middleNameReq + "\n" 
        + "Ваш возраст в годах: " + ageReq + "\n" 
        + 'Ваш возраст в днях: ' + (ageReq*365) + "\n"
        + 'через 5 лет Вам будет: ' + ageNumber + "\n"
        + 'Ваш пол: ' + sex +  "\n"
        + 'Вы на пенсии: ' + moneya  +  "\n"
       );