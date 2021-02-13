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

2. a
3. [Answer find string in first bracket](https://github.com/rustamin/backend-nodejs/blob/master/answer/findString.js)
   - Run unit test `./node_modules/mocha/bin/mocha answer/findStringTest.js`
4. [Answer grouping anagrams](https://github.com/rustamin/backend-nodejs/blob/master/answer/groupAnagrams.js)
   - Run unit test `./node_modules/mocha/bin/mocha answer/groupAnagramsTest.js`


Note: 
- Please execute commands `cd answer && npm install` to run unit test for answer number 3, 4
