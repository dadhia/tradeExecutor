// sample http request for getAccount
// for testing purposes this is just a subset of the full event that the lambda receives
module.exports = {
	resource: '/getAccount',
	path: '/getAccount',
	httpMethod: 'GET',
	requestContext: {
		requesttime: '02/Dec/2019:02:27:44 +0000',
		httpMethod: 'GET',
		resourcePath: '/getAccount',
		domainName: '12345.execute-api.us-east-1.amazonaws.com',
		apiId: '12345'
	},
}
