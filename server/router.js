const {Router} = require('express');

const router = Router();

router.get('/', ()=>{console.log('handler is runnig')}); // дописать путь

module.exports = router;