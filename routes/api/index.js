const APIRouter = require('express').Router();
APIRouter.use('/transport', require('./transport'));
APIRouter.use('/food', require('./food'));
APIRouter.use('/festivals', require('./festivals'));
APIRouter.use('/beaches', require('./beaches'));
APIRouter.use('/heritage', require('./heritage'));
APIRouter.use('/hotels', require('./hotels'));
APIRouter.use('/register', require('./register'));
APIRouter.use('/login', require('./login'));

module.exports = APIRouter;
