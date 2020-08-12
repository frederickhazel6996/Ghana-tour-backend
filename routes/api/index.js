const APIRouter = require('express').Router();
APIRouter.use('/transport', require('./transport'));
APIRouter.use('/food', require('./food'));
APIRouter.use('/festivals', require('./festivals'));
APIRouter.use('/beaches', require('./beaches'));

module.exports = APIRouter;
