document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        // Tạo nút "Copy"
        let copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerText = 'Copy';
        // Thêm sự kiện click cho nút "Copy"
        copyButton.addEventListener('click', () => {
            let code = block.innerText;
            // Sử dụng Clipboard API để sao chép văn bản
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerText = 'Copied!';
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
        // Tạo wrapper để chứa nút "Copy" và khối mã
        let wrapper = document.createElement('div');
        wrapper.className = 'pre-wrapper';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyButton);
    });
});