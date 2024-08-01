interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number
}

interface MovieGenra extends MovieDetails {
    genra: string
}

const movie1: MovieGenra = {
    name: "Star Wars",
    ratings: 8.9,
    genra: "Action",
    printMovieInfo(name: string, price: number, ratings: number): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`
    }
}

const res = movie1.printMovieInfo("John Wick", 100, 8)
console.log(res);
