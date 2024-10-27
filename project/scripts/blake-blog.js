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

const blogPosts = [
    {
        title: "New York",
        date: "2024-08-05",
        content: "For our second annual trip to New York we decided to see Malan's role model Jeremy Jordan in The Great Gatsby. Ruth experienced her first pregnancy craving - pineapple. We loved spending time with Leah and seeing even more of NYC.",
        photoLink: "blake-photos.html?title=New York"
    },
    {
        title: "Chicago",
        date: "2024-04-01",
        content: "We rode the train from Dallas to Chicago! 22 hours! It was a super fun trip - our first trip just the two of us. WE got Go City passes and filled our days with as many activities as possible!",
        photoLink: "blake-photos.html?title=Chicago"
    },
    {
        title: "Alaska",
        date: "2023-06-10",
        content: "For the Blake Family reunion this year we met up with all of Malan's siblings and took a Disney Cruise to Alaska! We loved spending so much time with family and eating 3 desserts every night!",
        photoLink: "blake-photos.html?title=Alaska"
    },
    {
        title: "Finland",
        date: "2023-03-01",
        content: "We loved visiting Mom and Dad on their mission in Finland. We saw reindeer, ate tons of candy, and rode on the train.",
        photoLink: "blake-photos.html?title=Finland"
    },
];


function createBlogPosts() {
    const container = document.getElementById('blog-posts');
    container.innerHTML = ""; 

    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        const title = document.createElement('h2');
        title.textContent = post.title;
        postDiv.appendChild(title);

        const date = document.createElement('h3');
        date.textContent = post.date;
        postDiv.appendChild(date);

        const content = document.createElement('p');
        content.textContent = post.content;
        postDiv.appendChild(content);

        const link = document.createElement('a');
        link.href = post.photoLink; 
        link.classList.add('photo-link');
        link.textContent = `View Photos from ${post.title}`;
        postDiv.appendChild(link);

        container.appendChild(postDiv);
    });
}

window.onload = function() {
    createBlogPosts();
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