const {Router} = require ('express');
const router = Router();

router.get('/test', (req,res) => {
	const data = {
        "name": "test",
        "description":"testing"
    };
    res.json(data);
});

module.exports = router;