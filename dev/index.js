
var express = require( 'express' );
var Firebase = require( 'firebase' );
var app = express();

var myFirebaseRef = new Firebase("https://messaginggetin.firebaseio.com/");

var stepinsSection = myFirebaseRef.child( "stepins" );

app.use( express.static(__dirname + '/public'));

var server = app.listen( 3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log( 'Example app listening at http://%s', port );
});
