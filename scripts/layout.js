

// Sets active nav item

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
    let headerFilePath = ""
    if (document.title.includes("Home")) {
        headerFilePath = "header.html"
    } else {
        headerFilePath = "../header.html"
    }
    const headerContainer = document.getElementById("site-header")

    return fetch(headerFilePath)
        .then(res => res.text())
        .then(html => {
        headerContainer.innerHTML = html;

        setActiveNav()
    });
}

// Loads footer
async function loadFooter() {
    let footerFilePath = ""
    if (document.title.includes("Home")) {
        footerFilePath = "footer.html"
    } else {
        footerFilePath = "../footer.html"
    }
    const footerContainer = document.getElementById("site-footer")

    return fetch(footerFilePath)
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