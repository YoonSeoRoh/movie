//cheerio, axios 모듈 불러오기
//HTML을 가져오는 함수
const cheerio = require("cheerio");
const axios = require("axios");

//해당 사이트 HTML 가져오기
const getHTML = async () => {
  try {
    return await axios.get(
      "https://movie.naver.com/movie/sdb/rank/rmovie.naver"
    );
  } catch (e) {
    console.log(e);
  }
};

//가져온 HTML에서 정보 파싱
//정보를 변수에 저장
const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);
  const $trs = $("#old_content > .list_ranking > tbody > tr");
  let dataArr = [];
  $trs.each((idx, node) => {
    const title = $(node).find(".tit3 a").text();
    const link = $(node).find(".tit3 a").attr("href");

    //빈 값 리턴
    if (title === "") {
      return;
    }

    //배열에 담기
    dataArr.push({
      title: title,
      link: link,
    });
  });
  return dataArr;
};

//모듈화
module.exports = parsing;
