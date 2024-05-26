function GetElementById() {
    if (document.getElementById("text").innerHTML === 'Help me to run') {
        document.getElementById("image").src = "./asset/theiflost.png"
        alert('Thanks to help me')
        document.getElementById("text").innerHTML = 'Caught the theif'
    }
    else {
        document.getElementById("image").src = './asset/theif.png'
        alert('I am wasted')
        document.getElementById("text").innerHTML = 'Help me to run'
    }
}