let func = function () {
  // Use the Star Wars API to get all of the opening crawls for the movie.

  function getMovieData() {
    let swArr = [];

    fetch(`https://swapi.co/api/films/1/`)
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/2/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/3/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/4/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/5/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/6/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx, arr) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
        return fetch(`https://swapi.co/api/films/7/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;

        planetsArr.forEach(function (val, idx, arr) {
          fetch(val).then(function (data) {
            movieObj.planets.push(data.name);
          });
        });
        swArr.push(movieObj);
      });
    console.log(swArr);
    return swArr;
  }
  getMovieData();
};

// console.log(func());
func();
