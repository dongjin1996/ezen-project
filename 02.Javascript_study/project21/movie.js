function getWeatherWithCity() {
  var temp = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692?api_key=e74f2fabec48e6b98245dd14c36dd56e&language=ko-KR";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const title = data.title;
      const tagline = data.tagline;
      const overview = data.overview;
      const poster_path = data.poster_path;

      temp.title = title;
      temp.tagline = tagline;
      temp.overview = overview;
      temp.poster_path = poster_path;
      console.log(title);
      console.log(tagline);
      console.log(overview);
      console.log(poster_path);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}
let temp = getWeatherWithCity();
let movieicon = "https://image.tmdb.org/t/p/w500/" + temp.poster_path;
$(".movie-name").text(`${temp.title}`);
$(".sec2-sub1__movie").text(`${temp.overview}`);
$(".sec2-sub2__movie").text(`${temp.tagline}`);
$(".movie-poster > a> img").attr("src", movieicon);
console.log(temp);

// 2 ) 출연자

function getWeatherWithCity1() {
  var temp1 = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692/credits?api_key=e74f2fabec48e6b98245dd14c36dd56e&language=ko-KR";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const name1 = data.cast[0].name;
      const name2 = data.cast[1].name;
      const name3 = data.cast[2].name;
      const name4 = data.cast[3].name;
      const name5 = data.cast[4].name;
      const name6 = data.cast[5].name;
      const actor1 = data.cast[0].profile_path;
      const actor2 = data.cast[1].profile_path;
      const actor3 = data.cast[2].profile_path;
      const actor4 = data.cast[3].profile_path;
      const actor5 = data.cast[4].profile_path;
      const actor6 = data.cast[5].profile_path;

      temp1.name1 = name1;
      temp1.name2 = name2;
      temp1.name3 = name3;
      temp1.name4 = name4;
      temp1.name5 = name5;
      temp1.name6 = name6;
      temp1.actor1 = actor1;
      temp1.actor2 = actor2;
      temp1.actor3 = actor3;
      temp1.actor4 = actor4;
      temp1.actor5 = actor5;
      temp1.actor6 = actor6;
      console.log(name1);
      console.log(actor1);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp1;
}
let temp1 = getWeatherWithCity1();
let movieactor1 = "https://image.tmdb.org/t/p/w500/" + temp1.actor1;
let movieactor2 = "https://image.tmdb.org/t/p/w500/" + temp1.actor2;
let movieactor3 = "https://image.tmdb.org/t/p/w500/" + temp1.actor3;
let movieactor4 = "https://image.tmdb.org/t/p/w500/" + temp1.actor4;
let movieactor5 = "https://image.tmdb.org/t/p/w500/" + temp1.actor5;
let movieactor6 = "https://image.tmdb.org/t/p/w500/" + temp1.actor6;
$(".staff-name1").text(`${temp1.name1}`);
$(".staff-name2").text(`${temp1.name2}`);
$(".staff-name3").text(`${temp1.name3}`);
$(".staff-name4").text(`${temp1.name4}`);
$(".staff-name5").text(`${temp1.name5}`);
$(".staff-name6").text(`${temp1.name6}`);
$(".staff-img1").attr("src", movieactor1);
$(".staff-img2").attr("src", movieactor2);
$(".staff-img3").attr("src", movieactor3);
$(".staff-img4").attr("src", movieactor4);
$(".staff-img5").attr("src", movieactor5);
$(".staff-img6").attr("src", movieactor6);
console.log(temp1);
