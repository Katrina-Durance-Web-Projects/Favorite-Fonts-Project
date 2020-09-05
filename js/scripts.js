// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

var previewText = document.getElementById('previewText');
previewText.onkeyup = function(){
    document.getElementById('preview-text-cambria').innerHTML = this.value;
    document.getElementById('preview-text-calibri').innerHTML = this.value;
    document.getElementById('preview-text-georgia').innerHTML = this.value;
    document.getElementById('preview-text-arial').innerHTML = this.value;
    document.getElementById('preview-text-times').innerHTML = this.value;
    document.getElementById('preview-text-papyrus').innerHTML = this.value;
    document.getElementById('preview-text-courier').innerHTML = this.value;
    document.getElementById('preview-text-tahoma').innerHTML = this.value;
    document.getElementById('preview-text-helvetica').innerHTML = this.value;
    document.getElementById('preview-text-impact').innerHTML = this.value;
}