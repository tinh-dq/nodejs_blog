const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'education_dev';

async function connect() {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
}

module.exports = { connect };
