
var Firebase = require( 'firebase' );

var myFirebaseRef = new Firebase("https://messaginggetin.firebaseio.com/");

var stepinsSection = myFirebaseRef.child( "stepins" );

setInterval( function(){
stepinsSection.push({
    devicepushid: Math.round( Math.random() * 100000000 ),
    name: "John Doe",
    agerange: Math.round( Math.random() * 4 ),
    gender: Math.round( Math.random() * 1 ),
    distance: Math.round((Math.random() * 100) * 100) / 100 + "r",
    macaddress: genMAC(),
    time: Date(),
    idstore: Math.round( Math.random() * 100000 )
});
console.log( 'Stepin was simulated' );
}, 2000 );

function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress="";
    for (var i=0; i<6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random()*16));
        macAddress+=hexDigits.charAt(Math.round(Math.random()*16));
        if (i != 5) macAddress+=":";
    }

    return macAddress;
}
