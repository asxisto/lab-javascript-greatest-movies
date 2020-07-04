// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arr => {
  return arr.map(function (value) {
    return value.director;
  });
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies => {
  return movies.filter(value => {
    return value.director === 'Steven Spielberg' && value.genre.indexOf('Drama') !== -1;
  }).length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movies => {
  if (!movies.length) {
    return 0;
  } else {
    sumRates = movies.reduce((accumulator, value) => {
      const totalRate = accumulator + value.rate;
      return totalRate;
    }, 0);
    // moviesRated = movies.filter(value => typeof value.rate === 'number');
    moviesRated = movies.filter(value => {
      return value.rate > 0;
    });

    return Math.round((sumRates / moviesRated.length) * 100) / 100;
  }
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
  if (!movies.length) {
    return 0;
  } else {
    let dramaRate = ratesAverage(
      movies.filter(value => {
        return value.genre.indexOf('Drama') !== -1;
      })
    );
    return dramaRate;
  }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies => {
  let moviesOrdered = [...movies];
  moviesOrdered = moviesOrdered.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return moviesOrdered;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let orderedArray = orderByYear(movies);
  let movieTitles = orderedArray.map(name => name.title);
  let top = movieTitles.slice(0, 20);
  return top;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
