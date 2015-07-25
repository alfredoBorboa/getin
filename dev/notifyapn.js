var apn = require('apn');

var options = { };

var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device("6052ecf66ac10c9d71a907a5be88702081c9c0641cae9561f335ed3590678df8");

var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
note.sound = "ping.aiff";
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {'messageFrom': 'Caroline'};

apnConnection.pushNotification(note, myDevice);
