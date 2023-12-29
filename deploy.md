# Deploy for frontend

## 1. Rent a server

## 2. Connect to the rented remote server via ssh by your server user name ("root" as most popular)

```bush
ssh root@255.255.255.255
```

Then type "yes" and your remote server user password

## 3. Install dev instruments for your remote server

In the terminal via ssh install git, nvm, node at your remote server.

## 4. Install Nginx file at the remote server to handle static files

```bash
sudo apt install vim
sudo apt install nginx
```

## 5. Fix nginx settings

```bash
cd ~
cd etc/nginx
cd sites-enabled
vim default
```

Remove comments. Take a look:

```bash
server {
  listen 80 default_server
  listen [::]:80 default_server

  root /var/www/html
  index index.html  index.htm index.nginx-debian.html

  server_name _;

  location / {
    try_files $uri $uri/ =404
  }
}
```

Then replace it with:

```bash
server {
  listen 80 default_server
  listen [::]:80 default_server

  root /var/www/build
  index index.html  index.htm index.nginx-debian.html

  server_name _;

  location / {
    try_files $uri $uri/ =404
  }
}
```

Remove html folder and go to project again at the remote server

```bash
cd ~
cd /var/www/
ls
sudo rm -rf html
cd ~
cd <your-project>
npm run build
```

## 6. Restart Nginx

```bash
sudo service nginx restart
```
