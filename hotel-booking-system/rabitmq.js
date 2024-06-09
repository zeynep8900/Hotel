const amqp = require('amqplib');

// RabbitMQ bağlantı URL'si
const url = 'amqp://localhost';

// Mesaj gönderme fonksiyonu
async function sendMessage(queueName, message) {
  try {
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: false });
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent to ${queueName}: ${message}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { sendMessage };
