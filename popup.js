document.getElementById("autoFillButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "autoFill" }, (response) => {
      if (response && response.status === "완료") {
        alert("포인트 입력이 완료되었습니다.");
      } else {
        alert("오류가 발생했습니다. 페이지를 확인해 주세요.");
      }
    });
  });
});
