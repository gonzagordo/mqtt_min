let client;

function connect() {
    const broker = document.getElementById('broker').value;
    const topic = document.getElementById('topic').value;

    client = mqtt.connect(broker);

    client.on('connect', function () {
        console.log('Connected to broker');
        client.subscribe(topic, function (err) {
            if (!err) {
                console.log('Subscribed to topic:', topic);
            } else {
                console.error('Subscription error:', err);
            }
        });
    });

    client.on('message', function (topic, message) {
        document.getElementById('message').textContent = message.toString();
    });

    client.on('error', function (error) {
        console.error('Connection error:', error);
    });
}
