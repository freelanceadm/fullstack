#ssh

# generate ssh keys

Ssh keys allow you to connect to remote hosts without using passwords.
```bash
# use ed25519 type to make secure keys
ssh-keygen -t ed25519 -C "freelanceadm@gmail.com"
```

Now you have:
- ~/.ssh/id_ed25519 PRIVATE key 
- ~/.ssh/id_ed25519.pub Public key which you can share with anyone

# copy keys to remote host 

The logic is simple. You create user on remote host. This could be user with different name for example it ll be user2 and his home dir `/home/user2`.
You have to get your public key `cat ~/.ssh/id_ed25519.pub` and put it on remote host to required users home path. For user2 it will be `/home/user2/.ssh/authorized_keys`
```bash
# 
cat ~/.ssh/id_ed25519.pub | ssh user2@remote_host 'cat >> ~/.ssh/authorized_keys'

# or use ssh-copy-id
ssh-copy-id username@remote_host
```