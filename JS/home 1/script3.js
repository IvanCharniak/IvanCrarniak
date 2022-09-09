let firstNameReq = prompt("Введите Вашу Фамилию"),
    lastNameReq = prompt("Введите Ваше Имя"),
    middleNameReq = prompt("Введите Ваше Отчество (если таковое имеется)"),
    ageReq = prompt ("Сколько Вам полных лет?"), 
    sexReq = confirm ('Ваш пол - мужской?');
    ageNumber = +ageReq +5;

    
    let sex = (sexReq == true) ? "мужской" : "женский";
    let moneya = (sexReq = true && ageReq > 63) ? "да" : (sexReq = true && ageReq < 63) ? 'нет' : (sexReq = false && ageReq < 58) ? 'нет' : (sexReq = false && ageReq > 58) ? "да" : 'возможно...';

   alert(
      firstNameReq + " " + lastNameReq+ " " +  " "  +middleNameReq + "\n" 
      + "Ваш возраст в годах: " + ageReq + "\n" 
     + 'Ваш возраст в днях: ' + (ageReq*365) + "\n"
       + 'через 5 лет Вам будет: ' + ageNumber + "\n"
      + 'Ваш пол: ' + sex +  "\n"
      + 'Вы на пенсии: ' + moneya  +  "\n"
       );