(function () {
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

        temp.title = title;
        temp.tagline = tagline;
        console.log(title);
        console.log(tagline);
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
  console.log(temp);
})();
