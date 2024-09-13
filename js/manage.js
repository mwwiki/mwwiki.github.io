document.addEventListener('DOMContentLoaded', function() {
    // Tạo phần comment
    var comment = document.createComment('Google tag (gtag.js)');
    
    // Tạo script đầu tiên
    var scriptTag1 = document.createElement('script');
    scriptTag1.setAttribute('async', '');
    scriptTag1.src = 'https://www.googletagmanager.com/gtag/js?id=G-BWECS7ETT9';

    // Tạo script thứ hai
    var scriptTag2 = document.createElement('script');
    scriptTag2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BWECS7ETT9');
    `;

    // Chèn các thẻ vào ngay sau thẻ <head>
    var head = document.head;
    head.appendChild(comment);
    head.appendChild(scriptTag1);
    head.appendChild(scriptTag2);
});
