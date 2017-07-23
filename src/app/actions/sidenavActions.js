export function toggleSidenav(isOpen, isMobile){
	
    return{
        type: "TOGGLE_SIDENAV",
        isOpen,
        isMobile
    };
}

