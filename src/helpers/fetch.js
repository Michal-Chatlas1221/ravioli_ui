export default (url, options, token, successCallback, failureCallback) => {

	fetch(url, Object.assign({}, {
	    headers: {
	      'x-auth-token': token,
	      'Content-Type': 'application/json',
        'Accept': 'application/json'
	    }
  }, options))
    .then(res => res.json())
    .then(successCallback, failureCallback)
}