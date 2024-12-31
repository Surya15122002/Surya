document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href ='assets/updated resume.pdf'; 
    link.download = 'updated Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
