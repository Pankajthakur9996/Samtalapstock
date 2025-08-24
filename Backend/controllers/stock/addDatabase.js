const productSchema = require('../../models/store');

const addProduct = async (req, res) => {
  try {
    const { name, brand, category, price, ram, screen, storage, processor } = req.body;
    console.log("Body:", req.body);
    console.log("Files:", req.files);
    const uploadedImages = req.files
      ? req.files.map(file => file.path || file.url)
      : [];

    const productData = {
      name,
      brand,
      category,
      price,
      images: uploadedImages,
    };

    if (category !== "accessories") {
      productData.specs = { ram, screen, storage, processor };
    }

    const newProduct = new productSchema(productData);
    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });

  } catch (error) {
    console.error("Add Product Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding product",
      error: error.message,
    });
  }
};
  const deleteProduct = async (req, res) => {
    console.log(req.params);
  const  {_id}  = req.params
  console.log(_id)

  try {
    const deletedProduct1 = await productSchema.findByIdAndDelete(_id);
    console.log(deletedProduct1);

    if (!deletedProduct1) {
      return res.status(404).json({
        success: false,
        message: "product not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "product deleted successfully",
      product: deletedProduct1
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
const editProduct = async (req, res) => {
  try {
    const {_id } = req.params;
    const updates = req.body ;

    const product = await productSchema.findById(_id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Images update
    if (req.files && req.files.length > 0) {
      const uploadedImages = req.files.map(file => file.path || file.secure_url);
      product.images = uploadedImages; // overwrite old images
    }

    // Update other fields
    Object.keys(updates).forEach(key => {
      if (key !== "_id" && key !== "__v" && updates[key] != null) {
        if (key === "specs") {
          try {
            const specsObj = typeof updates.specs === "string" ? JSON.parse(updates.specs) : updates.specs;
            product.specs = { ...product.specs.toObject(), ...specsObj };
          } catch (err) {
            console.log("Invalid specs format");
          }
        } else {
          product[key] = updates[key];
        }
      }
    });

    await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      data: product
    });

  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product", error });
  }
};

module.exports = {addProduct,deleteProduct,editProduct};
