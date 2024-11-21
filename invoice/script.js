document.addEventListener('DOMContentLoaded', () => {
    fetch('https://in3.dev/inv/')
      .then(response => response.json())
      .then(data => renderInvoice(data))
      .catch(error => console.error('Error fetching the invoice data:', error));
      
  });
  
  function renderInvoice(data) {
    // Fill in general invoice information
    document.getElementById('invoice-number').textContent = data.number;
    document.getElementById('invoice-date').textContent = data.date;
    document.getElementById('due-date').textContent = data.due_date;
  
    // Fill in seller and buyer details
    const { seller, buyer } = data.company;
    Object.entries(seller).forEach(([key, value]) => {
      document.getElementById(`seller-${key}`).textContent = value;
    });
    Object.entries(buyer).forEach(([key, value]) => {
      document.getElementById(`buyer-${key}`).textContent = value;
    });
  
    // Render items
    const itemsList = document.getElementById('items-list');
    let subtotal = 0;
  
    data.items.forEach(item => {
        const discountAmount = calculateDiscount(item.price, item.quantity, item.discount);
        const itemTotal = (item.price * item.quantity) + discountAmount; // Apply discount to item total
      
        subtotal += itemTotal;
      
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.description}</td>
          <td>${item.quantity}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>${formatDiscount(item.discount)}</td>
          <td>${itemTotal.toFixed(2)}</td>
        `;
        itemsList.appendChild(row);
      });
  
    // Shipping and totals
    const shippingPrice = data.shippingPrice;
    const vat = subtotal * 0.21;
    const total = subtotal + shippingPrice + vat;
  
    document.getElementById('shipping-price').textContent = shippingPrice.toFixed(2);
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('vat').textContent = vat.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  function calculateDiscount(price, quantity, discounts) {
    let totalDiscount = 0;
  
    if (discounts && discounts.length > 0) {
      discounts.forEach(discount => {
        if (typeof discount === 'number') {
          // Fixed discount (e.g., -10)
          totalDiscount += discount;
        } else if (typeof discount === 'string' && discount.endsWith('%')) {
          // Percentage discount (e.g., "10%")
          const percentage = parseFloat(discount) / 100;
          totalDiscount += price * quantity * percentage;
        }
      });
    }
  
    return -totalDiscount; // Return negative value to indicate reduction
  }
  
  function formatDiscount(discounts) {
    if (discounts && discounts.length > 0) {
      return discounts.map(discount => (typeof discount === 'number' ? `${discount} €` : discount)).join(', ');
    } else
    return '-'; // No discount
  }
  