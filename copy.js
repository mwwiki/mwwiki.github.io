document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        let copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerText = 'Copy';
        copyButton.addEventListener('click', () => {
            let code = block.innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerText = 'Copied!';
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
        let wrapper = document.createElement('div');
        wrapper.className = 'pre-wrapper';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyButton);
    });
});