function openPage(page) {
	// If the window is less than 800px wide, open the page in the same tab
	const isMobile = window.innerWidth < 800;
	window.open(page, isMobile ? '_self' : '_blank');
}