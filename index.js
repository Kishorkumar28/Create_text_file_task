const express = require('express');
const app = express();
const filesRouter = require('./routes/files');

app.use(express.json());
app.use('/api/files', filesRouter);

const PORT = process.env.PORT || 3000;
const HOSTNAME=process.env.HOSTNAME
app.listen(PORT,HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
});
