# Git - Account

`ssh`

```bash
git config --global user.name "name"
git config --global user.email "@email"
ssh-keygen -t ed25519 -C "your_email@example.com"
# enter ... enter
```

`configure github`
```bash
cd .ssh/ > acess id_ed25519.pub
more id_ed25519.pub
# copy > github > settings > SSH and GPG keys > new SSH > paste > add
```

`configure pc`

```bash
# github > create repository > copy > SSH git@github.com: ...
mkdir git
cd git
# git clone git@github.com: ... > yes
```

