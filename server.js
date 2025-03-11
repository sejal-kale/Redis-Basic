const express =require('express');
const axios =require('axios');
const client =require('./client')

const app =express();

app.get('/', async (req, res) => {
    try {
      // Measure time before checking cache (time spent querying API without cache)
      console.time('API Request Time Before Caching');  // Start measuring time
  
      // Check if cache exists
      const cacheValue = await client.get('todos');
      if (cacheValue) {
        console.timeEnd('API Request Time Before Caching');  // Log time when returning from cache
        return res.json(JSON.parse(cacheValue));  // Return cached data if available
      }
  
      // If no cache, make an API request
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  
      // After fetching from the API, store the response in the cache
      await client.set('todos', JSON.stringify(data));
      await client.expire('todos', 30);  // Set cache expiry time (30 seconds)
  
      // Log the time for the full request (API call + caching)
      console.timeEnd('API Request Time Before Caching');  // Log the time when data is fetched from API
  
      return res.json(data);  // Return data fetched from the API
  
    } catch (error) {
      console.log(error);  // Log any errors
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(9000,()=>{
    console.log("running");
})