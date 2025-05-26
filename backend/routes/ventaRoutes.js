import express from 'express';
import { obtenerVentas, registrarVenta, } from '../controllers/ventaController.js';

const router = express.Router();

router.get('/', obtenerVentas);
router.post('/', registrarVenta);

export default router;
