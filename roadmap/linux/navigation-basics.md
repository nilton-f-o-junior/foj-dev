# Linux

## Introduction

## Navigation Basics

`pwd (print working directory)`

```md
/home/username/Documents
```

`ls, ls -a, ls -la (list)`

```md
ls
 Document.txt  Downloads Images

la -la
 drwx------ 1 user user  280 Aug 16 06:31 .
 drwxr-xr-x 1 root root    8 Jul 28 00:00 ..
```

`tab: autocomplete`
  
```md
tab + <name>
```

`cd (change directory)`

```md
cd Downloads
```

`cat, more, less (display output)`

```md
more new_file.txt
```

`head (output the beginning of files) and tail (output the last part of files)`

```md
head new_file.txt

 line 1
 ...
 line 10

tail new_file.txt

 line 91
 ...
 line 100
```

`clear or ctrl + l`

```md
clear
ctrl + l 
```

## Creating Files & Deleting Files

`touch or >`

```md
touch <name>
touch arq.txt
    
> <name>
> arq.txt

// multiples files
touch <name> <name2> <name3>

// ocult files
touch .<name>   
```

`mkdir (make directory)`

```md
mdkir <name>

// name + space
mkdir <name>\ <name>

// multiples directories
mkdir -p dir/dir/dir1/dir2  

// ocult directories
mdkir .<name>
```

## Moving Files

`mv <name> <path> (move)`

```md
mv old_name.txt new_name.txt      // rename
mv report.pdf /home/user/Archive/ // move
```

`cp <nome> path (copy)`

```md
cp file.txt /tmp/backup/file.txt
```

`rm <name> or rm -r <name> or rm -rf <name> (remove)`

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
