# Git - Multiples Git Accounts

`multiple git accounts`

```bash
# create - count 1
ssh-keygen -t ed25519 -C "your_email@user.com"
Enter file in which to save the key (/home/user/.ssh/id_ed25519):/home/user/.ssh/user_ed25519
# enter ... enter

cd .ssh/
more user_ed22519
# copy > github > settings > SSH and GPG keys > new SSH > paste > add

# create - count 2
ssh-keygen -t ed25519 -C "your_email@job.com"
Enter file in which to save the key (/home/user/.ssh/id_ed25519):/home/user/.ssh/job_ed25519
# enter ... enter

cd .ssh/
more job_ed22519
#  copy > github > settings > SSH and GPG keys > new SSH > paste > add
```

`file config multiples git accounts`

```bash
cd .ssh
touch config

# user
Host github.com-user
  Hostname github.com
  User git
  IdentityFile ~/.ssh/user_ed25519

# job
Host github.com-job
  Hostname github.com
  User git
  IdentityFile ~/.ssh/job_ed25519
```

`clone - multiples git accounts`

```bash
# user
# github > create repository > copy > SSH git@github.com: ...
mkdir git/user
cd git/user
# git clone git@github.com-user: ... > yes


# job
# github > create repository > copy > SSH git@github.com: ...
mkdir git/job
cd git/job
# git clone git@github.com-job: ... > yes
```
