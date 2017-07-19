export function sidenavActions(status){
	
	return{
		type: "TOGGLE_SIDENAV",
		payload: new Promise( (resolve, reject) => {
				resolve(status)
		})
	}
}

