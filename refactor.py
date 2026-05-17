import os
import re

# We will read shop.html and product.html, and boutique_core.js to fix everything.

def update_shop_html():
    with open('shop.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update category filters
    content = content.replace('<li class="flex justify-between filter-item hover:text-primary transition-all duration-500 hover:translate-x-1 cursor-pointer py-1">',
                              '<li class="flex justify-between filter-item hover:text-primary transition-all duration-500 hover:translate-x-1 cursor-pointer py-1 category-filter" data-category="Streetwear Luxe">')
    content = content.replace('<li class="flex justify-between filter-item hover:text-primary transition-all duration-500 hover:translate-x-1 cursor-pointer font-bold text-primary py-1">',
                              '<li class="flex justify-between filter-item hover:text-primary transition-all duration-500 hover:translate-x-1 cursor-pointer py-1 category-filter" data-category="Ethnic Couture">')
    
    content = re.sub(r'<span class="">(.*?)</span>', r'<span class="">\1</span>', content)

    # We will just rewrite the filter section with proper IDs in JS
    
    with open('shop.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_product_html():
    with open('product.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We add IDs to the elements we want to replace dynamically
    content = content.replace('<h1 class="font-display-lg text-display-lg text-primary mb-2">Heritage Silk Bomber</h1>',
                              '<h1 id="dynamic-product-title" class="font-display-lg text-display-lg text-primary mb-2">Heritage Silk Bomber</h1>')
    content = content.replace('<p class="font-headline-lg text-headline-lg text-primary mb-6">₹38,000</p>',
                              '<p id="dynamic-product-price" class="font-headline-lg text-headline-lg text-primary mb-6">₹38,000</p>')
    content = content.replace('<span class="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] uppercase">Streetwear Luxe</span>',
                              '<span id="dynamic-product-category" class="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] uppercase">Streetwear Luxe</span>')
    content = content.replace('class="main-product-image w-full h-full object-cover"',
                              'id="dynamic-product-image" class="main-product-image w-full h-full object-cover"')
                              
    with open('product.html', 'w', encoding='utf-8') as f:
        f.write(content)

def extend_boutique_core():
    with open('boutique_core.js', 'r', encoding='utf-8') as f:
        js = f.read()

    addition = """

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
"""
    if "DYNAMIC PRODUCT PAGE RENDERING" not in js:
        js += addition
        with open('boutique_core.js', 'w', encoding='utf-8') as f:
            f.write(js)

print("Processing files...")
update_shop_html()
update_product_html()
extend_boutique_core()
print("Files updated!")
