function toggleNav() {
	const nav = document.getElementById("navbar");
	const contentContainer = document.getElementById("content-container");

	if(nav.classList.contains("collapsed")) {
		nav.classList.remove("collapsed");
		contentContainer.classList.remove("collapsed");
	}else{
		nav.classList.add("collapsed");
		contentContainer.classList.add("collapsed");
	}

}