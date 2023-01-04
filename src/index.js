module.exports = function toReadable (number) {
 var str = '';
 var len = String(number).length;
 number = String(number);
 if (len === 1) {
    switch (number[0]) {
        case '0':
            str = str+'zero ';
            break;
        case '1':
            str = str+'one ';
            break;
        case '2':
            str = str+'two '; 
            break;
        case '3':
            str=str+'three ';
            break;
        case '4':
            str=str+'four ';
            break;
        case '5':
            str=str+'five ';
            break;
        case '6':
            str=str+'six ';
            break;
        case '7':
            str=str+'seven ';
            break;
        case '8':
            str=str+'eight ';
            break; 
        case '9':
            str=str+'nine ';
            break;
    }
 } 
 else if (len === 2) {
        switch (number[0]) {
            case '1':
                switch (number[1]) {
                    case '0':
                        str = str+'ten ';
                        break;
                    case '1':
                        str = str+'eleven ';
                        break;
                    case '2':
                        str = str+'twelve '; 
                        break;
                    case '3':
                        str=str+'thirteen ';
                        break;
                    case '4':
                        str=str+'fourteen ';
                        break;
                    case '5':
                        str=str+'fifteen ';
                        break;
                    case '6':
                        str=str+'sixteen ';
                        break;
                    case '7':
                        str=str+'seventeen ';
                        break;
                    case '8':
                        str=str+'eighteen ';
                        break; 
                    case '9':
                        str=str+'nineteen ';
                        break;
                }
                break;
            case '2':
                    str = str+'twenty '; 
                    break;
            case '3':
                    str=str+'thirty ';
                    break;
            case '4':
                    str=str+'forty ';
                    break;
            case '5':
                    str=str+'fifty ';
                    break;
            case '6':
                    str=str+'sixty ';
                    break;
            case '7':
                    str=str+'seventy ';
                    break;
            case '8':
                    str=str+'eighty ';
                    break; 
            case '9':
                    str=str+'ninety ';
                    break;      
    }    
    if (number[0]!='1') {
    switch (number[1]) {
        case '1':
            str = str+'one ';
            break;
        case '2':
            str = str+'two '; 
            break;
        case '3':
            str=str+'three ';
            break;
        case '4':
            str=str+'four ';
            break;
        case '5':
            str=str+'five ';
            break;
        case '6':
            str=str+'six ';
            break;
        case '7':
            str=str+'seven ';
            break;
        case '8':
            str=str+'eight ';
            break; 
        case '9':
            str=str+'nine ';
            break;
    }  
    }
}
else {
    switch (number[0]) {
        case '1':
            str = str+'one hundred ';
            break;
        case '2':
            str = str+'two hundred '; 
            break;
        case '3':
            str=str+'three hundred ';
            break;
        case '4':
            str=str+'four hundred ';
            break;
        case '5':
            str=str+'five hundred ';
            break;
        case '6':
            str=str+'six hundred ';
            break;
        case '7':
            str=str+'seven hundred ';
            break;
        case '8':
            str=str+'eight hundred ';
            break; 
        case '9':
            str=str+'nine hundred ';
            break;
    }
    switch (number[1]) {
        case '1':
            switch (number[2]) {
                case '0':
                    str = str+'ten ';
                    break;
                case '1':
                    str = str+'eleven ';
                    break;
                case '2':
                    str = str+'twelve '; 
                    break;
                case '3':
                    str=str+'thirteen ';
                    break;
                case '4':
                    str=str+'fourteen ';
                    break;
                case '5':
                    str=str+'fifteen ';
                    break;
                case '6':
                    str=str+'sixteen ';
                    break;
                case '7':
                    str=str+'seventeen ';
                    break;
                case '8':
                    str=str+'eighteen ';
                    break; 
                case '9':
                    str=str+'nineteen ';
                    break;
            }
            break;
        case '2':
            str = str+'twenty '; 
            break;
        case '3':
            str=str+'thirty ';
            break;
        case '4':
            str=str+'forty ';
            break;
        case '5':
            str=str+'fifty ';
            break;
        case '6':
            str=str+'sixty ';
            break;
        case '7':
            str=str+'seventy ';
            break;
        case '8':
            str=str+'eighty ';
            break; 
        case '9':
            str=str+'ninety ';
            break;        
}
if (number[1]!='1') {
switch (number[2]) {
    case '1':
        str = str+'one ';
        break;
    case '2':
        str = str+'two '; 
        break;
    case '3':
        str=str+'three ';
        break;
    case '4':
        str=str+'four ';
        break;
    case '5':
        str=str+'five ';
        break;
    case '6':
        str=str+'six ';
        break;
    case '7':
        str=str+'seven ';
        break;
    case '8':
        str=str+'eight ';
        break; 
    case '9':
        str=str+'nine ';
        break;
}  
}  
}
return str.trim();
}
