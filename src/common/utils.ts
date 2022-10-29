export function getAPIHostname(url) {
    // GET RAILS API LOCALHOST
	const LOCALHOST_ADDR = '127.0.0.1';
	let hostname = LOCALHOST_ADDR; //

	if (url.hostname.includes(LOCALHOST_ADDR)) {
		//hostname = 'https://api.rotamental.com.br';
        hostname = `http://${LOCALHOST_ADDR}:3000`;
		console.log('1');
		console.log(hostname);
	} else {
		//hostname = "https://" + url.hostname;
		hostname = 'https://api.rotamental.com.br';
		console.log('2');
	}
	return hostname;
}
