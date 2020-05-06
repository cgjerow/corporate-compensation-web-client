

const CONSTS =
{
	CLIENTID: '2rq54k6gvro5m62dj0fqqtv86g',
};


// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.
var params = {
	IdentityPoolId: "us-east-1:a472ff3a-10a4-4bed-986e-b3fd5dd1b0ac"
};

// set the Amazon Cognito region
AWS.config.region = 'us-east-1';
// initialize the Credentials object with our parameters
AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);

// We can set the get method of the Credentials object to retrieve
// the unique identifier for the end user (identityId) once the provider
// has refreshed itself
AWS.config.credentials.get(function(err) {
	if (err) {
		console.log("Error: "+err);
		return;
	}
	console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);

	// Other service clients will automatically use the Cognito Credentials provider
	// configured in the JavaScript SDK.
	var cognitoSyncClient = new AWS.CognitoSync();
	cognitoSyncClient.listDatasets({
		IdentityId: AWS.config.credentials.identityId,
		IdentityPoolId: "YOUR_COGNITO_IDENTITY_POOL_ID"
	}, function(err, data) {
		if ( !err ) {
			console.log(JSON.stringify(data));
		}
	});
});


// set the Amazon Cognito region
AWS.config.region = 'us-east-1';
// initialize the Credentials object with our parameters
AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);

// We can set the get method of the Credentials object to retrieve
// the unique identifier for the end user (identityId) once the provider
// has refreshed itself
AWS.config.credentials.get(function(err) {
	if (err) {
		console.log("Error: "+err);
		return;
	}
	console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);

	// Other service clients will automatically use the Cognito Credentials provider
	// configured in the JavaScript SDK.
	var cognitoSyncClient = new AWS.CognitoSync();
	cognitoSyncClient.listDatasets({
		IdentityId: AWS.config.credentials.identityId,
		IdentityPoolId: "YOUR_COGNITO_IDENTITY_POOL_ID"
	}, function(err, data) {
		if ( !err ) {
			console.log(JSON.stringify(data));
		}
	});
});
