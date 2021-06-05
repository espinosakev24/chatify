import express from 'express';

const router = express();

router.get('/', () => {
  console.log('Return all rooms created');
});

router.post('/', () => {
  console.log('Creates a new room');
});

export default router;
