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

working directory

staging area

committing changes

gitignore

viewing commit history
