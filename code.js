function toggle() { 
    var mode = document.getElementsByTagName('link')[0]; 
    if (mode.getAttribute('href') == 'style_light.css') { 
        mode.setAttribute('href', 'style_dark.css'); 
    } else { 
        mode.setAttribute('href', 'style_light.css'); 
    } 
} 
function resume() {
    document.getElementById('resume').addEventListener('click', function() {
        var pdfFilePath = 'resume.pdf';
        window.open(pdfFilePath, '_blank');
    });
}