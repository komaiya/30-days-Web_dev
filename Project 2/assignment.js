const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node readFile.js <file_path>');
  process.exit(1);
}

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`An error occurred: ${err.message}`);
    } else {
      console.log(data);
    }
  });

//1
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node readFile.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

  fs.writeFile(filePath, content, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Content written to file successfully.');
    }
  });
  //2
const request = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node readFile.js <file_path>');
    process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
    if (error) {
        console.error('Error:', error.message);
      } else {
        console.log('Status code: ', response.statusCode);
      }
    });
//3
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie-ID>');
  process.exit(1);
}

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } else {
      console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
    }
  }
});
//4 
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie-ID>');
  process.exit(1);
}

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;


request.get(apiUrl, function (error, response, body) {
  if (!error) {
    const results = JSON.parse(body).results;
    console.log(results.reduce((count, movie) => {
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1
        : count;
    }, 0));
  }
});
/*const request = require('request');

const websiteUrl = process.argv[2];

const loripsum = process.argv[3];


request.get(websiteUrlUrl, function (error, response, body) {
  if (!error) {
    const results = JSON.parse(body).results;
    console.log(results, loripsum) => {
      return results
      loripsum += results 
    };
  }
}); */
//5 
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const FileName = process.argv[3];

request
  .get(url)
  .pipe(fs.createWriteStream(FileName));   


//0
const head = document.querySelector('header');
head.style.color = '#FF0000';
//1
$(document).ready(function(){
  $('header').css('color', '#FF0000');
});
//2
$(document).ready(function(){
  $('#red_header').click(function(){
    $('header').toggleClass('red');
  });
});
//3
$(document).ready(function(){
    $("#red_header").click(function() {
      $("header").addClass("red");
    });
  });
//4
/*$(document).ready(function(){
  $("#toggle_header").click(function() {
    $("header").addClass("red");
    $('header').removeClass('green');
  });
});
$(document).ready(function(){
  $("#toggle_header").click(function() {
    $("header").addClass("green");
    $('header').removeClass('red');
  });
});*/
$(document).ready(function(){
  $("#red_header").click(function() {
    $("header").toggleClass("red green");
  });
});
//5
$(document).ready(function(){
  $("#add_item").click(function(){
    $("UL.my_list").append("<li>Item</li>");
  });
});
//6
$(document).ready(function(){
  $('#update_header').click(function(){
    $('header').html('New Header!!!');
  });
});
//7
$(document).ready(function() {
  $('#fetch_code').click(function() {
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
      $('#character').text(data.name);
    });
  });
});
//8
$(document).ready(function() {
  $('#fetch_code').click(function() {
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(title) {
      $('#list_movies').html("<li>", title, "</li>");
    });
  });
});
//or
// fetches and replace character with URL
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  for (let index in data.results) {
    $('UL#list_movies').append('<li>' + data.results[index].title + '</li>');
  }
});
//9
$.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data){
  $('#hello').text(data.hello);
});




