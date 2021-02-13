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
3. 
   - For simplicity `node_modules` is pushed to the repo
   - Run unit test `./node_modules/mocha/bin/mocha findStringTest.js `



