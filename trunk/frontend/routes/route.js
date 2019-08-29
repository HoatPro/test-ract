// ---- API Routes ----
const express = require('express');
const router = express.Router();

// -------- NextJs API Routes --------
router.get(`*`,  (req, res, next) => {
    return app.getRequestHandler()  // where app is nextjs app object
});

module.exports = router;