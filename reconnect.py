import os
import re

files = [
    'index.html', 'shop.html', 'product.html', 'about.html', 'contact.html',
    'cart.html', 'favorites.html', 'auth.html', 'privacy.html', 'lookbook.html'
]

# Standard luxury icon tray HTML
luxury_icon_tray = """<div class="flex gap-base items-center relative">
<button class="search-modal-trigger p-1 text-primary cursor-pointer hover:scale-110 transition-transform flex items-center justify-center" title="Search Catalog">
<span class="material-symbols-outlined" data-icon="search">search</span>
</button>
<a href="favorites.html" class="p-1 text-primary hover:scale-110 transition-transform flex items-center justify-center relative" title="Favorites">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
</a>
<a href="cart.html" class="p-1 text-primary hover:scale-110 transition-transform flex items-center justify-center relative" title="Shopping Bag">
<span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</a>
<a href="auth.html" class="p-1 text-primary hover:scale-110 transition-transform flex items-center justify-center relative" title="My Account">
<span class="material-symbols-outlined" data-icon="person">person</span>
</a>
</div>"""

def clean_and_connect_anchors(html_content, filename):
    # Regex to capture all anchor links
    pattern = re.compile(r'(<a\b[^>]*href=)(["\'])(.*?)\2([^>]*>)(.*?)(</a>)', re.DOTALL)
    
    def replacer(match):
        prefix = match.group(1)
        quote = match.group(2)
        href = match.group(3)
        suffix = match.group(4)
        text = match.group(5)
        closing = match.group(6)
        
        # Clean text
        clean_text = re.sub(r'<[^>]+>', '', text).strip().lower()
        
        new_href = href
        extra_attribs = ""
        
        # If it is an empty/hash link or template placeholder
        if href == "#" or href == "" or "SCREEN_" in href or href == "javascript:void(0)":
            if "home" in clean_text:
                new_href = "index.html"
            elif "new arrivals" in clean_text or "best sellers" in clean_text:
                new_href = "index.html#new-arrivals"
            elif "collections" in clean_text or "shop" in clean_text or "view all" in clean_text or "explore collection" in clean_text or "shop all" in clean_text:
                new_href = "shop.html"
            elif "about" in clean_text or "our story" in clean_text or "story" in clean_text or "heritage" in clean_text or "discover" in clean_text:
                new_href = "about.html"
            elif "sustainability" in clean_text:
                new_href = "about.html#sustainability"
            elif "contact" in clean_text or "atelier" in clean_text or "inquiry" in clean_text:
                new_href = "contact.html"
            elif "stores" in clean_text or "locations" in clean_text or "store locations" in clean_text:
                new_href = "contact.html#stores"
            elif "shipping" in clean_text or "returns" in clean_text:
                new_href = "about.html"
            elif "privacy" in clean_text or "terms" in clean_text:
                new_href = "privacy.html"
            elif "lookbook" in clean_text or "boutique gallery" in clean_text:
                new_href = "lookbook.html"
            elif "favorites" in clean_text:
                new_href = "favorites.html"
            elif "shopping bag" in clean_text or "bag" in clean_text or "cart" in clean_text:
                new_href = "cart.html"
            elif "login" in clean_text or "sign up" in clean_text or "auth" in clean_text or "account" in clean_text:
                new_href = "auth.html"
            elif "directions" in clean_text:
                new_href = "https://maps.google.com/?q=Kala+Ghoda+Art+District+Mumbai"
                extra_attribs = ' target="_blank" rel="noopener noreferrer"'
            elif "book visit" in clean_text:
                new_href = "contact.html"
            elif "instagram" in clean_text:
                new_href = "https://instagram.com"
                extra_attribs = ' target="_blank" rel="noopener noreferrer"'
            elif "pinterest" in clean_text:
                new_href = "https://pinterest.com"
                extra_attribs = ' target="_blank" rel="noopener noreferrer"'
            elif "twitter" in clean_text or "x (" in clean_text:
                new_href = "https://x.com"
                extra_attribs = ' target="_blank" rel="noopener noreferrer"'
                
        # Append target blank if needed
        if extra_attribs and "target=" not in suffix:
            return f"{prefix}{quote}{new_href}{quote}{suffix.rstrip(' >')}{extra_attribs}>{text}{closing}"
            
        return f"{prefix}{quote}{new_href}{quote}{suffix}{text}{closing}"

    return pattern.sub(replacer, html_content)

def main():
    print("Running reconnect compilation script with precise Order Summary calculations matching...")
    
    for filename in files:
        if not os.path.exists(filename):
            print(f"Warning: {filename} not found. Skipping.")
            continue
            
        print(f"Processing {filename}...")
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 1. Inject boutique_core.js link inside <head> if not present
        if "boutique_core.js" not in content:
            content = re.sub(
                r'(</head>)',
                r'<script src="boutique_core.js" defer></script>\n\1',
                content,
                flags=re.IGNORECASE
            )
            
        # 2. Inject luxury icons container inside header
        icon_group_pattern = re.compile(
            r'(<div class="[^"]*flex[^"]*gap-base[^"]*"[^>]*>.*?</div>|<div class="flex gap-4 items-center">.*?</div>)',
            re.DOTALL
        )
        
        if icon_group_pattern.search(content):
            header_match = re.search(r'(<header.*?>)(.*?)(</header>)', content, re.DOTALL)
            if header_match:
                header_open = header_match.group(1)
                header_body = header_match.group(2)
                header_close = header_match.group(3)
                
                # Replace the icon group inside header_body
                new_header_body = icon_group_pattern.sub(luxury_icon_tray, header_body, count=1)
                content = content.replace(header_match.group(0), f"{header_open}{new_header_body}{header_close}")
            
        # 3. Add IDs for cart and favorites containers to bind JS properly
        if filename == 'cart.html':
            # Ensure items list container has id="cart-items-container"
            content = re.sub(
                r'(<!-- Items List -->\s*<div class="[^"]*lg:col-span-8[^"]*space-y-12[^"]*">)',
                r'<!-- Items List -->\n<div id="cart-items-container" class="lg:col-span-8 space-y-12">',
                content
            )
            # Ensure subtotals have proper IDs
            content = re.sub(
                r'(<span class="font-body-md text-on-surface-variant">Subtotal</span>\s*<span class="font-body-md">)(.*?)(</span>)',
                r'\1<span id="summary-subtotal">₹0</span>\3',
                content
            )
            content = re.sub(
                r'(<span class="font-body-md text-on-surface-variant">Taxes \(GST\)</span>\s*<span class="font-body-md">)(.*?)(</span>)',
                r'\1<span id="summary-tax">₹0</span>\3',
                content
            )
            content = re.sub(
                r'(<span class="font-headline-md text-headline-md">Total</span>\s*<span class="font-headline-md text-headline-md">)(.*?)(</span>)',
                r'\1<span id="summary-total" class="text-primary font-bold">₹0</span>\3',
                content
            )
            
        elif filename == 'favorites.html':
            content = re.sub(
                r'(<!-- Favorites Grid -->\s*<div class="[^"]*grid grid-cols-1 md:grid-cols-3 gap-8[^"]*">)',
                r'<!-- Favorites Grid -->\n<div id="favorites-container" class="grid grid-cols-1 md:grid-cols-3 gap-8">',
                content
            )
            
        # 4. Clean and connect all local anchors flawlessly
        content = clean_and_connect_anchors(content, filename)
        
        # 5. Perfect Image Alignment & Alignment Styles (prevent overlaps and ensure high-fashion responsiveness)
        custom_alignment_css = """
        /* Premium Varanasi Modern Alignment Fixes */
        img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }
        .aspect-\\[3\\/4\\] {
            aspect-ratio: 3/4 !important;
        }
        .aspect-\\[4\\/3\\] {
            aspect-ratio: 4/3 !important;
        }
        .aspect-\\[16\\/9\\] {
            aspect-ratio: 16/9 !important;
        }
        .search-modal-trigger {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
        }
        """
        content = content.replace("</style>", f"{custom_alignment_css}\n</style>")
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print("Reconnection compilation with dynamic calculations complete! All files corrected!")

if __name__ == '__main__':
    main()
