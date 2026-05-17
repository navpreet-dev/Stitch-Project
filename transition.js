document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("page-transition-overlay");
    if (!overlay) return;

    const logo = overlay.querySelector(".transition-logo");
    const loader = overlay.querySelector(".transition-loader");

    // Phase 1: Animate elements on load
    setTimeout(() => {
        if (logo) logo.classList.add("visible");
        if (loader) loader.classList.add("loading");
    }, 50);

    // Phase 2: Slide out overlay to reveal content
    setTimeout(() => {
        overlay.classList.add("exit");
    }, 650);

    // Intercept local anchors and standard links for exit transition
    document.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        
        // Ensure href exists, is not empty, is not just '#' (unless it's mapped),
        // is local, and does not point to external domains or mailto/tel.
        if (href && 
            !href.startsWith("mailto:") && 
            !href.startsWith("tel:") && 
            !href.startsWith("http") && 
            href !== "#" && 
            !href.startsWith("javascript:")) {
            
            link.addEventListener("click", (e) => {
                // If it opens in a new tab or user clicked with meta key, let browser handle it
                if (link.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
                
                e.preventDefault();
                
                // If it's a simple hash scroll on the current page, handle smoothly without transition
                if (href.startsWith("#")) {
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: "smooth" });
                    }
                    return;
                }

                // Prepare transition overlay to slide in from bottom
                overlay.style.transition = "none";
                overlay.classList.remove("exit");
                overlay.style.transform = "translateY(100%)";
                
                // Trigger layout reflow to apply style reset
                overlay.offsetHeight;
                
                // Slide up to cover screen
                overlay.style.transition = "transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)";
                overlay.classList.add("active");
                
                // Redirect after overlay covers viewport
                setTimeout(() => {
                    window.location.href = href;
                }, 750);
            });
        }
    });
});
