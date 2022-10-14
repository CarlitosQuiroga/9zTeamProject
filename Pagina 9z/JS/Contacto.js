function validations() {
    var vRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let fVNo = document.forms["formContact"]["nombre"].value;
    let fVAp = document.forms["formContact"]["apellido"].value;
    let fVTa = document.forms["formContact"]["textArea"].value;
    let fVEm = document.forms["formContact"]["email"];
    if (fVNo == '' || fVAp == '' || !fVEm.value.match(vRegex) || fVTa == '') {
        alert("Falta completar los campos!");
        return false;
    } else if (!(fVNo == '' || fVAp == '' || !fVEm.value.match(vRegex) || fVTa == '')) {
        alert("Formulario enviado!")
    }
}