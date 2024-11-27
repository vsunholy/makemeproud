document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://in3.dev/inv/";
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Set invoice details
      document.getElementById("invoice-number").textContent = data.number;
      document.getElementById("invoice-date").textContent = data.date || "N/A";
      document.getElementById("due-date").textContent = data.due_date || "N/A";
      
      const buyer = data.company?.buyer || {};
      const seller = data.company?.seller || {};
      document.getElementById("buyer").innerHTML = `
        <strong>${buyer.name || "N/A"}</strong><br>
        ${buyer.address || "N/A"}<br>
        Kodas: ${buyer.code || "N/A"}<br>
        PVM: ${buyer.vat || "N/A"}<br>
        Tel: ${buyer.phone || "N/A"}<br>
        El. paštas: ${buyer.email || "N/A"}
      `;
      document.getElementById("seller").innerHTML = `
        <strong>${seller.name || "N/A"}</strong><br>
        ${seller.address || "N/A"}<br>
        Kodas: ${seller.code || "N/A"}<br>
        PVM: ${seller.vat || "N/A"}<br>
        Tel: ${seller.phone || "N/A"}<br>
        El. paštas: ${seller.email || "N/A"}
      `;

  
      // Populate items and calculate totals
      const itemsList = document.getElementById("items-list");
      let subtotal = 0;
  
      data.items.forEach(item => {
        const description = item.description || "Unnamed item";
        const itemName = item.name || "Unnamed item";
        const itemQuantity = item.quantity || 0;
        const itemPrice = item.price || 0;
        const discount = item.discount || { type: "none", value: 0 };
  
        let discountAmount = 0;
  
        if (discount.type === "percentage") {
          discountAmount = -(itemPrice * (discount.value / 100));
        } else if (discount.type === "fixed") {
          discountAmount = -discount.value;
        }
  
        const totalPrice = (itemPrice + discountAmount) * itemQuantity;
  
        // Ensure subtotal only adds valid numbers
        subtotal += isNaN(totalPrice) ? 0 : totalPrice;
  
        const itemRow = document.createElement("tr");
  
        itemRow.innerHTML = `
          <td>${description}</td>
          <td>${itemQuantity}</td>
          <td>${itemPrice.toFixed(2)} €</td>
          <td>${discountAmount !== 0 ? discountAmount.toFixed(2) + " €" : "-"}</td>
          <td>${totalPrice.toFixed(2)} €</td>
        `;
  
        itemsList.appendChild(itemRow);
      });
  
      const shipping = data.shippingPrice || 0;
      const vat = (subtotal + shipping) * 0.21;
      const total = subtotal + shipping + vat;
  
      // Display calculated totals
      document.getElementById("subtotal").textContent = `${subtotal.toFixed(2)} €`;
      document.getElementById("shipping").textContent = `${shipping.toFixed(2)} €`;
      document.getElementById("vat").textContent = `${vat.toFixed(2)} €`;
      document.getElementById("total").textContent = `${total.toFixed(2)} €`;
    } catch (error) {
      console.error("Failed to fetch or process invoice data:", error);
    }
  });
  
  