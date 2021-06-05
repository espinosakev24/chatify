import express from 'express';

const router = express.Router();

router.get('/:roomId', () => {
  console.log('Return messages from a specific room');
});

export default router;
