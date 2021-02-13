Answer:

1. 
```sql
select
	u.ID,
	u."UserName",
	"uParent"."UserName"
from
	"USERS" u
left join "USERS" "uParent" on
	u."Parent"::int = "uParent".ID::int
```

2. [Answer small express server](https://github.com/rustamin/backend-nodejs/tree/master/search-movies-service)
   - [Demo search movie](http://34.101.89.5:8123/search?s=Inception&page=1)
   - [Demo detail movie](http://34.101.89.5:8123/detail?t=superman)
   - [Unit test in here](https://github.com/rustamin/backend-nodejs/tree/master/search-movies-service/api-service/api/packages/movie/test):
     - Run unit test `DATABASE_DATABASE=movies_test ./node_modules/mocha/bin/mocha search-movies-service/api-service/api/packages/movie/test/serviceTest.js`
3. [Answer find string in first bracket](https://github.com/rustamin/backend-nodejs/blob/master/answer/findString.js)
   - [Unit test](https://github.com/rustamin/backend-nodejs/tree/master/answer/findStringTest.js) `./node_modules/mocha/bin/mocha answer/findStringTest.js`
4. [Answer grouping anagrams](https://github.com/rustamin/backend-nodejs/blob/master/answer/groupAnagrams.js)
   - [unit test](https://github.com/rustamin/backend-nodejs/blob/master/answer/groupAnagramsTest.js) `./node_modules/mocha/bin/mocha answer/groupAnagramsTest.js`


Note: 
- Please execute commands `cd answer && npm install` to run unit test for answer number 3, 4
