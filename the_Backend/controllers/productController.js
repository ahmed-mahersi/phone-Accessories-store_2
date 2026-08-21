import PRODUCT from '../models/product.js';



export const getAllProducts = async (req, res) => {

  try {

    const products = await PRODUCT.findAll();

    res.status(200).json(products);

  } catch (error) {

    console.error('Error fetching products:', error);
    
    res.status(500).json({ message: 'Server Error: Could not fetch products' });
  }
};


export const getProductById = async (req, res) => {

  try {

    const product = await PRODUCT.findByPk(req.params.id);


    if (!product) {

      return res.status(404).json({ message: 'Product not found' });

    }


    res.status(200).json(product);

  } catch (error) {

    console.error('Error fetching product:', error);

    
    res.status(500).json({ message: 'Server Error: Could not fetch product' });

  }
};




export const createProduct = async (req, res) => {

  try {

    const { name, description, price, stockQuantity } = req.body;


    
    if (!name || !price) {
      
      return res.status(400).json({ message: 'partName and price are required fields.' });
    
    }

    
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

   
    const newProduct = await PRODUCT.create({
     
      name,
     
      description,
     
      price,
     
      stockQuantity: stockQuantity || 0,
     
      imageUrl
   
    });

    
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  
  } catch (error) {
   
    console.error('Error creating product:', error);
   
    res.status(500).json({ message: 'Server Error: Could not create product' });
 
  }
};






export const updateProduct = async (req, res) => {
  try {

    const productId = req.params.id;

    const { name, description, price, stockQuantity, imageUrl } = req.body;

    const product = await PRODUCT.findByPk(productId);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

   
    await product.update({

      name: name || product.name,

      description: description !== undefined ? description : product.description,

      price: price || product.price,

      stockQuantity: stockQuantity !== undefined ? stockQuantity : product.stockQuantity,

      imageUrl: imageUrl !== undefined ? imageUrl : product.imageUrl

    });



    res.status(200).json({ message: 'Product updated successfully', product });

  } catch (error) {

    console.error('Error updating product:', error);

    res.status(500).json({ message: 'Server Error: Could not update product' });

  }
};






export const deleteProduct = async (req, res) => {


  try {

    const productId = req.params.id;

    const product = await PRODUCT.findByPk(productId);


    if (!product) {

      return res.status(404).json({ message: 'Product not found' });
    }


    await product.destroy();

   
    res.status(200).json({ message: 'Product deleted successfully' });
  
} catch (error) {

    console.error('Error deleting product:', error);

    res.status(500).json({ message: 'Server Error: Could not delete product' });
  }
};













