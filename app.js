function caesarCipher(s, k){

    var newMsg ='';

    var arr = [];

    for (let i = 0; i < s.length; i++) {
        var e = s.charCodeAt(i);
        arr.push(e);
    }

    for (let j = 0; j < arr.length; j++) {
        if ((66<arr[j] & arr[j]<92) || (96<arr[j] & arr[j]<123)){

            var temp = arr[j] + k;

            if(temp> 122){
                newMsg =newMsg + String.fromCharCode(temp - 26 );
            }else{
                newMsg =newMsg + String.fromCharCode(temp);
            }
            
        }else{
            newMsg =newMsg + String.fromCharCode(arr[j]);
        }  
    }
    return newMsg;
}

var msg1 = caesarCipher("There is s-a-starman-waiting-in-the-sky",3);
console.log(msg1);

var msg2 = caesarCipher("middle-Outz",2);
console.log(msg2);