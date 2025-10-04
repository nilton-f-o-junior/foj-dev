# Text Processing

`stdin`

```bash
read name
echo "Hello, word! $name"

# or

sort < list.txt
```

`stdout`

```bash
echo "Hello, word!"

# or

ls -l > file.txt
```

`stderr`

```bash
command_invalid 2> err.txt
```

`cut`

```bash
# user.txt
# Roberto:25:dev
# Alice:20:design

cut -d':' -f1 user.txt   # Roberto, Alice
cut -d':' -f1,2 user.txt # Robert:25, Alice:20 

echo "Hello, word!" | cut -c1-5 # Hello
```

`paste`

```bash
# name.txt
# Roberto
# Alice

# age.txt
# 25
# 20

paste name.txt age.txt
# Roberto 25
# Alice 20

paste -d',' name.txt age.txt
# Roberto, 25
# Alice, 20
```

`sort`
```bash
# name.txt
# Roberto
# Alice

# age.txt
# 25
# 20

sort name.txt 
# Alice
# Roberto

sort -n age.txt
# 20
# 25

sort -r age.txt
# 25
# 20

#sort by specific field
paste -d':' name.txt age.txt
sort -t':' -k2 -n user.txt
```

`tr`
```bash

```

`head`
```bash

```

`tail`
```bash

```

`join`
```bash

```

`split`
```bash

```

`pipe`
```bash

```

`tee`
```bash

```

`n`
```bash

```

`wc`
```bash

```

`expand`
```bash

```

`unexpand`
```bash

```

`uniq`
```bash

```

`grep`
```bash

```

`awk`
```bash

```


