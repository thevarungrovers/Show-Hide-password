var pass = document.getElementById('pass')
var sw = document.getElementById('switch')

sw.addEventListener('click', function() {
    if(pass.type === "password")
    {
        // changing type of password field to text
        pass.type = "text"; 
    }
    else
    {
        pass.type = "password";
    }
})