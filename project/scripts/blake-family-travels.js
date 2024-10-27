const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

function toggleMenu() {
    const menu = document.getElementById('myLinks');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.style.display = 'none'; 
    } else {
        menu.classList.add('active');
        menu.style.display = 'flex';
    }
}


function updateMenuVisibility() {
    const menu = document.getElementById('myLinks');
    if (window.innerWidth > 600) {
        menu.classList.remove('active');
        menu.style.display = 'flex';
    } else {
        menu.classList.remove('active');
        menu.style.display = 'none';
    }
}

window.addEventListener('resize', updateMenuVisibility);
updateMenuVisibility();

const travelpics = [
    {
        location: "New York",
        date: "2024-08-10",
        imageUrl: "images/baseball.jpg"
    },
    {
        location: "Alaska Cruise - Seattle",
        date: "2023-06-01",
        imageUrl: "images/blake-family.jpg"
    },
    {
        location: "Chicago",
        date: "2024-04-05",
        imageUrl: "images/chicago.jpg"
    },
    {
        location: "New York",
        date: "2024-08-09",
        imageUrl: "images/great-gatsby.jpg"
    },
    {
        location: "Espoo, Finland",
        date: "2023-04-03",
        imageUrl: "images/helsinki-temple.jpg"
    },
    {
        location: "Alaska",
        date: "2023-06-01",
        imageUrl: "images/icecream.jpg"
    },
    {
        location: "Helsinki, Finland",
        date: "2023-04-02",
        imageUrl: "images/mom-and-dad.jpg"
    },
    {
        location: "Rovaniemi, Finland",
        date: "2023-04-07",
        imageUrl: "images/northern-lights.jpg"
    },
    {
        location: "Chicago",
        date: "2024-04-07",
        imageUrl: "images/train.jpg"
    },
];

function createPhotoCards(filteredPhotos) {
    const container = document.getElementById('photo-cards');
    container.innerHTML = "";

    filteredPhotos.sort((a, b) => new Date(b.date) - new Date(a.date));

    filteredPhotos.forEach(travelpic => {
        const card = document.createElement('div');
        card.classList.add('photo-card');

        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${travelpic.location}`;
        card.appendChild(location);

        const date = document.createElement('p');
        date.innerHTML = `<strong>Date:</strong> ${travelpic.date}`;
        card.appendChild(date);

        const img = document.createElement('img');
        img.src = travelpic.imageUrl;
        img.alt = travelpic.location;
        img.loading = 'lazy'; 
        card.appendChild(img);

        container.appendChild(card);
    });
}

function setPage(title) {
    document.getElementById('page-title').textContent = title;

    if (title.toLowerCase() === "all") {
        createPhotoCards(travelpics);
    } else {
        const filteredPhotos = travelpics.filter(travelpic => 
            travelpic.location.toLowerCase().includes(title.toLowerCase())
        );
        createPhotoCards(filteredPhotos);
    }
}

function setDefaultTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');

    if (title) {
        setPage(title); 
    } else {
        document.getElementById('page-title').textContent = 'All';
        createPhotoCards(travelpics);
    }
}


function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
}

const blogPosts = [
    {
        title: "Finland",
        date: "2023-03-01",
        content: "We loved visiting Mom and Dad on their mission in Finland. We saw reindeer, ate tons of candy, and rode on the train.",
        photoLink: "blake-photos.html?title=Finland" 
    },
    {
        title: "Alaska",
        date: "2023-06-10",
        content: "For the Blake Family reunion this year we met up with all of Malan's siblings and took a Disney Cruise to Alaska! We loved spending so much time with family and eating 3 desserts every night!",
        photoLink: "blake-photos.html?title=Alaska"
    },
    {
        title: "New York",
        date: "2024-08-05",
        content: "For our second annual trip to New York we decided to see Malan's role model Jeremy Jordan in The Great Gatsby. Ruth experienced her first pregnancy craving - pineapple. We loved spending time with Leah and seeing even more of NYC.",
        photoLink: "blake-photos.html?title=New York"
    },
];

window.onload = function() {
    setDefaultTitle(); 
};

document.querySelectorAll('#myLinks a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const title = event.target.textContent;

        if (title === 'Home') {
            window.location.href = 'blake-family-travels.html';
        } else if (title === 'Blog') {
            window.location.href = 'blake-blog.html';
        } else if (title === 'Photo Album') {
            window.location.href = 'blake-photos.html'; 
        } else if (title === 'Contact Us') {
            window.location.href = 'contact-us.html';
        } else {
            const filteredTitle = title;
            window.location.href = `blake-photos.html?title=${encodeURIComponent(filteredTitle)}`;
        }
    });
});
