interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string;
}

const movie1: Movie = {
    name: "Star Wars",
    ratings: 8.9,
}

console.log(movie1);
