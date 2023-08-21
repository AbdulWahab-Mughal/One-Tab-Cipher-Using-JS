function OneCipher(){
    let plainText = document.getElementById("plain").value;
    let KeyText = document.getElementById("key").value;
    let encrypted ="";
    if (plainText.length !== KeyText.length) {
        
        alert("lenght Mismatched");
    }
    if(plainText == "" || KeyText ==""){
        alert("Fill Both Plain And Key Text");

    } 
    else if (plainText.length === KeyText.length) {
        for (let i = 0; i < plainText.length; i++) {
            let P = plainText.charCodeAt(i);
            let K = KeyText.charCodeAt(i);
            let encryptedChar = (P ^ K) % 26 + 65;
            encrypted += String.fromCharCode(encryptedChar);
        }
        document.getElementById("cipher").innerHTML= encrypted;
    }
}
            