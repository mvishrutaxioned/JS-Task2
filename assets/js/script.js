var searchForm = document.querySelector('#searchForm');
var searchInput = document.querySelector('#search');
var movieGallery = document.querySelector('main .wrapper ul')
var movies = document.querySelectorAll('main .wrapper ul li');

// movies data
var data = [
    {
        id: 1,
        title: 'Shang-Chi and the Legend of the Ten Rings',
        poster: 'https://image.tmdb.org/t/p/w1280/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
        imdb: 7.9,
        description: 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.'
    },
    {
        id: 2,
        title: 'No Time To Die',
        poster: 'https://image.tmdb.org/t/p/w1280/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
        imdb: 7.6,
        description: 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.'
    },
    {
        id: 3,
        title: 'Venom: Let There Be Carnage',
        poster: 'https://image.tmdb.org/t/p/w1280/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
        imdb: 6.8,
        description: 'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.'
    },
    {
        id: 4,
        title: 'Finch',
        poster: 'https://image.tmdb.org/t/p/w1280/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg',
        imdb: 8.2,
        description: "On a post-apocalyptic Earth, a robot, built to protect the life of his dying creator's beloved dog, learns about life, love, friendship, and what it means to be human."
    },
    {
        id: 5,
        title: 'Army of Thieves',
        poster: 'https://image.tmdb.org/t/p/w1280/5YCg0PFnGxDKb24Lmhxz8p4Q8j1.jpg',
        imdb: 7.6,
        description: 'A mysterious woman recruits bank teller Ludwig Dieter to lead a group of aspiring thieves on a top-secret heist during the early stages of the zombie apocalypse.'
    },
    {
        id: 6,
        title: 'Dune',
        poster: 'https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
        imdb: 8,
        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will"
    },
    {
        id: 7,
        title: 'Eternals',
        poster: 'https://image.tmdb.org/t/p/w1280/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg',
        imdb: 7.1,
        description: 'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.'
    },
    {
        id: 8,
        title: 'Apex',
        poster: 'https://image.tmdb.org/t/p/w1280/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg',
        imdb: 5.8,
        description: 'Ex-cop James Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.'
    },
    {
        id: 9,
        title: 'Red Notice',
        poster: 'https://image.tmdb.org/t/p/w1280/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg',
        imdb: 6.9,
        description: "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen."
    },
    {
        id: 10,
        title: 'Free Guy',
        poster: 'https://image.tmdb.org/t/p/w1280/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
        imdb: 7.8,
        description: 'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.'
    },
    {
        id: 11,
        title: 'The Harder They Fall',
        poster: 'https://image.tmdb.org/t/p/w1280/su9WzL7lwUZPhjH6eZByAYFx2US.jpg',
        imdb: 6.7,
        description: 'Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.'
    },
    {
        id: 12,
        title: 'The Addams Family 2',
        poster: 'https://image.tmdb.org/t/p/w1280/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg',
        imdb: 7.3,
        description: 'The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.'
    },
    {
        id: 13,
        title: 'Gunpowder Milkshake',
        poster: 'https://image.tmdb.org/t/p/w1280/5AaKulwpUtkscAokKWtLenGTfVS.jpg',
        imdb: 6.5 ,
        description: 'In her turbulent life as a professional assassin, Sam has no choice but to go rogue to save the life of an innocent 8-year-old girl in the middle of the gang war she has unleashed.'
    }
];

// display movies on load and on search
function displayMovies(data) {
    if(data.length > 1) {
        data.forEach(item => {
            let movie = `
            <li>
                <figure>
                    <img src="${item.poster}" alt="Movie Img">
                </figure>
                <div class="movie-name">
                    <h2>${item.title}</h2>
                    <span>${item.imdb}</span>
                </div>
                <div class="movie-info">
                    <h3>Overview</h3>
                    <p>
                        ${item.description}
                    </p>
                </div>
            </li>
            `;
            movieGallery.innerHTML += movie;
        })
    } else {
        let movie = `
            <li>
                <figure>
                    <img src="${data.poster}" alt="Movie Img">
                </figure>
                <div class="movie-name">
                    <h2>${data.title}</h2>
                    <span>${data.imdb}</span>
                </div>
                <div class="movie-info">
                    <h3>Overview</h3>
                    <p>
                        ${data.description}
                    </p>
                </div>
            </li>
        `;
        movieGallery.innerHTML += movie;
    }
}

// calling function
displayMovies(data)