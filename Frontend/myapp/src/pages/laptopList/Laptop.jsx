import { useEffect, useState } from "react";
import axios from "axios";

export const Laptop = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptopData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.message)) {
          setProduct(response.data.message);
        } else {
          setError("Laptops data not found in API response.");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to fetch laptops.");
      } finally {
        setLoading(false);
      }
    };

    fetchLaptopData();
  }, []);

  if (loading) return <h2>Loading laptops...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <>
      <h1>Laptops</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {product.map((item, index) => (
        
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            {/* ✅ Image Display */}
            {item.images?.[0] && (
              <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            )}

            <h3>{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Price: ₹{item.price}</p>
            <p>RAM: {item.specs?.ram}</p>
            <p>Processor: {item.specs?.processor}</p>
          </div>
        ))}
      </div>
    </>
  );
};
