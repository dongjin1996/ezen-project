//1. 전체 url 가져오기
const currentURL = location.href;
console.log(currentURL);

//2.쿼리스트링 파라메터 가져오기
const urlobj = new URL(currentURL);

//파라매터에 대한 정보가 들어있다.
const params = urlobj.searchParams;
// console.log(params);

//파라메터의 값을 구한다. params.get("변수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

var urlAPI =
  "https://api.openweathermap.org/data/2.5/weather?appid=1eaba4667f8ce894b7f53f3859005b16&units=metric&lang=kr";
urlAPI += "&q=" + city;
//3. ajax 이용해 전체 날씨 정보 알아오기
function getWeatherWithCity(city) {
  var temp = {};

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const celsius = data.main.temp;
      const icon = data.weather[0].icon;

      temp.celsius = celsius.toFixed(0);
      temp.icon = icon;
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}

//4. 데이터 바인딩 작업
$(".region-title").text(`${krcity} 상세날씨`);
let temp = getCitywearther(q);
