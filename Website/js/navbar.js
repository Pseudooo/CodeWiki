function toggleNav() {

	const nav = document.getElementById("navbar");
	const navBtn = document.getElementById("nav-button");

	if(nav.classList.contains("collapsed")) {
		nav.classList.remove("collapsed");
		navBtn.classList.remove("collapsed");
	}else{
		nav.classList.add("collapsed");
		navBtn.classList.add("collapsed");
	}

}
