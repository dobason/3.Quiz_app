# 🧠 Quiz App

Ứng dụng trắc nghiệm (Quiz App) giúp người dùng luyện tập kiến thức qua các câu hỏi ngắn.  
Được xây dựng bằng **HTML**, **CSS**, và **JavaScript** — với giao diện thân thiện, phản hồi trực quan, và điểm số hiển thị sau khi hoàn thành bài test.

---

## 🚀 Demo

<img width="265" height="138" alt="image" src="https://github.com/user-attachments/assets/b7dae457-4fba-4d9f-98d2-4da1f03d79b9" />

<img width="283" height="155" alt="image" src="https://github.com/user-attachments/assets/b4f79e9a-d96c-4933-b946-ad7bc07a6893" />


## 🧩 Tính năng chính

- 📝 Hiển thị câu hỏi và nhiều lựa chọn trả lời  
- ⏭️ Chuyển sang câu tiếp theo sau khi chọn đáp án  
- ✅ Kiểm tra đúng/sai tức thì và cập nhật điểm  
- 🧾 Hiển thị tổng điểm sau khi làm xong tất cả câu hỏi  
- 🔁 Cho phép làm lại quiz sau khi kết thúc  
- 🎨 Giao diện sinh động, dễ hiểu, tối ưu cho trải nghiệm học tập  

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|------------|-----------|
| **HTML5** | Tạo bố cục và cấu trúc trang quiz |
| **CSS3** | Trang trí, tạo hiệu ứng chuyển câu, màu sắc đúng/sai |
| **JavaScript (ES6)** | Quản lý dữ liệu câu hỏi, tính điểm, xử lý sự kiện |
## ⚙️ Cách chạy ứng dụng

## 1️⃣ Tải mã nguồn
git clone https://github.com/<your-username>/quiz-app.git
## 2️⃣ Mở file index.html
Chạy trực tiếp trên trình duyệt — không cần server hoặc cài đặt thêm.

## 🧮 Cách hoạt động
Ứng dụng lưu trữ danh sách câu hỏi trong file main.js.
Mỗi câu hỏi bao gồm: nội dung, các đáp án, và đáp án đúng.

Ví dụ:
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language"
    ],
    correct: 2
  }
];
Khi người dùng chọn đáp án:

JavaScript kiểm tra xem đáp án có đúng không

Cộng điểm nếu đúng

Chuyển sang câu tiếp theo

Khi hết câu hỏi:

Hiển thị kết quả tổng điểm

Cho phép làm lại quiz bằng nút “Restart”

## 💡 Gợi ý mở rộng
⏱️ Thêm đồng hồ đếm ngược cho mỗi câu hỏi

🧭 Hiển thị tiến trình làm bài (ví dụ: Câu 3/10)

📊 Tính năng xếp hạng điểm cao (High Score)

🎧 Thêm hiệu ứng âm thanh cho đúng/sai

☁️ Lưu kết quả người dùng vào LocalStorage hoặc Firebase

## 👨‍💻 Tác giả
Tên: Sơn Đỗ
Email: son2522004@gmail.com
Năm thực hiện: 2025
