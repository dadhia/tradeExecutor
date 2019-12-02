'use strict';
const pick = require('lodash/pick');
const Alpaca = require('@alpacahq/alpaca-trade-api')
const alpaca = new Alpaca();

const handleGetAccount = async () => {
	return getAccountDetails().then(accountDetails => {
		return {
			statusCode: 200,
			body: JSON.stringify(accountDetails),
		};
	}, error => {
		return {
			statusCode: 500,
			body: JSON.stringify({error}),
		};
	});
};

const getAccountDetails = async () => {
	return alpaca.getAccount().then(account => {
		return pick(account,
			'account_number',
			'currency',
			'buying_power',
			'cash',
			'portfolio_value',
			'equity',
			'last_equity',
			'long_market_value',
			'short_market_value'
		);
	}, reason => {
		throw new Error('Unable to get account details.');
	});
};

const isGetAccountRequest = (event, context) => {
	return (event.resource === '/getAccount') && (event.httpMethod === 'GET');
};
 
exports.handler = async (event, context) => {
	if (isGetAccountRequest(event, context)) {
		return handleGetAccount();
	}
	return {
		statusCode: 404,
	};
};

