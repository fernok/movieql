let movies = [
    {
        id: 0,
        name: "Star Wars",
        score: 8
    },
    {
        id: 1,
        name: "Avengers",
        score: 5
    },
    {
        id: 2,
        name: "The Godfather",
        score: 9
    },
    {
        id: 3,
        name: "Logan",
        score: 3
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};