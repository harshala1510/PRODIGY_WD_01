function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Deactivate all nav links
    document.querySelectorAll('.nav-links span').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Highlight selected nav link
    document.getElementById('nav-' + pageId).classList.add('active');
}