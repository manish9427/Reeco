import React, { useState } from "react";
import "./ProductTable.css";
import { FaReceipt, FaSearch, FaCheck, FaTimes, FaEdit } from "react-icons/fa";

// MissingPopup component
const MissingPopup = ({ onMarkMissing }) => {
  return (
    <div className="missing-popup">
      <p>Mark as Missing - Urgent?</p>
      <button onClick={() => onMarkMissing(true)}>Yes</button>
      <button onClick={() => onMarkMissing(false)}>No</button>
    </div>
  );
};

const ProductTable = () => {
  const [products, setProducts] = useState([
    // ... your product data ...
    {
      productName: "Product 1",
      brand: "Brand A",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://github.com/manish9427/Reeco/assets/107556633/ee15d89a-4e47-44c3-8237-a2e2171b5e18",
    },
    {
      productName: "Product 2",
      brand: "Brand B",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://github.com/manish9427/Reeco/assets/107556633/222857e6-8e00-4e21-9f5b-490fff868671",
    },
    {
      productName: "Product 3",
      brand: "Brand A",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://github.com/manish9427/Reeco/assets/107556633/ee15d89a-4e47-44c3-8237-a2e2171b5e18",
    },
    {
      productName: "Product 4",
      brand: "Brand B",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://github.com/manish9427/Reeco/assets/107556633/222857e6-8e00-4e21-9f5b-490fff868671",
    },
    {
      productName: "Product 5",
      brand: "Brand A",
      price: 20,
      quantity: 2,
      total: 40,
      status: "Pending",
      imageUrl:
        "https://github.com/manish9427/Reeco/assets/107556633/ee15d89a-4e47-44c3-8237-a2e2171b5e18",
    },
  ]);
  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleApprove = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = "Approved";
    setProducts(updatedProducts);
  };

  const handleMarkMissing = (index, urgent = false) => {
    setSelectedProductIndex(index);
    setShowMissingPopup(true);
  };

  const handleEdit = (index) => {
    console.log(`Editing product at index ${index}`);
    // Implement logic to open an edit popup for the selected product
    // You can use a state variable to manage the visibility of the edit popup
  };

  const onMarkMissing = (urgent) => {
    const updatedProducts = [...products];
    updatedProducts[selectedProductIndex].status = urgent
      ? "Missing - Urgent"
      : "Missing";
    setProducts(updatedProducts);
  };

  const toggleMissingPopup = (index) => {
    setSelectedProductIndex(index);
    setShowMissingPopup(!showMissingPopup);
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="first">
          <div>
            <input type="text" placeholder="Search..." />
            <span>
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="second">
          <button className="first-button">Add Item</button>
          <button>
            <FaReceipt />
          </button>
        </div>
      </div>
      <div>
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
                <td data-status={product.status}>{product.status}</td>
                <td>
                  <button onClick={() => handleApprove(index)}>
                    <FaCheck />
                  </button>
                  <button onClick={() => handleMarkMissing(index, false)}>
                    <FaTimes />
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
      {showMissingPopup && (
        <div className="overlay">
          <MissingPopup
            onMarkMissing={(urgent) => {
              onMarkMissing(urgent);
              toggleMissingPopup(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductTable;
