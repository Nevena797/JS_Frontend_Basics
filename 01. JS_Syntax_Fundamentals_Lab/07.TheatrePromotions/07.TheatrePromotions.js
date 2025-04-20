function teatrePromotions(day, age) {
    let price;

    if (day === 'Weekday' && age >= 0 && age <= 18) {
        price = 12;
    }
    else if (day === 'Weekday' && age > 18 && age <= 64) {
        price = 18;
    }
    else if (day === 'Weekday' && age > 64 && age <= 122) {
        price = 12;
    }
    else if (day === 'Weekend' && age >= 0 && age <= 18) {
        price = 15;
    }
    else if (day === 'Weekend' && age > 18 && age <= 64) {
        price = 20;
    }
    else if (day === 'Weekend' && age > 64 && age <= 122) {
        price = 15;
    }
    else if (day === 'Holiday' && age >= 0 && age <= 18) {
        price = 5;
    }
    else if (day === 'Holiday' && age > 18 && age <= 64) {
        price = 12;
    }
    else if (day === 'Holiday' && age > 64 && age <= 122) {
        price = 10;
    }
    else {
        console.log('Error!');
        return;
    }

    console.log(`${price}$`);
}
