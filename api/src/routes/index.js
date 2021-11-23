const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activitiesRoute = require('./activities');
const countriesRoute = require('./countries');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activities', activitiesRoute);
router.use('/countries', countriesRoute);

module.exports = router;
