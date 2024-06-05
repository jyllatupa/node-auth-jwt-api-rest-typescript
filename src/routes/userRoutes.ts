import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import { verify, decode } from './../../node_modules/@types/jsonwebtoken/index.d';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/usersController';

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

// MIDDLEWARE de JWT para er si estamos autenticados
const autenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({error: 'No autorizado'})
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err){
            console.log('Error en la autenticación: ', err)
            return res.status(403).json({ error: 'No tienes acceso a este recurso'})
        }

        next();
    })
}

router.post('/', autenticateToken, createUser)
router.get('/', autenticateToken, getAllUser)
router.get('/:id', autenticateToken, getUserById)
router.put('/:id', autenticateToken, updateUser)
router.delete('/:id', autenticateToken, deleteUser)

export default router;