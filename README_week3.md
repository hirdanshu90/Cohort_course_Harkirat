- res.send is for sending text
- res.json is for sending json ,,,,, MOSTLY this is used for sending response.

- No return in middleware function. We use res.status().json({}) or next().

- We send once on a get request.( res.send ).

- Purpose and Use of express.json()


