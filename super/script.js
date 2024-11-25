// Fetch data from API
fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => {
        const invoiceNumber = data.number;
        const invoiceDate = data.date;
        const dueDate = data.due_date;
        const buyer = data.company.buyer;
        const seller = data.company.seller;
        const items = data.items;
        const shippingPrice = data.shippingPrice;

        // Display invoice details
        document.getElementById('invoice-details').innerHTML = `
            <p><strong>Sąskaitos numeris:</strong> ${invoiceNumber}</p>
            <p><strong>Data:</strong> ${invoiceDate}</p>
            <p><strong>Mokėjimo terminas:</strong> ${dueDate}</p>
        `;

        // Display buyer details
        document.getElementById('buyer-details').innerHTML = `
            ${buyer.name}<br>${buyer.address}<br>Telefonas: ${buyer.phone}<br>Email: ${buyer.email}
        `;

        // Display seller details
        document.getElementById('seller-details').innerHTML = `
            ${seller.name}<br>${seller.address}<br>Telefonas: ${seller.phone}<br>Email: ${seller.email}
        `;

        let subtotal = shippingPrice;

        items.forEach(item => {
            const totalPrice = item.quantity * item.price;

            // Calculate discount if any
            let discountValue = 0; // Default no discount
            let discountText = "No discount";

            if (item.discount && item.discount.length > 0) {
                item.discount.forEach(discount => {
                    if (discount.type === "fixed") {
                        discountValue += discount.value; // Fixed discount
                        discountText = `-${discount.value.toFixed(2)} €`;
                    } else if (discount.type === "percentage") {
                        const percentageDiscount = (totalPrice * (discount.value / 100));
                        discountValue += percentageDiscount; // Percentage discount
                        discountText = `-${discount.value}% (${percentageDiscount.toFixed(2)} €)`;
                    }
                });
            }

            const finalPrice = totalPrice - discountValue; // Apply discount to total price

            subtotal += finalPrice;

            document.getElementById('items').innerHTML += `
                <tr>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${discountText}</td>
                    <td>${finalPrice.toFixed(2)}</td>
                </tr>`;
        });

        const tax = subtotal * 0.21; // Calculate VAT
        const total = subtotal + tax; // Total amount including VAT

        document.getElementById('shippingPrice').innerText = shippingPrice.toFixed(2);
        document.getElementById('subtotal').innerText = subtotal.toFixed(2);
        document.getElementById('tax').innerText = tax.toFixed(2);
        document.getElementById('total').innerText = total.toFixed(2);
    })
    .catch(error => console.error('Error fetching invoice data:', error));