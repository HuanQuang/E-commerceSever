import express from "express";
const account = express.Router()
import { getAccount, createAccount, updateAccount, deleteAccount, login, register } from '../controllers/account.controller.js'

account.get('/', getAccount)
account.post('/', createAccount)
account.put('/',updateAccount )
account.delete('/:id', deleteAccount)
export default account

account.post('/login', login)
account.post('/register', register)