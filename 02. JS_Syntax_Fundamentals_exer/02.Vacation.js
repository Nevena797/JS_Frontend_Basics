function (persons,group,day) {
    switsch (group) {
        case "Students":
        if (day=="Friday") {
            let price = 8.45 * persons;
        }
        else if (day=="Saturday") {
            let price = 9.80 * persons;
        }
        else if (day=="Sunday") {
            let price = 10.46 * persons;
        }
        break;
        case "Business":
            if(day=="Friday") {
                let price = 10.90 * persons;
            }
            else if (day=="Saturday") {
                let price = 15.60 * persons;
            }
            else if (day=="Sunday") {
                let price = 16.00 * persons;
            }
        case "Regular":

            if(day=="Friday") {
                let price = 15.00 * persons;
            }
            else if (day=="Saturday") {
                let price = 20.00 * persons;
            }
            else if (day=="Sunday") {
                let price = 22.50 * persons;
            }
    }
}