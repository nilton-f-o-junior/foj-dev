# Editing Files

## Vim

`movement`

```md
    ↑
    k       * h is on the left
← h   l →   * l is on the right
    j       * j looks like a down arrow
    ↓
```

`insert`

```md
i = edit before the cursor
a = edit after the cursor
o = Open a new line below
```

`delete`

```md
dd = delete the current line
```

`save and quit`

```
:w save the file
:q =  quit
:wq = save and quit
:q! = quit without saving
```

`copy and paste`

```md
yy = yank (copy) the current line
p = paste the yanked content after the cursor
```

`undo and redo`

```md
u: undo the last change
Ctrl+r: redo the last undone change
```

`move`

```md
w = beginning of the next word
b = beginning of the previous word
0 = beginning of the current line
$ = end of the current line
gg = beginning of the file
G = end of the file  
```

`open file`

```md
:e <filename> = open another file
```

`search and replace`

```md
/ <text> = search for the specified text
n = find the next occurrence of the searched text
N = find the previous occurrence of the searched text
:%s/<old_text>/<new_text>/g = replace all occurrences of the old text with the new text
```

## Nano

`movement`

```md
Ctrl + F = page down
Ctrl + B = page up
Ctrl + A = go to the beginning of the line
Ctrl + E = go to the end of the line
Arrow keys = move the cursor  
```

`editing`

```md
Ctrl + O = open a file to edit
Ctrl + R = insert the contents of another file
Ctrl + W = search for text
Ctrl + K = cut the current line
Ctrl + U = paste the cut text
Ctrl + J = justify the paragraph
Ctrl + _ = undo the last action
Ctrl + ^ = redo the last undone action  
```

`text`

```md
Ctrl + 6 = mark the beginning of a block to copy or move
Ctrl + K = cut the marked block
Ctrl + U = paste the cut block
Ctrl + J = justify the marked block
```

`file`

```md
Ctrl + X = exit
Ctrl + S = save
Ctrl + W = save the file with another name
```

`help`

```md
Ctrl + G: display the help screen with all commands  
```
