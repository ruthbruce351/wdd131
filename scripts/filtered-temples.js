const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

function toggleMenu() {
    const menu = document.getElementById('myLinks');
    const topnav = document.querySelector('.topnav');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        topnav.classList.remove('active');
    } else {
        menu.style.display = 'block';
        topnav.classList.add('active');
    }
}

window.addEventListener('resize', () => {
    const menu = document.getElementById('myLinks');
    const topnav = document.querySelector('.topnav');

    if (window.innerWidth > 500) {
        menu.style.display = 'flex'; 
        topnav.classList.remove('active');
    } else {
        menu.style.display = 'none';
        topnav.classList.remove('active');
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Helsinki Finland",
        location: "Helsinki, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-lds-759405-wallpaper.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 19-24",
        area: 44207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple14.jpg"
    }
];

function createTempleCards(filteredTemples) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const title = document.createElement('h3');
        title.textContent = temple.templeName;
        card.appendChild(title);

        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        const dedication = document.createElement('p');
        dedication.innerHTML = `<strong>Dedicated on:</strong> ${temple.dedicated}`;
        card.appendChild(dedication);

        const area = document.createElement('p');
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
        card.appendChild(area);

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; 
        card.appendChild(img);

        container.appendChild(card);
    });
}

function setDefaultTitle() {
    document.getElementById('page-title').textContent = 'Home';
    createTempleCards(temples);
}

window.onload = setDefaultTitle;

function setPage(title) {
    document.getElementById('page-title').textContent = title;

    if (title === 'Home') {
        createTempleCards(temples); // Display all temples
    } else if (title === 'Old') {
        createTempleCards(temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year < 1900;
        }));
    }
    else if (title === 'New') {
        createTempleCards(temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year > 2000;
        }));
    }
    else if (title === 'Large') {
        createTempleCards(temples.filter(temple => {
            const size = Number(temple.area);
            return size > 90000;
        }));
    }
    else if (title === 'Small') {
        createTempleCards(temples.filter(temple => {
            const size = Number(temple.area);
            return size < 10000;
        }));
    }
};

document.querySelectorAll('#myLinks a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const title = event.target.textContent;
        setPage(title);
    });
});
