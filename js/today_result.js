window.onload = function () {
  //학업운
  var button = document.querySelector(".startBtn");
  var h2 = document.getElementsByTagName("h2")[0];

  var todayArr = ["충고와 잔소리는 한 끗 차이네.. <br>충고를 하고 싶다면 한 번으로 끝내야 하지.",
    "마지막에 반전이 있을 수 있으니 포기하지 말고 긴장도 늦추지 않길 바라네.",
    "한가함보다 분주한 것이 더 의미있는 하루지. <br>오늘 하루에 감사해 보아라.",
    "말 한마디에 모든 것이 물거품 될 수 있는 법. <br>주변 눈치를 보고 말하라.",
    "아랫사람과 소통히 원활해야 조금 더 새로운 정보를 얻을 수 있으니 명심하길.",
    "찌르는 대로 결과를 볼 수 있는 하루니까 오늘만큼은 발 빠르게 움직여보길 바라네.",
    "자유시간을 여유있게 가지고 싶다면 집중해서 오전내에 일을 마무리 해보길.",
    "상대방 의견도 충분히 들어봐야 할테니 의견을 조율하는 시간을 꼭 가져보길.",
    "누군가는 그대의 노고를 알아줄 것이니 아무도 모른다는 슬픈 생각은 하지 말아라.",
    "고민은 빨리 털어내고 해결방법을 찾는게 우선이니 재빨리 정신차려야 하네.",
    "상대방을 조금 더 믿어보기를 바라네. <br>신뢰를 주면 더 큰일을 해낼 수 있을지 모르는 법.",
    "한 순간의 방심이큰 문제로 이어질 수 있으니 긴장을 늦추지 않는게 중요하지.",
    "충동구매는 뒤돌아서면 후회네.. 불필요한 지출은 스스로 자제해야 하지.",
    "그대가 잘못한 일이 있다면 먼저 용서를 구해보길. <br>용서에도 타이밍이 있는 법.",
    "지금이 가장 빠른 때일수도..있네. <br>늦었다고 생각이 들어도 하려던 일을 멈추지 말길.",
    "오늘 하루는 그대의 손에 달렸네... <br>노력이 있다면 결과도 달라질 수 있지.",
    "오늘은 그대가 주인공이 될 수도 있으니까 소소하더라도 이야깃거리를 만들어보길.",
    "주변 사람들이 그대의 눈치를 보고 있지는 않은가? 최대한 감정 절제를 해야 한다.",
    "얕은 잔머리는 오히려 불리해 진다네.. 오늘은 정직한 길을 택하는게 좋지.",
    "작은 문제를 지금 해결하지 않으면 덧날 수도 있지. 지금 바로 해결해야 한다네.",
    "스트레스가 생기면 주위사람에게 알려서 더 큰 불화를 막아야 한다네.",
    "창의력과 능률은 고정관념에서 탈피하면서 생기는 것임을 잊어서는 안되네!"];

  var num = Math.round(Math.random() * (todayArr.length - 1));
  // var num = Math.round( Math.random() * 2);
  h2.innerHTML = todayArr[num];
  // alert(handArr[num])

  function NotReload() {
     if ((event.ctrlKey == true &&
       (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116)) {
          event.keyCode = 0; event.cancelBubble = true; event.returnValue = false; } } document.onkeydown = NotReload;
}