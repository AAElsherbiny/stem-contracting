require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const projectsRoutes = require('./routes/projects');
app.use('/api/projects', projectsRoutes);

const servicesRoutes = require('./routes/services');
const inquiriesRoutes = require('./routes/inquiries');
app.use('/api/services', servicesRoutes);
app.use('/api/inquiries', inquiriesRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
