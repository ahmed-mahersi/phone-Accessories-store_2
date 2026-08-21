import express from 'express'
import cors from 'cors'
import sequelize from './config/db.js';
import './models/index.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';



const app = express()


app.use(express.json())



app.use(cors())



app.use('/uploads', express.static('uploads'))   


app.use('/api/users', userRoutes)



app.use('/api/products', productRoutes)


const port = process.env.PORT


app.listen(port, async () => {

  console.log(`your server is running on : ${port}`);


  try {

    await sequelize.authenticate();

    console.log('MySQL Database connected successfully.');


    await sequelize.sync();

    console.log('Models synced successfully.');


  } catch (error) {
    
    console.error('Unable to connect to the database:', error);
  }
});