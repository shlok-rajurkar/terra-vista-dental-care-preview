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




// Sets nav tab to active depending on page

const pageNavItemIdDictionary = {
    "Home": "nav-home",
    "Our Doctors": "nav-doctors",
    "Services Offered": "nav-services",
    "Specials": "nav-specials",
    "Insurances": "nav-insurances",
    "Patient Resources": "nav-resources",
    "Contact Us": "nav-contact"
}

function underlineActiveNavElement() {
    const title = document.title;
    for (const key in pageNavItemIdDictionary) {
        if (title.includes(key)) {
            const navItem = document.getElementById(pageNavItemIdDictionary[key]);
            if (navItem) {
                navItem.classList.add("active");
            }

        }
    }
}



async function createLayout() {
    loadFragment("site-header", "/header.html");
    loadFragment("site-footer", "/footer.html");
    const home = 
    underlineActiveNavElement();
}

createLayout();