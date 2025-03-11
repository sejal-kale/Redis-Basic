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
