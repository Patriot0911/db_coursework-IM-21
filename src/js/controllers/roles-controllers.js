import { getMySQLRoles, getMySQLRolePermissions } from '../mysql/get-data.js';
import { insertMySQLRole } from '../mysql/insert-data.js';
import { updateMySQLRole } from '../mysql/update-data.js';
import {
    deleteMySQLRoles,
    deleteMySQLRolePermissions,
    deleteMySQLUsersWithRole
} from '../mysql/delete-data.js';

export const getRoleById = async (req, res) => {
    const roleId = req.params.id;
    const roleResponse = await getMySQLRoles(roleId);
    if(roleResponse.dbError)
        return res.status(500).send(`Role error:\n` + roleResponse.dbResponse);
    if(!roleResponse.dbResponse || roleResponse.dbResponse.length < 1)
        return res.status(204).send('No role found');
    const permissionsResponse = await getMySQLRolePermissions(roleId);
    if(permissionsResponse.dbError)
        return res.status(500).send(`Permissions error:\n` + permissionsResponse.dbResponse);
    res.status(200)
        .json({
            ...roleResponse.dbResponse[0],
            permissions: permissionsResponse.dbResponse
        });
};

export const getAllRoles = async (_, res) => {
    const {
        dbError,
        dbResponse
    } = await getMySQLRoles();
    if(dbError)
        return res.status(500).send(dbResponse);
    res.status(200).json(dbResponse);
};

export const postRole = async (req, res) => {
    const roleInfo = req.body;
    if(!roleInfo.name)
        return res.status(400).send('To create a role, you must specify a name');
    const {
        dbError,
        dbResponse
    } = await insertMySQLRole(roleInfo);
    if(dbError)
        return res.status(500).send(dbResponse);
    res.status(201)
        .json({
            id: dbResponse.insertId,
            name: roleInfo.name,
            description: roleInfo.description
        });
};

export const putRoleById = async (req, res) => {
    const roleData = req.body;
    const roleId = req.params.id;
    if(!roleData)
        return res.status(400).send('Cannot find request param `id`');
    const {
        dbError,
        dbResponse
    } = await updateMySQLRole(roleData, roleId);
    if(dbError)
        return res.status(500).send(dbResponse);
    res.status(200)
        .json(dbResponse);
};

export const deleteRoleById = async (req, res) => {
    const roleId = req.params.id;
    if(!roleId)
        return res.status(400).send('Cannot find request param `id`');
    const deleteAllData = req.body.all;
    if(deleteAllData) {
        const permissionsResponse = await deleteMySQLRolePermissions(roleId);
        if(permissionsResponse.dbError)
            return res.status(500).send(`Permissions error:\n` + permissionsResponse.dbResponse);
        const usersResponse = await deleteMySQLUsersWithRole(roleId);
        if(usersResponse.dbError)
            return res.status(500).send(`Users error:\n` + usersResponse.dbResponse);
    };
    const rolesResponse = await deleteMySQLRoles(roleId);
    if(rolesResponse.dbError)
        return res.status(500).send(rolesResponse.dbResponse);
    res.status(200)
        .json(rolesResponse.dbResponse);
};

export const deleteAllRoles = async (_, res) => {
    const {
        dbError,
        dbResponse
    } = await deleteMySQLRoles();
    if(dbError)
        return res.status(500).send(dbResponse);
    res.status(200)
        .json(dbResponse);
};