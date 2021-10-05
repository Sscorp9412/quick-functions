let localhost = "http://localhost:9000/admin/add"
let apache = "http://3.18.89.35:9000/register?ref=nischaySharma"
const PORT = 9000

const useUrl = (url) => {
	const splittedUrl = url.split(`${PORT}`)[0]
	//console.log(splittedUrl)
	return `${splittedUrl}${PORT}`
}

const getLocation = useUrl(apache)
console.log(getLocation)
