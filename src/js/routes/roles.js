import express from 'express';
import * as rolesControllers from '../controllers/roles-controllers.js';
const router = express.Router();

router.get('/roles/:id', rolesControllers.getRoleById);
router.get('/roles', rolesControllers.getAllRoles);

router.post('/roles', rolesControllers.postRole);

router.put('/roles/:id', rolesControllers.putRoleById);

router.delete('/roles/:id', rolesControllers.deleteRoleById);
router.delete('/roles', rolesControllers.deleteAllRoles);

export default router;