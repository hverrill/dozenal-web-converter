var regex_DecimalNum=/^-?[1-9]*[0-9]*(\.)?[0-9]*$/;
var regex_DozenalNum=/^-?[0-9\*#]*;?[0-9\*#]*$/;

var saved_decimal="";
var saved_dozenal="";

function int_to_doz(intv) {
    var res="";
    var R, Q=Math.floor(Math.abs(intv));
    while (true) {
        R = Q % 12;
        res = "0123456789*#".charAt(R)+res;
        Q = (Q-R) / 12;
        if (Q == 0) break;
    }
    return ((intv<0) ? "-"+res : res);
}

function intfrac_to_doz(frac) {
    var len = frac.length;
    frac = parseFloat("0."+frac);
    var res="";
    while (len > 0) {
        var v = 0;
        var n = frac * 12;
        if (len > 1) {
            v = Math.floor(n);
        } else {
            v = Math.round(n);
        }
        frac = n - v;
        res += int_to_doz(v);
        len--;
    }
    return res;
}

function to_doz(dec) {
    if (dec == "" || dec == "-") return dec;
    var res="";
    var parts = dec.split('.');
    intpart = parts[0];
    fracpart = parts[1];

    result = int_to_doz(intpart);

    if (parts.length > 1 && fracpart.length > 0) {
        result += ';'+intfrac_to_doz(fracpart);
    }

    return result;
}

function intdoz_to_dec(intdoz) {
    var neg = false;
    if (intdoz.charAt(0) == '-') {
        intdoz = intdoz.substring(1);
        neg = true;
    }
    var res=0, n=0;
    for (i=0; i<intdoz.length; i++) {
        d = intdoz.charAt(i);
        if (d == '#') {
            n = 11;
        } else if (d == '*') {
            n = 10;
        } else {
            n = parseInt(d);
        }
        res += n*Math.pow(12,(intdoz.length-i-1));
    }
    if (neg) {
        res = '-'+res;
    }
    return res;
}

function from_doz(doz) {
    if (doz == "" || doz == "-") return doz;
    var parts = doz.split(';');
    intpart = parts[0];
    fracpart = parts[1];

    var div_times = 0;
    var prec = 0;
    if (parts.length > 1) {
        prec = div_times = fracpart.length;
        intpart = intpart+fracpart;
    }

    result = intdoz_to_dec(intpart);

    while (div_times > 0) {
        result = result/12;
        div_times--;
    }

    result *= Math.pow(10,prec);
    result = Math.round(result);
    result /= Math.pow(10,prec);

    return result;
}

function decimal_changed() {
    var decval = document.dozcalc.decimal.value;
    var dozval = '';
    if (regex_DecimalNum.test(decval)) {
        dozval = to_doz(decval);
        document.dozcalc.dozenal.value=dozval;
        saved_dozenal = dozval;
        saved_decimal = decval;
    } else {
        alert('decimal field must contain decimal digits only\n'
                +'(0, 1, 2, 3, 4, 5, 6, 7, 8, and 9, with . and'
                +' - allowed in their proper places)');
        document.dozcalc.decimal.value=saved_decimal;
    }
}

function dozenal_changed() {
    var dozval = document.dozcalc.dozenal.value;
    var decval = '';
    if (regex_DozenalNum.test(dozval)) {
        decval = from_doz(dozval);
        document.dozcalc.decimal.value=decval;
        saved_decimal = decval;
        saved_dozenal = dozval;
    } else {
        alert('dozenal field must contain dozenal digits only\n'
                +'(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, *, #, with ; and'
                +' - allowed in their proper places)');
        document.dozcalc.dozenal.value=saved_dozenal;
    }
}

function do_calc() {
}