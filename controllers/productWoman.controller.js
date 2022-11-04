import productWoman from '../modals/productWoman.modal.js'

export const getProduct = async (req, res) => {
    try {
        const product = await productWoman.find();
        return res.status(200).json(product)
    }
    catch(err) {
        return res.status(500).json({err: err})
    }
}
export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body
        const create = new productWoman(newProduct)
        await create.save()
        return res.status(200).json("Thành công thêm sản phẩm")
    } catch (err) {
        return res.status(500).json(err)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const newUpdate = req.body
        const update = productWoman.findOneAndUpdate(newUpdate._id, newUpdate)
        await update.save()
        return res.status(200).json("Thành công cập nhật sản phẩm")

    } catch (error) {
        return res.status(500).json(error)
        
    }
}
export const deleteProduct = async (req, res) => {
    try {
        deleteProduct = req.params._id
        const toDelete = productWoman.findByIdAndDelete(deleteProduct)
        await toDelete.save()
    } catch (error) {
        return res.status(500).json(error)
    }
}
