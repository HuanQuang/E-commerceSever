import  account from '../modals/account.modal.js'
import jwt from 'jsonwebtoken'

export const getAccount = async (req, res) => {
    try {
        const listAccount = await account.find();
        return res.status(200).json(listAccount)
    }
    catch(err) {
        return res.status(500).json({err: err})
    }
}
export const createAccount = async (req, res) => {
    try {
        const newAccount = req.body
        const create = new account(newAccount)
        await create.save()
        return res.status(200).json("Đăng kí thành công")
    } catch (err) {
        return res.status(500).json(err)
    }
}

export const updateAccount = async (req, res) => {
    try {
        const newUpdate = req.body
        const update = account.findOneAndUpdate(newUpdate._id, newUpdate)
        await update.save()
        return res.status(200).json("Cập nhật thành công")

    } catch (error) {
        return res.status(500).json(error)
        
    }
}
export const deleteAccount = async (req, res) => {
    try {
        const deleteAccount = req.params._id
        const toDelete = account.findByIdAndDelete(deleteAccount)
        await toDelete.save()
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const login = async (req, res) => {
        const user = req.body.user
        const password = req.body.password
    try {
        const checkAccount = await account.findOne({user: user, password: password})
        if(checkAccount){
            console.log(checkAccount)
            const token = jwt.sign({id:checkAccount._id},'haibara',)
            return res.status(200).json({
                message: 'Đăng nhập thành công',
                token: token,
                user: checkAccount.user})
        } else return res.status(200).json({
            message: 'Sai tên đăng nhập hoặc mật khẩu',
            err: err
        })
    }
    catch (error){
        return res.status(500).json(error)
    }
}
export const register =  async (req, res) => {
    const newData = req.body
    try {
        let checkAccount = await account.findOne({ user: newData.user })
        if(checkAccount){
            return res.status(200).json("Tài khoản đã tồn tại")
        }
        else {
            const creatAccount = new account(newData)
            await creatAccount.save()
            return res.status(200).json("Đăng kí thành công")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}