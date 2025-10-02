# Linux

## Introduction

## Navigation Basics

`pwd (print working directory)`

```md
/home/username/Documents
```

`ls (list)`

```md
Document.txt  Downloads Images
```

`cd (change directory)`

```md
cd Downloads
```

`cat, more, less (display output)`

```md
more new_file.txt
```

`head (output the beginning of files)`

```md
head new_file.txt

line 1
...
line 10
```

`tail (output the last part of files)`

```md
tail new_file.txt

line 91
...
line 100
```

## Creating Files & Deleting Files

`touch (create file/update timestamp)`

```md
touch new_file.txt
```

`> (create file/update timestamp)`

```md
> new_file.txt
```

`mkdir (make directory)`

```md
mkdir NewDirectory
```

## Moving Files

`mv (move)`

```md
mv old_name.txt new_name.txt      // rename
mv report.pdf /home/user/Archive/ // move
```

`cp (copy)`

```md
cp file.txt /tmp/backup/file.txt
```

`rm (remove)`

```md
rm file_to_delete.txt
```

## Directory Hierarchy

```md
/ (Root - main directory)
├── bin/ (Essential system binaries)
├── boot/ (Kernel boot files)
├── dev/ (Device files)
├── etc/ (System configuration files)
├── home/ (Users' personal directories)
│   ├── user1/
│   └── user2/
├── lib/ (Essential shared libraries)
├── media/ (Mount points for removable media)
├── mnt/ (Temporary mount points)
├── opt/ (Optional/additional software)
├── proc/ (Virtual filesystem - processes)
├── root/ (Root user's home directory)
├── run/ (Runtime data)
├── sbin/ (System binaries - root)
├── srv/ (Service data)
├── sys/ (Virtual filesystem - hardware)
├── tmp/ (Temporary files)
├── usr/ (User resources)
│   ├── bin/ (User binaries)
│   ├── lib/ (Libraries)
│   ├── local/ (Local software)
│   └── share/ (Shared data)
└── var/ (Variable data)
    ├── log/ (Log files)
    ├── mail/ (E-mails)
    └── tmp/ (Temporary files preserved between reboots)
```
