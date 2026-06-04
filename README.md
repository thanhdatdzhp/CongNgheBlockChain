<h2 align="center">
    🎓 Faculty of Information Technology (Dai Nam University)
</h2>
<h2 align="center">
    CHAT ROOM DÙNG UDP MULTICAST
</h2>
<div align="center">
    <p align="center">
        <img alt="AIoTLab Logo" width="170" src="https://github.com/user-attachments/assets/711a2cd8-7eb4-4dae-9d90-12c0a0a208a2" />
        <img alt="AIoTLab Logo" width="180" src="https://github.com/user-attachments/assets/dc2ef2b8-9a70-4cfa-9b4b-f6c2f25f1660" />
        <img alt="DaiNam University Logo" width="200" src="https://github.com/user-attachments/assets/77fe0fd1-2e55-4032-be3c-b1a705a1b574" />
    </p>

[![AIoTLab](https://img.shields.io/badge/AIoTLab-green?style=for-the-badge)](https://www.facebook.com/DNUAIoTLab)
[![Faculty of Information Technology](https://img.shields.io/badge/Faculty%20of%20Information%20Technology-blue?style=for-the-badge)](https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin)
[![DaiNam University](https://img.shields.io/badge/DaiNam%20University-orange?style=for-the-badge)](https://dainam.edu.vn)

</div>

---

<h2 align="center">
    🎓 Faculty of Information Technology (Dai Nam University)
</h2>

<h2 align="center">
<h2 align="center">
    HỆ THỐNG XÁC THỰC ĐIỂM SINH VIÊN ỨNG DỤNG BLOCKCHAIN ETHEREUM
</h2>

<div align="center">
    <p align="center">
        <img alt="DaiNam University Logo" width="200" src="https://github.com/user-attachments/assets/77fe0fd1-2e55-4032-be3c-b1a705a1b574" />
    </p>
</div>

---

# 📖 1. GIỚI THIỆU HỆ THỐNG

Hệ thống xác thực điểm sinh viên ứng dụng Blockchain Ethereum là một ứng dụng Web DApp giúp lưu trữ, quản lý và xác thực dữ liệu điểm sinh viên trên nền tảng Blockchain.

Mục tiêu của hệ thống là đảm bảo dữ liệu điểm được lưu trữ minh bạch, không thể chỉnh sửa trái phép và có thể dễ dàng kiểm tra tính toàn vẹn thông qua Smart Contract.

Hệ thống hỗ trợ các chức năng:

* Thêm sinh viên lên Blockchain.
* Cập nhật điểm sinh viên.
* Xác thực dữ liệu điểm.
* Phát hiện dữ liệu bị sửa đổi.
* Lưu lịch sử chỉnh sửa điểm.
* Tạo QR Code xác thực.
* Quét QR xem thông tin sinh viên.
* Kết nối MetaMask xác nhận giao dịch.
* Dashboard thống kê dữ liệu.

---

# 🔧 2. CÔNG NGHỆ SỬ DỤNG

## 🌐 Frontend Web

* HTML5
* CSS3
* JavaScript

Chức năng:

* Xây dựng giao diện người dùng.
* Hiển thị thông tin sinh viên.
* Hiển thị lịch sử thay đổi điểm.
* Tạo và quét QR Code.
* Kết nối Blockchain.

---

## ⛓ Blockchain Ethereum

* Solidity
* Ethereum Sepolia Testnet
* Remix IDE

Chức năng:

* Xây dựng Smart Contract.
* Lưu dữ liệu sinh viên.
* Lưu lịch sử chỉnh sửa điểm.
* Kiểm tra tính toàn vẹn dữ liệu.

---

## 🦊 MetaMask

MetaMask được sử dụng để:

* Kết nối ví Ethereum.
* Xác thực người dùng.
* Ký giao dịch Blockchain.
* Thanh toán phí Gas.

---

## 🔗 Ethers.js

Thư viện Ethers.js được sử dụng để:

* Kết nối Website với Smart Contract.
* Gửi giao dịch lên Blockchain.
* Đọc dữ liệu từ Blockchain.
* Quản lý ví Ethereum.

---

## 📱 QR Code

Hệ thống hỗ trợ:

* Sinh QR Code xác thực sinh viên.
* Quét QR bằng camera.
* Hiển thị thông tin sinh viên.
* Kiểm tra trạng thái dữ liệu.

Mô hình hoạt động:

QR Code

↓

Camera quét QR

↓

Website

↓

Smart Contract

↓

Blockchain Ethereum

↓

Hiển thị thông tin sinh viên

---

# 🚀 3. CHỨC NĂNG HỆ THỐNG

## 👨‍🎓 Quản lý sinh viên

Người dùng có thể:

* Thêm sinh viên mới.
* Xem danh sách sinh viên.
* Xem điểm sinh viên.
* Tìm kiếm sinh viên.

Thông tin lưu trữ:

* Mã sinh viên
* Họ tên
* Lớp
* Địa chỉ ví
* Điểm số

---

## 📝 Quản lý điểm

Hệ thống cho phép:

* Cập nhật điểm sinh viên.
* Kiểm tra dữ liệu sau khi cập nhật.
* Ghi lại lịch sử thay đổi.

Thông tin lịch sử:

* Điểm cũ
* Điểm mới
* Người chỉnh sửa
* Thời gian chỉnh sửa

---

## 🔍 Xác thực dữ liệu

Người dùng nhập mã sinh viên.

Website sẽ:

Website

↓

Smart Contract

↓

Blockchain

↓

Thông tin sinh viên

Hệ thống trả về:

* Thông tin sinh viên
* Điểm số
* Trạng thái dữ liệu
* Lịch sử chỉnh sửa

---

## ⚠️ Phát hiện dữ liệu bị sửa đổi

Khi dữ liệu bị thay đổi:

* Hệ thống đánh dấu:

⚠️ Đã bị sửa đổi

* Hiển thị cảnh báo trên giao diện.
* Lưu thông tin người sửa đổi.
* Lưu ngày giờ sửa đổi.

---

## 📷 Tạo và quét QR Code

Người dùng có thể:

* Tạo QR Code cho sinh viên.
* Quét QR bằng camera.
* Xem nhanh thông tin sinh viên.
* Kiểm tra trạng thái dữ liệu.

Thông tin QR chứa:

* Mã sinh viên
* Họ tên
* Lớp
* Điểm số
* Trạng thái dữ liệu
* Địa chỉ Contract

---

## 📊 Dashboard thống kê

Hệ thống cung cấp:

* Tổng số sinh viên.
* Dữ liệu an toàn.
* Dữ liệu bị sửa đổi.
* Số lần cập nhật điểm.

Dữ liệu được lấy trực tiếp từ Blockchain.

---

# 🏗️ 4. KIẾN TRÚC HỆ THỐNG

Người dùng

↓

Website (HTML/CSS/JS)

↓

Ethers.js

↓

MetaMask

↓

Smart Contract (Solidity)

↓

Ethereum Sepolia Blockchain

↓

Lưu dữ liệu sinh viên

↓

Xác thực dữ liệu

↓

Hiển thị kết quả

---

# 📝 5. CÀI ĐẶT VÀ CHẠY HỆ THỐNG

## Bước 1. Chuẩn bị môi trường

Cài đặt:

* Google Chrome
* MetaMask Extension
* Visual Studio Code
* Live Server
* Remix IDE

---

## Bước 2. Deploy Smart Contract

Mở Remix IDE:

* Compile Smart Contract.
* Deploy lên Ethereum Sepolia.
* Copy Contract Address.
* Copy ABI.

---

## Bước 3. Cấu hình Website

Mở file:

app.js

Cập nhật:

```javascript
const contractAddress = "ĐỊA_CHỈ_CONTRACT";
```

và:

```javascript
const contractABI = [...];
```

---

## Bước 4. Chạy Website

Mở bằng Live Server:

```text
http://127.0.0.1:5500
```

Sau đó:

* Kết nối MetaMask.
* Chuyển sang mạng Sepolia.
* Thêm sinh viên.
* Cập nhật điểm.
* Tạo QR.
* Quét QR xác thực.

---

# 👨‍🏫 GIẢNG VIÊN HƯỚNG DẪN

Thầy: Trần Đăng Công

Khoa Công nghệ Thông tin

Trường Đại học Đại Nam

---

# 👨‍🎓 SINH VIÊN THỰC HIỆN

* Họ và tên: Ngô Thành Đạt
* MSSV: 1671020081
* Lớp: CNTT
* Khoa Công nghệ Thông tin
* Trường Đại học Đại Nam

---

# 📌 KẾT LUẬN

Đề tài đã xây dựng thành công hệ thống xác thực điểm sinh viên ứng dụng Blockchain Ethereum.

Hệ thống cho phép lưu trữ dữ liệu điểm trên Blockchain, kiểm tra tính toàn vẹn dữ liệu, phát hiện các thay đổi trái phép, lưu lịch sử chỉnh sửa và xác thực thông tin thông qua QR Code.

Việc ứng dụng Blockchain giúp nâng cao tính minh bạch, bảo mật và độ tin cậy trong công tác quản lý điểm sinh viên, đồng thời tạo nền tảng cho việc phát triển các hệ thống quản lý giáo dục hiện đại trong tương lai.
