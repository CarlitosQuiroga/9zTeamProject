function validationsLogin() {

    let userN = document.forms["formLogin"]["userN"].value;
    let passW = document.forms["formLogin"]["passW"].value;

    let userAcc = ['Admin', 'Estudiante', 'Profesor', 'Martin'];
    let userPass = ['1234', '12345', '1','123'];

    let autenticado = false;
    var token;

    var tokG = function () {
        token = Math.random().toString(36).substr(2);
    };

    for(var i = 0; i < userAcc.length; i++) {
        if (userAcc[i] == userN && userPass[i] == passW) {
            tokG();
            autenticado = true;
            localStorage.setItem('Token user: ', token)
            break;
        }
    }
    if (autenticado) {
    location.href='http://127.0.0.1:5500/index.html'
    }  else {
            alert("Incorrecto")
    }
}