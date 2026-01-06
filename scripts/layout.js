// Loads header and footer

async function loadFragment(id, url) {
    const container = document.getElementById(id);
    if (!container) {
        return;
    }

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        container.innerHTML = await res.text();
    } catch (err) {
        console.error('Failed to load ${url}', err);
    }
}

loadFragment("site-header", "/header.html")
loadFragment("site-footer", "/footer.html")
// Sets nav tab to active depending on page

