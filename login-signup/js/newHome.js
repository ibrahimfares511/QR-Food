const navbar = document.getElementsByClassName('navbar')[0];
const navLink = document.querySelectorAll('.navbar-nav .nav-link');
const sections = Array.from(document.getElementsByClassName('check-scroll'));

// ============== When Scroll ===============
window.addEventListener('scroll', function () {
	// =================== Add Class On Navbar ===================
	if (window.scrollY > 100) {
		navbar.classList.add('fixed');
	} else {
		navbar.classList.remove('fixed');
	}
	// ================== Add Class Active On NavLink ==================
	sections.forEach((sec) => {
		if (this.window.scrollY > sec.offsetTop - 100) {
			let sectionId = sec.id;
			navLink.forEach((link) => link.classList.remove('active'));
			document
				.querySelector(`.nav-link[data-scroll="${sectionId}"]`)
				.classList.add('active');
		}
	});
});
