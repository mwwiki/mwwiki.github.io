# Khởi tạo biến bắt đầu và kết thúc
start = 5
end = 8
result = []

# Lặp qua các dãy số và thêm vào list result
while end <= 80:
    result.append(f"{start}-{end}")
    # Cập nhật start và end cho dãy tiếp theo
    start = end + 4
    end = start + 3

# In ra kết quả dưới dạng chuỗi, các dãy số cách nhau dấu phẩy
print(', '.join(result))
