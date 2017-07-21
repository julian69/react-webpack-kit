export function setidenav(isOpen, isMobile){
	
	return{
		type: "TOGGLE_SIDENAV",
		isOpen,
		isMobile
	}
}

export function toggleSidenav(isOpen){
	
	return{
		type: "SET_SIDENAV",
		isOpen
	}
}
