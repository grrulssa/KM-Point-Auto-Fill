function autoFillPoints() {
  // 모든 체크박스 선택
  document.querySelectorAll('input[name="chkUse"]').forEach((checkbox) => {
    checkbox.checked = true;
  });

  // 각 항목에 대해 포인트 입력
  document.querySelectorAll(".reli.wbox").forEach((item, index) => {
    const totalPrice = item.querySelector(
      `#totalPrice_${index + 1}`
    ).textContent;
    const pointInput = item.querySelector(`#spoint_${index + 1}`);
    if (pointInput) {
      pointInput.value = totalPrice.replace(/[^0-9]/g, "");
      pointInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });

  // 포인트 사용신청 버튼 활성화 (필요한 경우)
  const submitButton = document.querySelector("#point_req_btn");
  if (submitButton) {
    submitButton.classList.remove("btn_dis");
    submitButton.removeAttribute("aria-disabled");
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autoFill") {
    autoFillPoints();
    sendResponse({ status: "완료" });
  }
});
