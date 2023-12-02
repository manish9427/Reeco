import React, { useState } from "react";
import "./ProductTable.css";
import { FaReceipt, FaSearch, FaCheck, FaTimes, FaEdit } from "react-icons/fa";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      productName: "Product 1",
      brand: "Brand A",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://drive.google.com/file/d/1uX90Px3eYemFyDltnfEHcdbocnUZBRy5/view?usp=sharing",
    },
    // ... (other products with imageUrl property)
  ]);

  const handleApprove = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = "Approved";
    setProducts(updatedProducts);
  };

  const handleMarkMissing = (index, urgent = false) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = urgent ? "Missing - Urgent" : "Missing";
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    console.log(`Editing product at index ${index}`);
    // Implement logic to open an edit popup for the selected product
    // You can use a state variable to manage the visibility of the edit popup
  };

  return (
    <div>
      <div>
        <div>
          <input type="text" placeholder="Search..." />
          <span>
            <FaSearch />
          </span>
          <button>Add Item</button>
          <button>
            <FaReceipt />
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.imageUrl}
                  alt={`Product ${index + 1}`}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
              <td>{product.status}</td>
              <td>
                <button onClick={() => handleApprove(index)}>
                  <FaCheck />
                </button>
                <button onClick={() => handleMarkMissing(index, false)}>
                  <FaTimes />
                </button>
                <button onClick={() => handleMarkMissing(index, true)}>
                  <FaTimes /> (Urgent)
                </button>
                <button onClick={() => handleEdit(index)}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
