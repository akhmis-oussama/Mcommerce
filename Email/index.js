const express = require("express");
const amqp = require('amqplib');
const sendEmail = require("./emailConfig");
require('dotenv').config();

const queueName = 'confirm_email';

let channel;
async function connect() {
  const amqpServer = process.env.RABBITMQ_URL;
  const connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue(queueName);
}

connect().then(() => {
  channel.consume(queueName, (data) => {
    const { email } = JSON.parse(data.content);
    console.log(`sending email to ` + email + ` in progress...`);
    sendEmail(email);  
    console.log(`email sent to ` + email + ` !`);
    channel.ack(data);
  });
});

const app = express();

app.use(express.json());

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Email Service at ${port}`);
});