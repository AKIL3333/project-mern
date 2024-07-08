const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors(
  {
    origin: ["https;//project-mern1.vercel.app"],
    methods: {"POST","GET"},
    credentials:true
  }
  ));
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/petproducts', require('./routes/api/petproducts'));
app.use('/api/pets', require('./routes/api/pets'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
