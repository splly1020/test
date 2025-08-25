let currentPage = 1;
const totalPages = 4; // 总页数

const flipbook = document.getElementById('flipbook');
const pages = document.querySelectorAll('.flipbook-page');

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        if (index + 1 === pageNumber) {
            page.style.transform = 'rotateY(0deg)';
            page.style.display = 'block';
        } else {
            page.style.transform = 'rotateY(-180deg)';
            page.style.display = 'none';
        }
    });
}

flipbook.addEventListener('click', (e) => {
    const flipbookRect = flipbook.getBoundingClientRect();
    const clickX = e.clientX - flipbookRect.left;
    const halfWidth = flipbookRect.width / 2;

    if (clickX < halfWidth) {
        // 点击左半部分，显示前一页
        currentPage = (currentPage - 1 + totalPages) % totalPages || totalPages;
    } else {
        // 点击右半部分，显示下一页
        currentPage = (currentPage % totalPages) + 1;
    }

    showPage(currentPage);
});

// 初始化显示第一页
showPage(currentPage);