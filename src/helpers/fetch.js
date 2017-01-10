export default (url, options, token, successCallback, failureCallback) => {

	fetch(url, Object.assign({}, {
	    headers: {
	      'x-auth-token': token,
	      'Accept': 'application/json'
	    }
  }, options))
    .then(res => res.json())
    .then(successCallback, failureCallback)
}