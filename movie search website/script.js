
// ===============================
// MOVIE DATA
// ===============================

const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        category: "trending",
        duration: "2h 28m",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief enters people's dreams to steal secrets. He receives a challenging mission that could change everything."
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        category: "popular",
        duration: "2h 32m",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces his greatest challenge when a mysterious criminal known as the Joker brings chaos to Gotham City."
    },
    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        category: "trending",
        duration: "2h 49m",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars."
    },
    {
        id: 4,
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        category: "popular",
        duration: "3h 1m",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The Avengers unite for one final mission to restore the universe after a devastating event."
    },
    {
        id: 5,
        title: "Dune",
        genre: "Adventure",
        year: 2021,
        rating: 8.0,
        category: "trending",
        duration: "2h 35m",
        image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        description: "A young man travels to a dangerous desert planet that holds the key to his family's destiny."
    },
    {
        id: 6,
        title: "Joker",
        genre: "Drama",
        year: 2019,
        rating: 8.4,
        category: "popular",
        duration: "2h 2m",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "A struggling comedian faces rejection and hardship as he gradually transforms into Gotham's infamous Joker."
    },
    {
        id: 7,
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        category: "trending",
        duration: "2h 16m",
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker discovers that reality is not what it seems and joins a rebellion against powerful machines."
    },
    {
        id: 8,
        title: "Gladiator",
        genre: "Action",
        year: 2000,
        rating: 8.5,
        category: "popular",
        duration: "2h 35m",
        image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        description: "A betrayed Roman general fights his way through the gladiator arena seeking justice and revenge."
    },
    {
        id: 9,
        title: "Avatar",
        genre: "Adventure",
        year: 2009,
        rating: 7.9,
        category: "trending",
        duration: "2h 42m",
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        description: "A marine travels to the beautiful world of Pandora and becomes involved in a conflict over its future."
    },
    {
        id: 10,
        title: "Shutter Island",
        genre: "Thriller",
        year: 2010,
        rating: 8.2,
        category: "popular",
        duration: "2h 18m",
        image: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
        description: "Two detectives investigate a mysterious disappearance at a hospital for the criminally insane."
    },
    {
        id: 11,
        title: "Spider-Man: No Way Home",
        genre: "Action",
        year: 2021,
        rating: 8.2,
        category: "trending",
        duration: "2h 28m",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "Peter Parker faces unexpected challenges when a spell brings visitors from different universes into his world."
    },
    {
        id: 12,
        title: "The Martian",
        genre: "Adventure",
        year: 2015,
        rating: 8.0,
        category: "popular",
        duration: "2h 24m",
        image: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
        description: "An astronaut becomes stranded on Mars and uses science and determination to survive."
    }
];


// ===============================
// GET HTML ELEMENTS
// ===============================

const trendingMovies = document.getElementById("trendingMovies");
const popularMovies = document.getElementById("popularMovies");
const watchlistMovies = document.getElementById("watchlistMovies");

const searchInput = document.getElementById("searchInput");
const searchContainer = document.getElementById("searchContainer");

const movieModal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");

const toast = document.getElementById("toast");


// ===============================
// WATCHLIST STORAGE
// ===============================

let watchlist = JSON.parse(localStorage.getItem("cinemaxWatchlist")) || [];

let selectedMovie = null;
let activeGenre = "All";
let searchText = "";

function saveWatchlist() {
    localStorage.setItem(
        "cinemaxWatchlist",
        JSON.stringify(watchlist)
    );
}


// ===============================
// SHOW TOAST MESSAGE
// ===============================

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ===============================
// CREATE MOVIE CARD
// ===============================

function createMovieCard(movie) {

    const isSaved = watchlist.includes(movie.id);

    return `
        <div class="movie-card">

            <div class="poster-container">

                <img
                    src="${movie.image}"
                    alt="${movie.title}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/500x750/171b27/ffffff?text=Movie+Poster';"
                >

                <span class="rating">★ ${movie.rating}</span>

            </div>

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p class="movie-meta">
                    ${movie.year} • ${movie.genre} • ${movie.duration}
                </p>

                <div class="card-buttons">

                    <button onclick="showMovieDetails(${movie.id})">
                        Details
                    </button>

                    <button
                        class="add-btn ${isSaved ? "saved" : ""}"
                        onclick="toggleWatchlist(${movie.id})"
                    >
                        ${isSaved ? "✓ Saved" : "+ Watchlist"}
                    </button>

                </div>

            </div>

        </div>
    `;
}


// ===============================
// DISPLAY TRENDING MOVIES
// ===============================

function displayTrending() {

    let filteredMovies = movies.filter(movie => {

        const matchesCategory = movie.category === "trending";

        const matchesGenre =
            activeGenre === "All" ||
            movie.genre === activeGenre;

        const matchesSearch =
            movie.title.toLowerCase().includes(searchText);

        return matchesCategory && matchesGenre && matchesSearch;
    });

    if (filteredMovies.length === 0) {
        trendingMovies.innerHTML =
            `<p class="no-results">No matching movies found.</p>`;
        return;
    }

    trendingMovies.innerHTML = filteredMovies
        .map(movie => createMovieCard(movie))
        .join("");
}


// ===============================
// DISPLAY POPULAR MOVIES
// ===============================

function displayPopular() {

    let filteredMovies = movies.filter(movie => {

        const matchesCategory = movie.category === "popular";

        const matchesGenre =
            activeGenre === "All" ||
            movie.genre === activeGenre;

        const matchesSearch =
            movie.title.toLowerCase().includes(searchText);

        return matchesCategory && matchesGenre && matchesSearch;
    });

    if (filteredMovies.length === 0) {
        popularMovies.innerHTML =
            `<p class="no-results">No matching movies found.</p>`;
        return;
    }

    popularMovies.innerHTML = filteredMovies
        .map(movie => createMovieCard(movie))
        .join("");
}


// ===============================
// DISPLAY WATCHLIST
// ===============================

function displayWatchlist() {

    const savedMovies = movies.filter(movie =>
        watchlist.includes(movie.id)
    );

    if (savedMovies.length === 0) {

        watchlistMovies.innerHTML = `
            <p class="no-results">
                Your watchlist is empty. Add some movies to get started!
            </p>
        `;

        return;
    }

    watchlistMovies.innerHTML = savedMovies
        .map(movie => createMovieCard(movie))
        .join("");
}


// ===============================
// DISPLAY ALL SECTIONS
// ===============================

function displayMovies() {
    displayTrending();
    displayPopular();
    displayWatchlist();
}


// ===============================
// ADD / REMOVE WATCHLIST
// ===============================

function toggleWatchlist(id) {

    const movie = movies.find(movie => movie.id === id);

    if (watchlist.includes(id)) {

        watchlist = watchlist.filter(movieId => movieId !== id);

        showToast(movie.title + " removed from watchlist");

    } else {

        watchlist.push(id);

        showToast(movie.title + " added to watchlist ❤️");

    }

    saveWatchlist();
    displayMovies();

    // Update modal button if it is open
    if (selectedMovie && selectedMovie.id === id) {
        updateModalButton();
    }
}


// ===============================
// MOVIE DETAILS MODAL
// ===============================

function showMovieDetails(id) {

    selectedMovie = movies.find(movie => movie.id === id);

    if (!selectedMovie) return;

    modalTitle.textContent = selectedMovie.title;
    modalImage.src = selectedMovie.image;

    modalMeta.textContent =
        `${selectedMovie.year} • ${selectedMovie.genre} • ${selectedMovie.duration} • ★ ${selectedMovie.rating}`;

    modalDescription.textContent = selectedMovie.description;

    updateModalButton();

    movieModal.classList.add("show");
    document.body.style.overflow = "hidden";
}


// ===============================
// UPDATE MODAL BUTTON
// ===============================

function updateModalButton() {

    const isSaved = watchlist.includes(selectedMovie.id);

    const button = document.getElementById("modalWatchlist");

    button.textContent = isSaved
        ? "✓ Remove from Watchlist"
        : "+ Add to Watchlist";
}


// ===============================
// CLOSE MODAL
// ===============================

function closeMovieModal() {

    movieModal.classList.remove("show");
    document.body.style.overflow = "";
    selectedMovie = null;
}

document.getElementById("closeModal")
    .addEventListener("click", closeMovieModal);

movieModal.addEventListener("click", function(event) {

    if (event.target === movieModal) {
        closeMovieModal();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMovieModal();
    }

});

document.getElementById("modalWatchlist")
    .addEventListener("click", function() {

        if (selectedMovie) {
            toggleWatchlist(selectedMovie.id);
        }

    });


// ===============================
// SEARCH MOVIES
// ===============================

document.getElementById("searchToggle")
    .addEventListener("click", function() {

        searchContainer.classList.toggle("show");

        if (searchContainer.classList.contains("show")) {
            searchInput.focus();
        }

    });

searchInput.addEventListener("input", function() {

    searchText = searchInput.value.toLowerCase().trim();

    displayMovies();

});

document.getElementById("clearSearch")
    .addEventListener("click", function() {

        searchInput.value = "";
        searchText = "";

        displayMovies();

    });


// ===============================
// FILTER MOVIES BY GENRE
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");

        activeGenre = this.dataset.genre;

        displayMovies();

    });

});


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    menuBtn.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


// ===============================
// HERO BUTTON
// ===============================

document.getElementById("heroInfo")
    .addEventListener("click", function() {

        document.getElementById("popular").scrollIntoView({
            behavior: "smooth"
        });

    });


// ===============================
// NEWSLETTER FORM
// ===============================

document.getElementById("newsletterForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("newsletterEmail").value.trim();

        if (email === "") {
            showToast("Please enter your email address.");
            return;
        }

        showToast("Thank you for subscribing! ❤️");

        this.reset();

    });


// ===============================
// INITIALIZE WEBSITE
// ===============================

displayMovies();
