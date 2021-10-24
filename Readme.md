***
# Django ReactJS online shopping

***
# About
This project aim to learn how to build Full stack Application. using `Django as backend` and `ReactJS as a frontend`. i have used different types of `API viewsets`

# Tags

`Full stack Application` `serializers` `ORM` `rest framework` `permissions` `authentication` `authorization`

`ReactJS` `Bootstraps` `CRUD Operations` `Frontend` `Props` `Hooks` `States` `API`

***
# Screenshots

![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/1.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/11.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/2.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/3.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/4.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/5.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/6.png)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/7.PNG)
![alt text](https://github.com/ashgole/Django-ReactJS-Project-Online-Shopping/blob/main/screenshots/8.png)



***
# Help

## Client side
```
npm install --save react-router-dom jquery cors nodemon express socket.io axios
|
or
|
npm i
npm run

```

***
## Server side
```
project > settings.py >

INSTALLED_APPS = [
    .
    .
    .
    # imp
    'rest_framework',
    'corsheaders', #cors
    'rest_framework.authtoken',

    #apps
    'products',
    'account',
    'orders'
]
```

```
python -m virtualenv myenv
myenv\scripts\activate.bat
cd backend
pip install -r requirements.txt


python manage.py createsuperuser
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

http://127.0.0.1:8000/admin/
http://127.0.0.1:8000/
```
***
