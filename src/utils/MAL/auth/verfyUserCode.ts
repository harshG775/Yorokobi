const fetch = require("node-fetch");
const qs = require("querystring");

// The authorization code you received from the redirect
const authorizationCode = "def502004d0a5c2020df4bb32866e0d766f38410eb855b9e20c00ca8b7449d50a60befce397872f9a8a0e01adff37ff1f5ea383f6573381190874f1a7616aa24590492e9120417c1ea69c5b34430041c6bea1684f6ea18fca2b9fe3776232a6a2ea5472e05423398cc49be45a78eab70e11a721a221328ebf4b719e06293c8f01a8acd7b77abd6959dc45d7b7535b2fa6dde7a466dafd7aa99b9e79d90b9602ff1a0822b0f3f3f54b93fc2be7bdc2a44a5889f5b84579e2e293d90b6148c7048ea1e8ac0745cac1dfa0e81136e090b2b67503beb9738c7229afa4dd6fcd3095e4c5c8d4ff8147fb4e8b5e42dcd76c4523b275ba45c57c291a52fe021ac53854687def9d6b5fd8510aa568d4832b23a305ff67bfdaf3c82e9ff98130887255e90a353ebd450cd30931932c030319923c666b6f0795bdfda715eb38db35653d45e01ac27018a61850b0c820e585c35801bc15126782cba0610336b6d2e8b1d4c1d51e2beb913cd06b23ebe84ee73d55cb8f4987c98a84a2857646a57d730890f61778c3b5c004e23b6fa5dc69a6895b7670b7263fbd50703f79a3eb285d47b5d48522ada56f333ac5d2d7e996ec5df323c486ff003d127a4370821";

// Your application's client ID and redirect URI
const clientId = "f0dd496b5bf169ce41bb7427a4f5946e";
const redirectUri = "http://localhost:4000/verify";;

// The code verifier used to generate the code challenge
const codeVerifier = "84082e658b7c7908af7cbec9cf29d43f211e70297083345debc0409486cecfda";

// The token endpoint URL
const tokenUrl = "https://myanimelist.net/v1/oauth2/token";

// Prepare the data for the POST request
const tokenData = {
	grant_type: "authorization_code",
	client_id: clientId,
	code: authorizationCode,
	redirect_uri: redirectUri,
	code_verifier: codeVerifier,
	// Include the client_secret if required by the API
};

// Make the POST request to the token endpoint
fetch(tokenUrl, {
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
	body: qs.stringify(tokenData),
})
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
	.then((tokens) => {
		const accessToken = tokens.access_token;
		const refreshToken = tokens.refresh_token;

		console.log(`Access Token: ${accessToken}`);
		console.log(`Refresh Token: ${refreshToken}`);
	})
	.catch((error) => {
		console.error(`Error obtaining token`);
		console.error(error);
	});
