// VARANASI MODERN - PREMIUM CORE FRAMEWORK JS
// Handles Live Product Catalog, Full-Screen Search Modal, Live Cart, Wishlist, Auth, and Premium Interactive Feedback

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. PRODUCT DATABASE & SECTIONS
    // -------------------------------------------------------------
    const PRODUCTS = [
        {
            id: "heritage-bomber",
            title: "Heritage Silk Bomber",
            price: 38000,
            priceUSD: 450,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4pL0ljWZKfzyyy9PoonxgYbUMdHM_LnhdBjUlrYz8vktrZHyrJY85-RVIn3H7QSFFKk8dp94GCO2c7XiZsiQLGcPh4p1LWz4lKnL8FTzFdBV_3Qc51reaXx7m9OQwJ9ADsPXTU8Z7Urq7U5dQ7aQRbt6hoSPAQzb0tFyw9jQ77U7Alv24RtQQhHGgQthFIPCjanckYL6DaoX22ncf0nz9OA6KgkBXcOcy_naEm3IVHB2Z8pPG2klNK9Y1BY-kfqZZZprhdyihcvos",
            category: "Streetwear Luxe",
            url: "product.html"
        },
        {
            id: "brocade-hoodie",
            title: "Oversized Brocade Hoodie",
            price: 29000,
            priceUSD: 350,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm_5WVRgJTmfVFiX9B_ejuCp9aZ1gJ2LJPXvHci9JTsE6FDUrkXtlIV6G1B4KHIEBYME_pdGwNBHIOAAL8wOo-Rn0nMM_TOCr9lpOMbhWX2sgDfkFWjmnI1bbXtokMNRU2KsQh6CL2RKcbVVel1aiuoehKzQVoEQbsrubr8nHDb8eMagnmvL6Rz3ZJ7gol_zIQ0SO14gtST6j0b8nBAg3IO7ZHjel3PzVo9cpwiCWktqJvEMFvd7NoqesfVNGNuPEklz6gn2R-TQsQ",
            category: "Streetwear Luxe",
            url: "product.html"
        },
        {
            id: "denim-sherwani",
            title: "Loom Denim Sherwani",
            price: 46000,
            priceUSD: 550,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgi5ZwkWmeSfqHKyFwzlD8BwUrJsgyUnRGqJWykl6tyU27lnJC95VR1CZGmEqcalLDWpzByfjH4pE_L-639z8Wqa6hX0mw64UHndu8wgZXsN2WnY-9SQ8x8aHivJoWoejEGiDsPeVvKdr1XM0MQUpGVeObnJBa8SJtDC2ouUgiH7az2Hu9-rm-HNPBjzmoEJ4CVaV8OJkvx7T6NN42rxt_eCKCsrenPgW-9kYnmMGSEFGH5Qary8FGGnwcsmP5-IXa3zvUXmVtGXIJ",
            category: "Ethnic Couture",
            url: "product.html"
        },
        {
            id: "velvet-lehenga",
            title: "Varanasi Velvet Lehenga",
            price: 72000,
            priceUSD: 850,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEQp9wZ47wQ85UuM81p7p4Ww7Q33p-r7o_w2t5vS8Dk3p2v-Rj3H4j_8m7n9Q5p9W4G3p2v-Rj3H4j_8m7n9Q5p9W4G3p2vS",
            category: "Ethnic Couture",
            url: "product.html"
        },
        {
            id: "linen-tunic",
            title: "Draped Linen Tunic",
            price: 23000,
            priceUSD: 280,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0_L5n7F9S1k2_Z7e8E2fG5tW8nQ5p9W4G3p2vS8Dk3p2v-Rj3H4j_8m7n9Q5p9W4G3p2vS8Dk3p2vS8Dk3p2vS8Dk3p2vS",
            category: "Modern Utility",
            url: "product.html"
        },
        {
            id: "cargo-pants",
            title: "Brocade Cargo Pants",
            price: 32000,
            priceUSD: 320,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8_K5n7F9S1k2_Z7e8E2fG5tW8nQ5p9W4G3p2vS8Dk3p2v-Rj3H4j_8m7n9Q5p9W4G3p2vS8Dk3p2vS8Dk3p2vS8Dk3p2vS",
            category: "Modern Utility",
            url: "product.html"
        },
        {
            id: "silk-sari",
            title: "Royal Silk Sari",
            price: 80000,
            priceUSD: 950,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_gpj_F76_B3y6tMNoEVWouREoZoffVdsUSlxT9yNmWQwRO-CqEm117Q2uXT92pfqmwKQhjab9I8xeF2Y1GHZKsXDnostTR6910DypwililRyrORuBRtn1m4iC7F5eoKEWaFpEknH6LV_jJe6NAzlC0xRRM5R1PWGLDyYPGXP7dUHEhLtViBaKEgPUe6DgfBZWVaBB8IKAmyYLkX1Cdz0_eE4n-AgCk0qSha9sj8TSKrdre8WjS_wnHuwKoasSUV-X5aQz_geAItUM",
            category: "Craft Collections",
            url: "product.html"
        },
        {
            id: "zardozi-jacket",
            title: "Zardozi Embellished Jacket",
            price: 54000,
            priceUSD: 640,
            image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=800",
            category: "Streetwear Luxe",
            url: "product.html"
        },
        {
            id: "ikat-trousers",
            title: "Handloom Ikat Trousers",
            price: 18000,
            priceUSD: 215,
            image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800",
            category: "Modern Utility",
            url: "product.html"
        },
        {
            id: "bandhani-shirt",
            title: "Bandhani Silk Shirt",
            price: 26000,
            priceUSD: 310,
            image: "https://images.unsplash.com/photo-1604928141064-207cea6f5722?auto=format&fit=crop&q=80&w=800",
            category: "Ethnic Couture",
            url: "product.html"
        },
        {
            id: "chanderi-cape",
            title: "Chanderi Layered Cape",
            price: 35000,
            priceUSD: 420,
            image: "https://images.unsplash.com/photo-1583391733959-f5b3028d3921?auto=format&fit=crop&q=80&w=800",
            category: "Craft Collections",
            url: "product.html"
        },
        {
            id: "street-kurta",
            title: "Asymmetric Street Kurta",
            price: 21000,
            priceUSD: 250,
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
            category: "Streetwear Luxe",
            url: "product.html"
        },
        {
            id: "street-kurta",
            title: "Asymmetric Street Kurta",
            price: 21000,
            priceUSD: 250,
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
            category: "Streetwear Luxe",
            url: "product.html"
        }
    ];

    // Initialize Local Storage Databases if empty
    if (!localStorage.getItem("cart")) localStorage.setItem("cart", JSON.stringify([]));
    if (!localStorage.getItem("favorites")) localStorage.setItem("favorites", JSON.stringify([]));
    if (!localStorage.getItem("userLogged")) localStorage.setItem("userLogged", "false");

    // -------------------------------------------------------------
    // 2. INJECT LUXURY FULL-SCREEN SEARCH MODAL
    // -------------------------------------------------------------
    const searchModalHTML = `
    <div id="luxury-search-modal" class="fixed inset-0 z-[999999] flex flex-col bg-black/90 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-500">
        <!-- Close Button -->
        <button id="close-search-btn" class="absolute top-8 right-8 text-on-surface-variant hover:text-primary hover:scale-110 transition-all duration-300 p-2">
            <span class="material-symbols-outlined text-[36px]">close</span>
        </button>
        
        <!-- Search Frame -->
        <div class="w-full max-w-4xl mx-auto px-6 pt-32 flex-1 flex flex-col overflow-hidden">
            <div class="mb-4">
                <span class="font-label-caps text-label-caps text-primary tracking-[0.25em] uppercase">Varanasi Modern Catalog Search</span>
            </div>
            <!-- Dynamic Input Container -->
            <div class="relative w-full border-b border-primary/40 focus-within:border-primary transition-colors duration-500 pb-2 flex items-center gap-base">
                <span class="material-symbols-outlined text-primary text-[28px]">search</span>
                <input type="text" id="catalog-search-input" placeholder="Type cloth name, category, or edit..." 
                       class="w-full bg-transparent border-none outline-none font-headline-md text-headline-md text-white placeholder-outline/40 focus:ring-0 py-2">
            </div>
            
            <!-- Quick Suggestions -->
            <div class="flex flex-wrap gap-4 mt-6 text-on-surface-variant items-center">
                <span class="font-label-caps text-[10px] uppercase tracking-widest text-primary/70">Suggested:</span>
                <button class="suggestion-tag bg-white/5 border border-white/10 hover:border-primary px-4 py-2 font-label-caps text-[11px] tracking-wider uppercase text-white hover:text-primary transition-all">Bomber</button>
                <button class="suggestion-tag bg-white/5 border border-white/10 hover:border-primary px-4 py-2 font-label-caps text-[11px] tracking-wider uppercase text-white hover:text-primary transition-all">Hoodie</button>
                <button class="suggestion-tag bg-white/5 border border-white/10 hover:border-primary px-4 py-2 font-label-caps text-[11px] tracking-wider uppercase text-white hover:text-primary transition-all">Sherwani</button>
                <button class="suggestion-tag bg-white/5 border border-white/10 hover:border-primary px-4 py-2 font-label-caps text-[11px] tracking-wider uppercase text-white hover:text-primary transition-all">Streetwear</button>
                <button class="suggestion-tag bg-white/5 border border-white/10 hover:border-primary px-4 py-2 font-label-caps text-[11px] tracking-wider uppercase text-white hover:text-primary transition-all">Silk</button>
            </div>
            
            <!-- Search Results Container -->
            <div class="flex-1 overflow-y-auto mt-12 mb-8 pr-2" id="search-results-list">
                <div class="text-center py-12 text-on-surface-variant/40 font-body-lg">
                    Begin typing to search our handcrafted garments catalog...
                </div>
            </div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML("beforeend", searchModalHTML);

    const searchModal = document.getElementById("luxury-search-modal");
    const searchInput = document.getElementById("catalog-search-input");
    const searchResults = document.getElementById("search-results-list");
    const closeSearchBtn = document.getElementById("close-search-btn");

    function openSearchModal() {
        searchModal.classList.remove("pointer-events-none");
        searchModal.classList.add("opacity-100");
        setTimeout(() => searchInput.focus(), 150);
    }

    function closeSearchModal() {
        searchModal.classList.remove("opacity-100");
        searchModal.classList.add("pointer-events-none");
        searchInput.value = "";
        searchResults.innerHTML = `<div class="text-center py-12 text-on-surface-variant/40 font-body-lg">Begin typing to search our handcrafted garments catalog...</div>`;
    }

    if (closeSearchBtn) closeSearchBtn.addEventListener("click", closeSearchModal);

    // Bind suggestion tag click handlers
    document.querySelectorAll(".suggestion-tag").forEach(tag => {
        tag.addEventListener("click", () => {
            searchInput.value = tag.textContent.trim();
            performSearch(searchInput.value);
        });
    });

    // Close search modal on ESC key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !searchModal.classList.contains("pointer-events-none")) {
            closeSearchModal();
        }
    });

    // Core Live Search Logic
    function performSearch(query) {
        const cleanQuery = query.toLowerCase().trim();
        if (!cleanQuery) {
            searchResults.innerHTML = `<div class="text-center py-12 text-on-surface-variant/40 font-body-lg">Begin typing to search our handcrafted garments catalog...</div>`;
            return;
        }

        const matches = PRODUCTS.filter(prod => 
            prod.title.toLowerCase().includes(cleanQuery) || 
            prod.category.toLowerCase().includes(cleanQuery) ||
            prod.id.toLowerCase().includes(cleanQuery)
        );

        if (matches.length === 0) {
            searchResults.innerHTML = `
            <div class="text-center py-12 text-on-surface-variant/60 font-body-lg">
                No luxury garments found matching "<span class="text-primary font-bold">${query}</span>".
            </div>`;
            return;
        }

        searchResults.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            ${matches.map(prod => `
                <a href="${prod.url}?id=${prod.id}" class="search-result-card flex gap-4 p-4 rounded bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 group">
                    <div class="w-20 aspect-[3/4] overflow-hidden rounded bg-surface-container flex-shrink-0">
                        <img src="${prod.image}" alt="${prod.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex-1 flex flex-col justify-between py-1">
                        <div>
                            <span class="font-label-caps text-[9px] text-primary tracking-widest uppercase">${prod.category}</span>
                            <h4 class="font-headline-sm text-[16px] text-white group-hover:text-primary transition-colors mt-1">${prod.title}</h4>
                        </div>
                        <span class="font-body-md text-primary font-semibold">₹${prod.price.toLocaleString("en-IN")}</span>
                    </div>
                </a>
            `).join("")}
        </div>
        `;

        // Bind transition clicks on search results dynamically
        searchResults.querySelectorAll(".search-result-card").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = link.getAttribute("href");
                closeSearchModal();
                // Trigger transition exit
                const transitionOverlay = document.getElementById("page-transition-overlay");
                if (transitionOverlay) {
                    transitionOverlay.style.transition = "none";
                    transitionOverlay.classList.remove("exit");
                    transitionOverlay.style.transform = "translateY(100%)";
                    transitionOverlay.offsetHeight;
                    transitionOverlay.style.transition = "transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)";
                    transitionOverlay.classList.add("active");
                    setTimeout(() => {
                        window.location.href = target;
                    }, 750);
                } else {
                    window.location.href = target;
                }
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            performSearch(e.target.value);
        });
    }

    // -------------------------------------------------------------
    // 3. CART API & UI INTEGRATION
    // -------------------------------------------------------------
    window.addToCart = function(productId, size = "M", quantity = 1) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
        
        if (itemIndex > -1) {
            cart[itemIndex].quantity += quantity;
        } else {
            cart.push({ id: productId, size, quantity });
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
        updateBadges();
        showToast("SUCCESSFULLY ADDED TO BAG");
    };

    window.removeFromCart = function(productId, size) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => !(item.id === productId && item.size === size));
        localStorage.setItem("cart", JSON.stringify(cart));
        updateBadges();
        if (window.location.pathname.includes("cart.html")) {
            renderCartPage();
        }
        showToast("ITEM REMOVED FROM BAG");
    };

    window.updateCartQuantity = function(productId, size, delta) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += delta;
            if (cart[itemIndex].quantity <= 0) {
                cart = cart.filter(item => !(item.id === productId && item.size === size));
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            updateBadges();
            renderCartPage();
        }
    };

    function renderCartPage() {
        const cartContainer = document.getElementById("cart-items-container");
        if (!cartContainer) return;

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const subtotalEl = document.getElementById("summary-subtotal");
        const taxEl = document.getElementById("summary-tax");
        const totalEl = document.getElementById("summary-total");

        if (cart.length === 0) {
            cartContainer.innerHTML = `
            <div class="text-center py-24 border border-outline-variant/20 rounded bg-surface-container-low flex flex-col items-center justify-center gap-6">
                <span class="material-symbols-outlined text-[64px] text-primary/40">shopping_bag</span>
                <h3 class="font-headline-md text-on-surface-variant">Your shopping bag is empty</h3>
                <p class="font-body-md text-on-surface-variant/60 max-w-md">Discover the handcrafted contemporary luxury edits of Varanasi Modern.</p>
                <a href="shop.html" class="inline-block bg-primary text-surface px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors shadow-lg">Shop All Collections</a>
            </div>
            `;
            if (subtotalEl) subtotalEl.textContent = "₹0";
            if (taxEl) taxEl.textContent = "₹0";
            if (totalEl) totalEl.textContent = "₹0";
            return;
        }

        let subtotal = 0;
        cartContainer.innerHTML = `
        <div class="space-y-8">
            ${cart.map(item => {
                const prod = PRODUCTS.find(p => p.id === item.id) || PRODUCTS[0];
                const itemTotal = prod.price * item.quantity;
                subtotal += itemTotal;
                return `
                <div class="flex flex-col md:flex-row gap-8 pb-8 border-b border-outline-variant/30 group">
                    <div class="w-full md:w-32 aspect-[3/4] overflow-hidden bg-surface-container flex-shrink-0">
                        <img src="${prod.image}" alt="${prod.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">${prod.title}</h3>
                                <button onclick="removeFromCart('${item.id}', '${item.size}')" class="text-on-surface-variant hover:text-primary transition-colors p-1">
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                            <p class="font-body-sm text-on-surface-variant/60">Size: <span class="text-white font-semibold">${item.size}</span></p>
                            <p class="font-body-sm text-on-surface-variant/60 mt-1">Fabric: Premium Banarasi Loom Accent</p>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <!-- Quantity Controls -->
                            <div class="flex items-center border border-outline-variant/40 rounded overflow-hidden">
                                <button onclick="updateCartQuantity('${item.id}', '${item.size}', -1)" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white transition-colors font-bold">-</button>
                                <span class="px-4 py-1 text-white font-semibold font-body-md">${item.quantity}</span>
                                <button onclick="updateCartQuantity('${item.id}', '${item.size}', 1)" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white transition-colors font-bold">+</button>
                            </div>
                            <span class="font-headline-sm text-primary font-semibold">₹${itemTotal.toLocaleString("en-IN")}</span>
                        </div>
                    </div>
                </div>
                `;
            }).join("")}
        </div>
        `;

        const tax = Math.round(subtotal * 0.05); // 5% Luxury VAT Tax
        const grandTotal = subtotal + tax;

        if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
        if (taxEl) taxEl.textContent = `₹${tax.toLocaleString("en-IN")}`;
        if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
    }

    // -------------------------------------------------------------
    // 4. FAVORITES WISHLIST API & UI INTEGRATION
    // -------------------------------------------------------------
    window.toggleFavorite = function(productId) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const index = favorites.indexOf(productId);
        
        if (index > -1) {
            favorites.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            updateBadges();
            showToast("REMOVED FROM FAVORITES");
        } else {
            favorites.push(productId);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            updateBadges();
            showToast("ADDED TO FAVORITES");
        }

        if (window.location.pathname.includes("favorites.html")) {
            renderFavoritesPage();
        }
    };

    function renderFavoritesPage() {
        const favContainer = document.getElementById("favorites-container");
        if (!favContainer) return;

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.length === 0) {
            favContainer.innerHTML = `
            <div class="col-span-full text-center py-24 border border-outline-variant/20 rounded bg-surface-container-low flex flex-col items-center justify-center gap-6">
                <span class="material-symbols-outlined text-[64px] text-primary/40">favorite</span>
                <h3 class="font-headline-md text-on-surface-variant">Your favorites list is empty</h3>
                <p class="font-body-md text-on-surface-variant/60 max-w-md">Discover the handcrafted contemporary luxury edits of Varanasi Modern.</p>
                <a href="shop.html" class="inline-block bg-primary text-surface px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors shadow-lg">Discover Collection</a>
            </div>
            `;
            return;
        }

        favContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full col-span-full">
            ${favorites.map(favId => {
                const prod = PRODUCTS.find(p => p.id === favId) || PRODUCTS[0];
                return `
                <div class="bg-white/5 border border-white/5 rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-500 reveal relative flex flex-col justify-between">
                    <button onclick="toggleFavorite('${prod.id}')" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-primary flex items-center justify-center hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
                    </button>
                    <a href="${prod.url}?id=${prod.id}" class="block overflow-hidden aspect-[3/4] bg-surface-container">
                        <img src="${prod.image}" alt="${prod.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </a>
                    <div class="p-6 flex-1 flex flex-col justify-between bg-black/40">
                        <div>
                            <span class="font-label-caps text-[10px] text-primary tracking-widest uppercase mb-1 block">${prod.category}</span>
                            <h3 class="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">${prod.title}</h3>
                        </div>
                        <div class="flex justify-between items-center mt-6">
                            <span class="font-body-lg text-white font-semibold">₹${prod.price.toLocaleString("en-IN")}</span>
                            <button onclick="addToCart('${prod.id}', 'M', 1)" class="bg-primary text-surface px-4 py-2 font-label-caps text-[10px] tracking-wider uppercase hover:bg-on-surface-variant hover:text-white transition-colors">
                                Add To Bag
                            </button>
                        </div>
                    </div>
                </div>
                `;
            }).join("")}
        </div>
        `;
    }

    // -------------------------------------------------------------
    // 5. TOASTER NOTIFICATION LOGIC
    // -------------------------------------------------------------
    function showToast(message) {
        // Remove existing toast if present
        const existingToast = document.querySelector(".boutique-toast");
        if (existingToast) existingToast.remove();

        const toastHTML = `
        <div class="boutique-toast fixed bottom-8 right-8 z-[9999999] bg-[#1a1a1a] text-[#D9C5B2] border border-[#C5A059] px-6 py-4 flex items-center gap-base shadow-2xl transition-all duration-500 transform translate-y-20 opacity-0 font-label-caps text-label-caps">
            <span class="material-symbols-outlined text-[#C5A059]">verified</span>
            <span class="tracking-widest uppercase font-semibold">${message}</span>
        </div>
        `;
        
        document.body.insertAdjacentHTML("beforeend", toastHTML);
        const toast = document.querySelector(".boutique-toast");
        
        // Trigger entrance reflow
        toast.offsetHeight;
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";

        setTimeout(() => {
            toast.style.transform = "translateY(20px)";
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    // -------------------------------------------------------------
    // 6. BADGES AND PROFILE DYNAMIC UPDATE
    // -------------------------------------------------------------
    function updateBadges() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isLogged = localStorage.getItem("userLogged") === "true";

        const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
        const favCount = favorites.length;

        // Update Cart badges
        // Support text formats like "Bag (0)", "Shopping Bag (0)" or standard badges
        document.querySelectorAll("a, button").forEach(el => {
            const cleanText = el.textContent.toLowerCase();
            if (cleanText.includes("bag") || cleanText.includes("cart")) {
                // If it is just a badge icon count
                const countBadge = el.querySelector(".cart-count");
                if (countBadge) {
                    countBadge.textContent = cartCount;
                } else {
                    // Update text nodes directly if applicable
                    if (el.querySelector("span[data-icon='shopping_bag']") || el.querySelector("span.material-symbols-outlined")) {
                        // Append text safely or update child badge
                    }
                }
            }
        });

        // Loop over the specific material icons to show badges
        document.querySelectorAll("span.material-symbols-outlined").forEach(icon => {
            const iconType = icon.getAttribute("data-icon") || icon.textContent.trim().toLowerCase();
            
            if (iconType === "shopping_bag" || iconType === "shopping-bag") {
                let badge = icon.nextElementSibling;
                if (!badge || !badge.classList.contains("cart-badge")) {
                    badge = document.createElement("span");
                    badge.className = "cart-badge absolute -top-2 -right-2 bg-[#C5A059] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-lg font-sans";
                    icon.parentNode.style.position = "relative";
                    icon.parentNode.appendChild(badge);
                }
                badge.textContent = cartCount;
                badge.style.display = cartCount > 0 ? "flex" : "none";
            }
            
            if (iconType === "favorite" || iconType === "heart") {
                let badge = icon.nextElementSibling;
                if (!badge || !badge.classList.contains("fav-badge")) {
                    badge = document.createElement("span");
                    badge.className = "fav-badge absolute -top-2 -right-2 bg-[#C5A059] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-lg font-sans";
                    icon.parentNode.style.position = "relative";
                    icon.parentNode.appendChild(badge);
                }
                badge.textContent = favCount;
                badge.style.display = favCount > 0 ? "flex" : "none";
            }

            if (iconType === "person" || iconType === "user") {
                if (isLogged) {
                    icon.classList.add("text-[#C5A059]");
                    icon.parentNode.title = "Welcome, Nav (Click to Logout)";
                } else {
                    icon.classList.remove("text-[#C5A059]");
                    icon.parentNode.title = "Login / Register";
                }
            }
        });

        // Sync header auth label text if present
        document.querySelectorAll("a").forEach(el => {
            const cleanText = el.textContent.trim().toLowerCase();
            if (cleanText === "login" || cleanText === "account" || cleanText === "logout") {
                if (isLogged) {
                    el.textContent = "ACCOUNT";
                    el.href = "#logout";
                    el.addEventListener("click", handleLogoutClick);
                } else {
                    el.textContent = "LOGIN";
                    el.href = "auth.html";
                }
            }
        });
    }

    function handleLogoutClick(e) {
        if (e.currentTarget.getAttribute("href") === "#logout") {
            e.preventDefault();
            localStorage.setItem("userLogged", "false");
            updateBadges();
            showToast("SUCCESSFULLY LOGGED OUT");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);
        }
    }

    // -------------------------------------------------------------
    // 7. SPECIFIC INTERACTIVE PAGES HANDLERS
    // -------------------------------------------------------------
    
    // Product Detail Page Interactions (product.html)
    if (window.location.pathname.includes("product.html")) {
        // Thumbnail Selection Clickers
        const thumbnails = document.querySelectorAll(".product-thumbnail, [alt='Detail 1'], [alt='Detail 2'], [alt='Detail 3'], [alt='Detail 4']");
        const mainImage = document.querySelector(".main-product-image, [alt='Heritage Silk Bomber']");
        
        thumbnails.forEach(thumb => {
            thumb.classList.add("cursor-pointer", "transition-all", "hover:opacity-75");
            thumb.addEventListener("click", () => {
                if (mainImage && thumb.src) {
                    // Smooth image swap fade transition
                    mainImage.style.opacity = "0.3";
                    setTimeout(() => {
                        mainImage.src = thumb.src;
                        mainImage.style.opacity = "1";
                    }, 150);
                    
                    // Update active outline state
                    thumbnails.forEach(t => t.classList.remove("border-primary", "border-2"));
                    thumb.classList.add("border-primary", "border-2");
                }
            });
        });

        // Size Button selectors
        const sizeButtons = document.querySelectorAll(".size-btn, .border-outline\\/30");
        let selectedSize = "M"; // default

        sizeButtons.forEach(btn => {
            const cleanText = btn.textContent.trim();
            if (["XS", "S", "M", "L", "XL"].includes(cleanText)) {
                btn.classList.add("cursor-pointer", "transition-all", "hover:bg-white/10");
                
                // Add click handler
                btn.addEventListener("click", () => {
                    selectedSize = cleanText;
                    sizeButtons.forEach(b => b.classList.remove("bg-white", "text-black", "border-primary"));
                    btn.classList.add("border-primary", "bg-white", "text-black");
                    showToast(`SELECTED SIZE: ${selectedSize}`);
                });
                
                // Set default outline for M size
                if (cleanText === "M") {
                    btn.classList.add("border-primary", "bg-white", "text-black");
                }
            }
        });

        // Add to bag button clicker bind
        const addBagBtn = document.querySelector(".add-to-bag-btn") || document.querySelector("button.w-full.bg-primary");
        if (addBagBtn) {
            addBagBtn.addEventListener("click", () => {
                // Get active product ID
                const params = new URLSearchParams(window.location.search);
                const prodId = params.get("id") || "heritage-bomber";
                
                // Read active quantity
                const qtyInput = document.querySelector(".qty-input") || { value: 1 };
                const quantity = parseInt(qtyInput.value) || 1;
                
                addToCart(prodId, selectedSize, quantity);
            });
        }

        // Product Bookmark/Favorite Heart Selector Bind
        const favHeartBtn = document.querySelector(".product-fav-btn") || document.querySelector(".border-outline\\/30\\/20.p-4");
        if (favHeartBtn) {
            favHeartBtn.addEventListener("click", () => {
                const params = new URLSearchParams(window.location.search);
                const prodId = params.get("id") || "heritage-bomber";
                toggleFavorite(prodId);
            });
        }
    }

    // Cart Page (cart.html)
    if (window.location.pathname.includes("cart.html")) {
        renderCartPage();
    }

    // Favorites Page (favorites.html)
    if (window.location.pathname.includes("favorites.html")) {
        renderFavoritesPage();
    }

    // Authentication Form Submit Interceptions (auth.html)
    if (window.location.pathname.includes("auth.html")) {
        const loginForm = document.querySelector("form");
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                localStorage.setItem("userLogged", "true");
                showToast("SUCCESSFULLY AUTHENTICATED");
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 800);
            });
        }
    }

    // -------------------------------------------------------------
    // 8. INTERCEPT SEARCH ICONS ACROSS THE ENTIRE WEBSITE
    // -------------------------------------------------------------
    // Find any buttons/spans that have search keywords or icons and route to our luxury search modal
    document.querySelectorAll("button, a, span").forEach(el => {
        const cleanText = el.textContent.trim().toLowerCase();
        const hasSearchIcon = el.classList.contains("material-symbols-outlined") && cleanText === "search";
        
        if (cleanText === "search" || hasSearchIcon || el.querySelector("span.material-symbols-outlined[data-icon='search']")) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                openSearchModal();
            });
        }
    });

    // Run dynamic badges sync instantly
    updateBadges();
});


    // --- DYNAMIC PRODUCT PAGE RENDERING ---
    if (window.location.pathname.includes("product.html")) {
        const params = new URLSearchParams(window.location.search);
        const prodId = params.get("id");
        if (prodId) {
            const prod = PRODUCTS.find(p => p.id === prodId);
            if (prod) {
                const titleEl = document.getElementById("dynamic-product-title");
                const priceEl = document.getElementById("dynamic-product-price");
                const catEl = document.getElementById("dynamic-product-category");
                const imgEl = document.getElementById("dynamic-product-image");
                
                if (titleEl) titleEl.textContent = prod.title;
                if (priceEl) priceEl.textContent = '₹' + prod.price.toLocaleString("en-IN");
                if (catEl) catEl.textContent = prod.category;
                if (imgEl) imgEl.src = prod.image;
            }
        }
    }
    
    // --- FIREBASE MOCK FOR LOGIN & DATABASE ---
    window.googleLogin = function() {
        showToast("GOOGLE AUTHENTICATION SUCCESSFUL");
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("userProvider", "google");
        setTimeout(() => window.location.href="index.html", 1000);
    }
    
    window.facebookLogin = function() {
        showToast("FACEBOOK AUTHENTICATION SUCCESSFUL");
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("userProvider", "facebook");
        setTimeout(() => window.location.href="index.html", 1000);
    }

    if (window.location.pathname.includes("auth.html")) {
        // Find social buttons
        const btns = document.querySelectorAll("button");
        btns.forEach(b => {
            if (b.textContent.includes("Google")) {
                b.addEventListener("click", (e) => { e.preventDefault(); googleLogin(); });
            }
            if (b.textContent.includes("Facebook")) {
                b.addEventListener("click", (e) => { e.preventDefault(); facebookLogin(); });
            }
        });
    }
