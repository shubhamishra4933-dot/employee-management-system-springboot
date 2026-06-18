# Employee Management System

A Spring Boot based Employee Management System providing REST APIs for managing employee records.

## 🚀 Features

- Create Employee
- Get All Employees
- Get Employee By ID
- Update Employee
- Delete Employee
- RESTful API Design
- Spring Data JPA
- Hibernate ORM
- PostgreSQL Database
- Exception Handling
- Layered Architecture


## 🛠 Tech Stack

| Technology | Used |
|---|---|
| Java | 17 |
| Spring Boot | 3.x |
| Spring Data JPA | Yes |
| Hibernate | Yes |
| PostgreSQL | Yes |
| Maven | Yes |
| REST API | Yes |


## 📂 Project Structure


controller
service
repository
entity
dto
exception


## ⚙️ Setup & Installation


### Clone Repository

git clone https://github.com/yourusername/employee-management-system.git


### Configure Database

Update:

src/main/resources/application.yml


Example:


spring:
 datasource:
  url: jdbc:postgresql://localhost:5432/employee_db
  username: postgres
  password: password


### Run Application


mvn spring-boot:run



Application runs on:

http://localhost:8080



## 🔗 API Endpoints


### Create Employee

POST

/api/employees


### Get All Employees

GET

/api/employees


### Get Employee By ID

GET

/api/employees/{id}



### Update Employee

PUT

/api/employees/{id}



### Delete Employee

DELETE

/api/employees/{id}



## 📸 Screenshots

Add screenshots inside screenshots folder.


## 🧪 Postman Collection

Import collection from:

postman-collection folder



## 👨‍💻 Author

Shubham Mishra

Java Backend Developer
