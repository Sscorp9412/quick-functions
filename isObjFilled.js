
// ** Check if a object is empty or not
// ** @return true: filled false: empty
const isObjFilled = (obj) => {
	let keys = Object.keys(obj)
	return keys.length>0? true:false
}

module.exports.isObjFilled = isObjFilled

