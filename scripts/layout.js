// Sets active nav item
let basePath = window.location.pathname

alert(basePath)

if (basePath.includes("index.html")) {
    basePath = basePath.split("/index.html")[0]
}

async function setActiveNav() {
    
    const pageNavItemIdDictionary = {
    "Home": "nav-home",
    "Our Doctors": "nav-doctors",
    "Services Offered": "nav-services",
    "Specials": "nav-specials",
    "Insurances": "nav-insurances",
    "Patient Resources": "nav-resources",
    "Contact Us": "nav-contact"
}    

// Sets nav tab to active depending on page

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


// Loads header and sets active nav
async function loadHeader() {
    const headerContainer = document.getElementById("site-header")

    return fetch(`${basePath}/scripts/constant-elements/header.html`)
        .then(res => res.text())
        .then(html => {
        headerContainer.innerHTML = html;

        setActiveNav()
    });
}

// Loads footer
async function loadFooter() {
    const footerContainer = document.getElementById("site-footer")

    return fetch(`${basePath}/scripts/constant-elements/footer.html`)
        .then(res => res.text())
        .then(html => {
        footerContainer.innerHTML = html;
        })
}

async function setLayout() {
    await Promise.all([
        loadHeader(),
        loadFooter()
    ]);

    // Shows body once header and footer load
    document.getElementsByClassName("body-region")[0].classList.remove("hidden");
}

setLayout()