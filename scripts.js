document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.includes('.html')) {
            window.location.href = href;
        } else {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Handle quantity selector buttons
document.querySelectorAll('.quantity-selector button').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        let value = parseInt(input.value) || 1;
        if (this.textContent === '+') {
            input.value = value + 1;
        } else if (this.textContent === '-' && value > 1) {
            input.value = value - 1;
        }
    });
});

// Handle Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const pieItem = this.closest('.pie-item');
        const name = pieItem.querySelector('h3').textContent;
        const price = parseFloat(pieItem.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(pieItem.querySelector('.quantity-selector input').value);
        const cartItem = { name, price, quantity, total: price * quantity };

        // Get existing cart from localStorage or initialize empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.total = existingItem.price * existingItem.quantity;
        } else {
            cart.push(cartItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} (${quantity}) added to cart!`);
    });
});

// Pie Carousel Functionality
const pieData = {
    apple: {
        name: "Apple Pie",
        image: "Apple_Pie.png",
        description: "Classic homemade apple pie with a flaky, buttery crust filled with perfectly spiced cinnamon apples. A timeless favorite that brings warmth to every bite."
    },
    blackberry: {
        name: "Blackberry Pie",
        image: "Blackberry_Pie.png",
        description: "Sweet and tart blackberries nestled in our signature butter crust. Each slice bursts with fresh, juicy flavor that captures the essence of summer."
    },
    cherry: {
        name: "Cherry Pie",
        image: "Apple_Pie_Cut.png",
        description: "Luscious cherry filling wrapped in golden, flaky pastry. The perfect balance of sweet and tart in every delicious bite."
    },
    pecan: {
        name: "Pecan Pie",
        image: "Apple_Pie.png",
        description: "Rich, gooey pecan filling with crunchy pecans on top. A Southern classic that's irresistibly sweet and satisfying."
    }
};

const pieModal = document.getElementById('pieModal');
const modalPieImage = document.getElementById('modalPieImage');
const modalPieTitle = document.getElementById('modalPieTitle');
const modalPieDescription = document.getElementById('modalPieDescription');

// Handle pie thumbnail clicks
document.querySelectorAll('.pie-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const pieType = this.getAttribute('data-pie');
        const pie = pieData[pieType];
        
        // Update modal content
        modalPieImage.src = pie.image;
        modalPieTitle.textContent = pie.name;
        modalPieDescription.textContent = pie.description;
        
        // Show modal
        pieModal.classList.add('show');
        
        // Update active state
        document.querySelectorAll('.pie-thumb').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Close modal when clicking anywhere on the modal background
pieModal.addEventListener('click', function(e) {
    pieModal.classList.remove('show');
});

// Prevent modal from closing when clicking the content
document.querySelector('.pie-modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Close modal when clicking the X button
document.querySelector('.modal-close').addEventListener('click', function() {
    pieModal.classList.remove('show');
});