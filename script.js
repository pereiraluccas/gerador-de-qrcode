
document.getElementById('botao').addEventListener('click',()=>{
    var link = document.getElementById('link').value
    var API = 'https://qrickit.com/api/qr.php? d='
    var QRcode = API + link + '& qrsize=300'
    document.getElementById('imagem').innerHTML= `<img src="${QRcode}">`
    document.getElementById('link').value = ''
    
})


