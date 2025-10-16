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
# name.txt
# roberto
# alice

# text.txt
# hello-world

tr 'a-z' 'A-Z' < name.txt
# ROBERTO
# ALICE

tr -d '-' < text.txt
# helloworld

tr '-' '\n' < text.txt
# hello
# world
```

`head`
```bash
# text.txt
# Line 1
# Line 2
# Line 3
# Line 4

head -2 text.txt
# Line 1
# Line 2

head -c text.txt
# li

head -2 text.txt text1.txt text2.txt
# Line 1 - text1.txt
# line 2 - text1.txt
# Line 1 - text2.txt
# line 2 - text2.txt
```

`tail`
```bash
# text.txt
# Line 1
# Line 2
# Line 3
# Line 4

tail -2 text.txt
# Line 3
# Line 4

tail -c text.txt
# e 

tail -n +2 text.txt
# line 2
# line 3
# line 4
```

`join`
```bash
# user.txt  # id.txt
# 1 Roberto   # 1 60
# 2 Alice     # 2 83

join user.txt id.txt
# 1 Roberto 60
# 2 Alice 83

join -o 1.2,2.2 user.txt id.txt
# Roberto 60
# Alice 83
```

`split`
```bash
# text.txt
# line 1
# ...
# line 100

split -l 25 text.txt part_
# part_aa  part_ab  part_ac  part_ad

split -n 2 text.txt part_
# part_aa  part_ab

split -l 20 -d text.txt part_
# part_00  part_01  part_02  part_03  part_04
```

`|`
```bash
# text.txt
# line 9
# ...
# line 1

cat text.txt | wc -l
# 100

cat lista.txt | sort | head -3
# Line 1
# Line 2
# Line 3
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


