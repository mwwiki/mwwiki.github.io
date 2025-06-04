// // Function to create and add the menu
// function addMenu() {
//     // Create the menu HTML structure
//     const menuHTML = `
//         <div class="home-content">
//             <i class="fas fa-bars"></i>
//             <span class="menu-text">Menu</span>
//         </div>
//         <ul class="nav-list">
//             <li>
//                 <ul class="sub-menu">
//                     <li><a class="link-name">Hướng Dẫn Cơ Bản</a></li>
//                     <li><a href="/html/scriptaccess.html">Cách Truy Cập Script</a></li>
//                     <li><a href="/html/editscript.html">Cách Chỉnh Sửa Kịch Bản</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <div class="icon-link">
//                     <a>
//                         <i class="fa-solid fa-book"></i>
//                         <span class="link-name">Hướng Dẫn Cơ Bản</span>
//                     </a>
//                     <i class="fas fa-caret-down arrow"></i>
//                 </div>
//                 <ul class="sub-menu">
//                     <li><a class="link-name">Hướng Dẫn Cơ Bản</a></li>
//                     <li><a href="/html/scriptaccess.html">Cách Truy Cập Script</a></li>
//                     <li><a href="/html/editscript.html">Cách Chỉnh Sửa Kịch Bản</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <div class="icon-link">
//                     <a>
//                         <i class="fa-solid fa-circle-info"></i>
//                         <span class="link-name">Giới Thiệu</span>
//                     </a>
//                     <i class="fas fa-caret-down arrow"></i>
//                 </div>
//                 <ul class="sub-menu">
//                     <li><a class="link-name">Giới Thiệu</a></li>
//                     <li><a href="/html/lua.html">LUA Là Gì</a></li>
//                     <li><a href="/html/caseandexplain.html">Ví Dụ Cơ Bản Và Giải Thích</a></li>
//                     <li><a href="/html/luacase.html">Ví Dụ Về Các Chức Năng Của LUA</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <div class="icon-link">
//                     <a>
//                         <i class="fa-solid fa-scroll"></i>
//                         <span class="link-name">Script</span>
//                     </a>
//                     <i class="fas fa-caret-down arrow"></i>
//                 </div>
//                 <ul class="sub-menu">
//                     <li><a href="/html/#" class="link-name">Script</a></li>
//                     <li><a href="/html/event.html">Sự Kiện</a></li>
//                     <li><a href="/html/gamerule.html">Quy Luật Thế Giới</a></li>
//                     <li><a href="/html/world.html">Quản Lí Thế Giới</a></li>
//                     <li><a href="/html/game.html">Quản Lí Trò Chơi</a></li>
//                     <li><a href="/html/block.html">Quản Lí Khối</a></li>
//                     <li><a href="/html/buff.html">Quản Lí Trạng Thái</a></li>
//                     <li><a href="/html/actor.html">Quản Lí Thực Thể/Actor Management Interface(Cần Góp Ý Dịch)</a></li>
//                     <li><a href="/html/player.html">Quản Lí Người Chơi</a></li>
//                     <li><a href="/html/creature.html">Quản Lí Sinh Vật</a></li>
//                     <li><a href="/html/ui.html">Quản Lí Giao Diện UI</a></li>
//                     <li><a href="/html/area.html">Quản Lí Khu Vực</a></li>
//                     <li><a href="/html/chat.html">Quản Lí Chat</a></li>
//                     <li><a href="/html/team.html">Quản Lí Đội</a></li>
//                     <li><a href="/html/item.html">Quản Lí Vật Phẩm</a></li>
//                     <li><a href="/html/backpack.html">Quản Lí Túi Đồ</a></li>
//                     <li><a href="/html/objectlib.html">Quản Lí Đối Tượng</a></li>
//                     <li><a href="/html/varlib2.html">Quản Lí Biến</a></li>
//                     <li><a href="/html/worldcontainer.html">Quản Lí Vật Chứa/Container Management Interface(Cần Góp Ý Dịch)</a></li>
//                     <li><a href="/html/mapmark.html">Quản Lí Đánh Dấu Thế Giới/Minimap Management Interface(Cần Góp Ý Dịch)(Không Hoạt Động)</a></li>
//                     <li><a href="/html/spawnport.html">Quản Lí Điểm Hồi Sinh</a></li>
//                     <li><a href="/html/timer.html">Quản Lí Bộ Đếm Giờ</a></li>
//                     <li><a href="/html/graphic.html">Quản Lí Đồ Họa/Graphics and text information management interface(Không Hoạt Động)</a></li>
//                     <li><a href="/html/listenparam.html">Function monitoring management interface</a></li>
//                     <li><a href="/html/valuegroup.html">Quản Lí Nhóm Biến</a></li>
//                     <li><a href="/html/costomui.html">Quản Lí UI</a></li>
//                     <li><a href="/html/displayboard.html">Quản Lí Bảng Hiện Thị</a></li>
//                     <li><a href="/html/cloudsever.html">Quản Lí Máy Chủ Đám Mây</a></li>
//                 </ul>
//             </li>
//         </ul>
//     `;

//     // Insert the menu HTML into the container
//     const menuContainer = document.querySelector('.sidebar.close');
//     menuContainer.innerHTML = menuHTML;
// }

// // Call the addMenu function to add the menu automatically on page load
// document.addEventListener("DOMContentLoaded", addMenu);


// Chèn nội dung vào cuối của sidebar
sidebar.insertAdjacentHTML('beforeend', newContent);

let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("show");
    });
}