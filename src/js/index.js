import express from 'express';

import getRolesRouter from './routes/roles.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(getRolesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}\nhttp://localhost:${PORT}`);
});