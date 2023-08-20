import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() =>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is connected');
        return;
    }
    try {
        mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'share prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        
    }
}