# Redis Basics and How to Use It with Node.js

## What is Redis?

**Redis** (REmote DIctionary Server) is an open-source, in-memory data structure store. It is widely used as a **cache**, **database**, and **message broker** due to its lightning-fast performance and ease of use. Redis supports a variety of **data types**, including **strings**, **lists**, **sets**, **sorted sets**, **hashes**, and more.

### Why Use Redis?

- **Fast Performance**: Redis stores all its data in memory (RAM), making it extremely fast compared to traditional disk-based databases.
- **Caching**: It’s often used to cache frequent queries or data to speed up web applications.
- **Pub/Sub**: Redis can be used for real-time messaging and notifications.
- **Persistence**: Redis supports data persistence to store data on disk, providing reliability along with speed.

---

## Redis Data Types

Redis provides several **data types** to manage and manipulate different kinds of data efficiently.

```plaintext
Redis Data Types
|
|-- Strings
|    |-- GET key
|    |-- SET key value
|    |-- INCR key (increment value)
|
|-- Lists
|    |-- LPUSH key value (Push to the left)
|    |-- RPUSH key value (Push to the right)
|    |-- LRANGE key start stop (Get elements in a range)
|
|-- Sets
|    |-- SADD key value (Add element to the set)
|    |-- SMEMBERS key (Get all elements)
|    |-- SREM key value (Remove element from the set)
|
|-- Hashes
|    |-- HSET key field value (Set field in hash)
|    |-- HGET key field (Get field from hash)
|    |-- HGETALL key (Get all fields and values in hash)
|
|-- Sorted Sets
|    |-- ZADD key score member (Add member to sorted set)
|    |-- ZRANGE key start stop (Get elements by score)
|    |-- ZREM key member (Remove member from sorted set)
|
|-- Bitmaps
|    |-- SETBIT key offset value (Set a bit value)
|    |-- GETBIT key offset (Get bit value)
|
|-- HyperLogLogs
|    |-- PFADD key value (Add value to HyperLogLog)
|    |-- PFCOUNT key (Count unique items)
|
|-- Geospatial Index
|    |-- GEOADD key longitude latitude member (Add member to geospatial index)
|    |-- GEODIST key member1 member2 (Get the distance between two members)
|

```

## Caching with Redis in Express (Node.js)

This example demonstrates how to integrate **Redis** caching into an **Express.js** application for improved performance. The goal is to reduce API calls by caching data in Redis and retrieving it directly from the cache when possible.

### Functionality

The API fetches a list of **todos** from the **JSONPlaceholder** API and caches the data in **Redis** for 30 seconds. The steps are as follows:

1. **Check Redis Cache**:  
   The application first checks if the data (todos) already exists in the Redis cache. If the data is found, it is returned immediately, and the time taken to fetch the data from the cache is logged.
   
2. **Fetch Data from API**:  
   If the data is not available in the cache, the application makes a request to the **JSONPlaceholder API** to fetch the list of todos.
   
3. **Store Data in Cache**:  
   After fetching the data from the API, the application stores the response in Redis and sets an expiration time for the cache (30 seconds).
   
4. **Return Data**:  
   The data is then returned to the client, and the total time taken (including the time for fetching from the API and storing the cache) is logged.

### Code Overview

Here is a breakdown of the important sections of the code:

- **`client.get('todos')`**:  
   This checks if the `todos` data exists in the Redis cache.
   
- **`axios.get('https://jsonplaceholder.typicode.com/todos')`**:  
   This makes an API call to **JSONPlaceholder** if the data is not found in the cache.

- **`client.set('todos', JSON.stringify(data))`**:  
   This stores the `todos` data in the Redis cache.

- **`client.expire('todos', 30)`**:  
   This sets a 30-second expiry time for the cached data.

- **`console.time()` and `console.timeEnd()`**:  
   These are used to measure the time taken for the API request and cache retrieval, providing insights into the performance improvement when using caching.

### How It Works

1. **First Request (Cache Miss)**:  
   The first time a request is made to the endpoint, the data is fetched from the external API (JSONPlaceholder) and stored in Redis. This request will take longer since it's fetching data from the API.

2. **Subsequent Requests (Cache Hit)**:  
   Subsequent requests  30 seconds will retrieve the data from Redis, making the response much faster

### Running  Code

1. **Install Dependencies**:  
   Ensure you have all necessary dependencies installed:
   
   ```bash
   npm install express axios redis

### Redis Documentation

[Redis Documentation](https://redis.io/documentation) This will provide users with easy access to the official Redis documentation.


