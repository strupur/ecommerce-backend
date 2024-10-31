const Product = require('../models/product.model')


async function getProducts(req, res) {
    try {
        
        const products = await Product.find();

        
        if (products.length === 0) {
            return res.status(404).send({
                ok: false,
                message: "No se encontraron productos",
            });
        }

        
        return res.status(200).send({
            ok: true,
            message: "Productos obtenidos exitosamente",
            products,
        });

    } catch (error) {
        console.error(error);
        
        return res.status(500).send({
            ok: false,
            message: "Error al obtener los productos",
        });
    }
}

// async function getProducts(req, res) {
//     try {

//         const limit = parseInt(req.query.limit) || 3;
//         const skip = parseInt(req.query.skip) || 0;

//         const filter = [];

//         if (req.query.name) {
//             filter.push({ name: { $regex: req.query.name, $options: 'i' } });
//         }
        
//         if (req.query.min_price) {
//             filter.push({ price: { $gte: req.query.min_price } });
//         }
        

//         const query = filter.length > 0 ? { $and: filter } : {};

//         const products = await Product.find(query)

//             .select({ description: 0, __v: 0 })
//             .sort({ name: 1 })
//             .collation({ locale: 'es' })
//             .limit(limit)
//             .skip(limit * skip);


//         return res.status(200).send({
//             message: "Obtener todos los productos",
//             products
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ message: "Error al obtener el producto" });
//     }

// }



async function createProduct(req, res) {
    try {

        const product = new Product(req.body);

        if(req.file) {
            product.image = req.file.filename;
        }

        const newProduct = await product.save();

        return res.status(201).send({
            message: "Producto creado correctamente",
            product: newProduct

        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error al crear el producto" });

    }

}


async function getProductById(req, res) {
    try {
        const { id } = req.params;  // Obtener el ID de los parámetros de la ruta

        const product = await Product.findById(id);  // Buscar el producto en la base de datos

        if (!product) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue encontrado",
            product
        });

    } catch (error) {
        console.log(error);

        return res.status(500).send("Error al obtener el producto en la DB");
    }
}




async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue eliminado exitosamente",
            product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error al eliminar el producto en la DB",
            ok: false
        });
    }
}



async function updateProduct(req, res) {
    try {
        const { id } = req.params;  // Obtener el ID de los parámetros de la ruta
        const updateData = req.body; // Obtener los datos a actualizar desde el cuerpo de la solicitud

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue actualizado exitosamente",
            product: updatedProduct
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error al actualizar el producto en la DB",
            ok: false
        });
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct

}


