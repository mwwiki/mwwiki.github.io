# Hàm chuyển đổi dữ liệu với các ô gộp lại thành mã HTML
def convert_to_html_with_merge():
    html = '<table border="1">\n'
    
    # Hàng tiêu đề
    html += '  <thead>\n    <tr>\n'
    html += '      <th>Tên</th>\n'
    html += '      <th>Tuổi</th>\n'
    html += '      <th>Kĩ năng</th>\n'
    html += '    </tr>\n  </thead>\n'
    
    # Thân bảng
    html += '  <tbody>\n'
    html += '    <tr>\n'
    html += '      <td rowspan="2"></td>\n'  # Merge 2 hàng cho cột "Tên"
    html += '      <td rowspan="2"></td>\n'  # Merge 2 hàng cho cột "Tuổi"
    html += '      <td>Lập Trình</td>\n'
    html += '    </tr>\n'
    html += '    <tr>\n'
    html += '      <td>Dạy Học</td>\n'
    html += '    </tr>\n'
    html += '    <tr>\n'
    html += '      <td></td>\n'  # Ô trống cho "Tên"
    html += '      <td></td>\n'  # Ô trống cho "Tuổi"
    html += '      <td>quản lí</td>\n'
    html += '    </tr>\n'
    html += '  </tbody>\n</table>'
    
    return html

# Chuyển đổi dữ liệu và in mã HTML
html_table = convert_to_html_with_merge()
print(html_table)
