var gcm = require('node-gcm');
var message = new gcm.Message();

//API Server Key
var sender = new gcm.Sender('AIzaSyC7jTP5g4fEKjhv1B5Tdaoms0ahifhoQgY');
var registrationIds = [];

// Value the payload data to send...
message.addData('message',"Prueba de mensaje push GETIN");
message.addData('title','Push Getin' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

// At least one reg id required
registrationIds.push('APA91bFf8P_2i6vdZl2DxQn2hoMGShRjE0n2G4jc4n6OVk46JkUfV9fd5tpt7pMD1h7DMDR_0qxmRxazFsls7ZbUCEZNT7UrlVQs6VIhubIDjyX8YRn5pbt1Izg3Koa0Mksc-TKaqKWD');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
