var outputscreen = document.getElementById("outputscreen")
var pantalla = document.getElementById("pantalla")
var c = 0

function Display(num) {
    if (c == 1) {
        Clear()
        outputscreen.value += num
        c = 0
    }
    else {
        outputscreen.value += num
    }


}

function Calculate() {
    try {
        var v = outputscreen.value
        var l = v.length
        alert(l)
        var u = v.substring(l - 1)
        alert(u)

        if (u == '%') {
            var x = v.substring(0, l - 1)

            porcen(x)
            c = 1
        }

        else {
            pantalla.value = outputscreen.value;
            outputscreen.value = eval
                (v);
            c = 1
        }

    }

    catch (err) {
        alert("Dato invalido")

    }
}

function Clear() {
    outputscreen.value = " ";
    pantalla.value = " ";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1)
}

function porcen(valor) {
    pantalla.value = outputscreen.value;
    outputscreen.value = eval(valor + '/100')
}