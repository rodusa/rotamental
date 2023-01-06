import * as cookie from "cookie";

// import { Response } from '@sveltejs/kit';

export async function POST({request}) {
    let body = await request.json();
    console.log('body');
    console.log(body);

    let response = await ApiUserAuthenticate(body);

    const headers = { 
        "Set-Cookie": cookie.serialize("jwt", response.token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/"
        }),
    };    
    
    console.log('Endpoint hit');
    console.log(response);
    
    // if (result.status == 200) {
    //     dispatch('message', {
    //         text: 'LOGIN SUCCEED!'
    //     });        
    // }    

    return new Response(JSON.stringify({
        body: response
    }), {
        status: 200,
        headers
    })
}

async function ApiUserAuthenticate(body) {
	let result = null
    const res = await fetch(body.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'					
        },        
        body: JSON.stringify({
            username: body.username, password: body.password
        })
    })

    const json = await res.json()
    result = json;
    return result;
}



// export async const POST = (request) => {
//   const body = await request.json();

//   const headers = { 
//       "Set-Cookie": cookie.serialize("token", "xyz", {
//           httpOnly: true,
//           sameSite: "lax",
//           maxAge: 60 * 60 * 24 * 7,
//           path: "/"
//       }),
//   };

//   return {
//     body: response, 
//     status: 200,
//     headers
//   };
// };