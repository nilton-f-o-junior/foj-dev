# What is a Repository

`git init`

```bash
# create folder + start git
git init project

# or

# start git in the current folder
mkdir project
cd project
git init

# exit
# Initialized empty Git repository in /home/user/project/.git/
```

`git config`

Command responsible for managing Git configurations at three different levels: --system(system), --global(user) and --local(folder)

```bash
# precedence
# local > global > system

# --system
git config --system user.name "user - name"
git config --system --list

# -- global
git config --global user.name "user - name"
git config --global user.email "user@email"
git config --global --list

# --local
git config --local user.email "user@email"
git config --local --list
```

`--list`

```bash
# all
git config --list

# origin (path)
git config --list --show-origin

# 
git config --system list
git config --global list
git config --local list
```

`.gitconfig`

```bash
# init
git init project
cd project
cd .git

#
more config

: <<'END_COMENT'
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true

[user]
  email = user@email

[remote "origin"]
	url = https://github.com/work/project.git
	fetch = +refs/heads/*:refs/remotes/origin/*
END_COMENT
```

`local vs global config`

- global: general personal settings
- local: project settings + remotes + branches

```bash
# global config
[user]
  name = user
  email = user@email

[core]
  editor = code

[alias]
  st = status

# local config
[core]
	repositoryformatversion = 0
	filemode = true
  ...

[user]
  email = work@email

[remote "origin"]
  url = https://github.com/work/project.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

`working directory`

- Working Directory é onde você trabalha normalmente, e o Git é o sistema que guarda um histórico organizado de todas as versões do seu projeto.

`git add`

```bash
# select files
git add text.txt

# adding all files
git add .

# all css files
git add *.css

# all the JS files in the src folder
git add src/*.js

# everything inside the images folder
git add images/
```

`git reset`

```bash
# remove a specific file
git reset text.txt

# remove all files
git reset
```

`git status`

```bash
# It shows which files were changed, but it doesn't show what was changed within them
git status
```

`git diff`

```bash
# shows what has been changed in the files (line by line)
git diff

# files
git diff text.txt 
```

`git commit -m`

```bash
# commit basic
git commit -m "Text"

# -m "feat: new feature"
# -m "fix: bug fix"
# -m "docs: documentation"
# -m "style: formatting, spacing"
# -m "refactor: code refactoring"
# -m "test: test"
# -m "chore: routine tasks"
```

```bash
git add file-1.txt
git commit -m "feat: menssage 1"

git add file-2.txt
git commit -m "docs: message 2"

git add file-3.txt
git commit -m "test: message 3"
```

`git push`

1. git push = "send" Sends your commits from your computer to the internet.
2. origin = "where to" This is the name of the remote repository (GitHub, GitLab, etc.).
3. main = "what to send" This is the name of the agency you want to send to.

```bash
# git push origin main
# │    │      │     │
# │    │      │     └─ "send the Main folder"
# │    │      └─────── "to GitHub"  
# │    └────────────── "send"
# └─────────────────── git command
```

gitignore

viewing commit history
