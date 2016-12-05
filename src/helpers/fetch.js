export default (url, options, token, successCallback) => {

	var myHeaders = Headers.getAll()
	const newHeaders = new Headers(myHeaders);
	myHeaders.append("x-auth-token", token)

	fetch(url, Object.assign({}, options, { headers: myHeaders}))
		.then(resp => {
		if (resp.status === 200) successCallback()
		else if (resp.status === 401) console.log('401')
	});
}