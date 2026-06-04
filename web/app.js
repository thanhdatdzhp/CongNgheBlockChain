const contractAddress = "0xFF6A9d5aCAB5d3a74dA1772160c30650ceC93f68";

const abi = [
  "function addStudent(string,string,string,address,uint256)",
  "function updateScore(string,uint256)",
  "function fakeModifyData(string,uint256)",
  "function getStudentById(string) view returns(string,string,string,address,uint256,bool)",
  "function verifyData(string) view returns(bool,string)"
];

let provider;
let signer;
let contract;

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3500);
}

function checkConnect() {
  if (!contract) {
    showToast("Bạn cần kết nối MetaMask trước", "error");
    return false;
  }
  return true;
}

async function connectMetaMask() {
  try {
    if (!window.ethereum) {
      showToast("Bạn chưa cài MetaMask", "error");
      return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();

    contract = new ethers.Contract(
      contractAddress,
      abi,
      signer
    );

    document.getElementById("connectButton").innerText =
      "✅ Đã kết nối MetaMask";

    showToast("Kết nối MetaMask thành công", "success");
  } catch (err) {
    console.log(err);
    showToast("Lỗi kết nối MetaMask", "error");
  }
}

async function addStudent() {
  if (!checkConnect()) return;

  try {
    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const className = document.getElementById("studentClass").value.trim();
    const wallet = document.getElementById("studentWallet").value.trim();
    const score = document.getElementById("studentScore").value.trim();

    if (!id || !name || !className || !wallet || score === "") {
      showToast("Vui lòng nhập đầy đủ thông tin", "error");
      return;
    }

    const tx = await contract.addStudent(
      id,
      name,
      className,
      wallet,
      score
    );

    showToast("Đang ghi dữ liệu lên blockchain...", "warning");

    await tx.wait();

    showToast("Thêm sinh viên thành công", "success");
  } catch (err) {
    console.log(err);
    showToast("Lỗi thêm sinh viên hoặc mã sinh viên đã tồn tại", "error");
  }
}

async function updateScore() {
  if (!checkConnect()) return;

  try {
    const id = document.getElementById("scoreStudentId").value.trim();
    const score = document.getElementById("scoreValue").value.trim();

    if (!id || score === "") {
      showToast("Vui lòng nhập mã sinh viên và điểm", "error");
      return;
    }

    const tx = await contract.updateScore(id, score);

    showToast("Đang cập nhật điểm lên blockchain...", "warning");

    await tx.wait();

    showToast("Cập nhật điểm hợp lệ thành công", "success");
  } catch (err) {
    console.log(err);
    showToast("Lỗi cập nhật điểm", "error");
  }
}

async function fakeModifyData() {
  if (!checkConnect()) return;

  try {
    const id = document.getElementById("tamperStudentId").value.trim();
    const score = document.getElementById("tamperScore").value.trim();

    if (!id || score === "") {
      showToast("Vui lòng nhập mã sinh viên và điểm giả lập", "error");
      return;
    }

    const tx = await contract.fakeModifyData(id, score);

    showToast("Đang giả lập sửa đổi dữ liệu...", "warning");

    await tx.wait();

    showToast("Dữ liệu đã bị sửa đổi để demo cảnh báo", "warning");
  } catch (err) {
    console.log(err);
    showToast("Lỗi giả lập sửa đổi", "error");
  }
}

async function getStudent() {
  if (!checkConnect()) return;

  try {
    const id = document.getElementById("searchStudentId").value.trim();

    if (!id) {
      showToast("Vui lòng nhập mã sinh viên", "error");
      return;
    }

    const s = await contract.getStudentById(id);

    document.getElementById("result").innerHTML = `
      <div class="result-box">
        <p><b>Mã SV:</b> ${s[0]}</p>
        <p><b>Họ tên:</b> ${s[1]}</p>
        <p><b>Lớp:</b> ${s[2]}</p>
        <p><b>Ví:</b> ${s[3]}</p>
        <p><b>Điểm:</b> ${s[4].toString()}</p>
        <p><b>Trạng thái:</b> ${
          s[5] ? "⚠️ Đã bị sửa đổi" : "✅ Bình thường"
        }</p>
      </div>
    `;

    showToast("Tra cứu sinh viên thành công", "success");
  } catch (err) {
    console.log(err);
    showToast("Không tìm thấy sinh viên", "error");
  }
}

async function verifyData() {
  if (!checkConnect()) return;

  try {
    const id = document.getElementById("verifyStudentId").value.trim();

    if (!id) {
      showToast("Vui lòng nhập mã sinh viên", "error");
      return;
    }

    const result = await contract.verifyData(id);

    if (result[0]) {
      document.getElementById("verifyResult").innerHTML = `
        <div class="safe">✅ ${result[1]}</div>
      `;
      showToast("Dữ liệu chưa bị sửa đổi", "success");
    } else {
      document.getElementById("verifyResult").innerHTML = `
        <div class="danger">🚨 ${result[1]}</div>
      `;
      showToast("CẢNH BÁO: Dữ liệu đã bị sửa đổi", "error");
    }
  } catch (err) {
    console.log(err);
    showToast("Lỗi kiểm tra dữ liệu", "error");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("connectButton")
    .addEventListener("click", connectMetaMask);
});