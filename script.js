function enterSite() {
  // 替換為實際網站連結
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function denyAccess() {
  document.body.innerHTML = `
    <div class="denied">
      <h2>很抱歉，您必須年滿 18 歲才能進入本網站。</h2>
      <img src="denied.jpg" alt="拒絕訪問圖片">
    </div>
  `;
}
