export function togglePlus(isOpen){
	
    return{
        type: "TOGGLE_PLUS",
        isOpen
    };
}

export function switchDevice(device){
	
    return{
        type: "SWITCH_DEVICE",
        device
    };
}
