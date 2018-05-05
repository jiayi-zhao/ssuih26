# Routes Accesses and Users Abilities

The following table describes the routes the users of each type can access and the abilities they have

Request                    | Guest | Parent | Instructor | Admin 
---------------------------| -- | -- | -- | -- 
`GET /users`               | no | no | no | yes 
`GET /users/:id`           | no | yes, itself | yes, itself | yes 
`POST /users`	         | no | no | no | yes 
`PUT /users/:id`	         | no | yes, itself | yes, itself | yes 
`DELETE /users/:id`        | no | no | no	| yes 
 | | | | | 
`GET /camps`	         | yes<br>only upcoming camps | yes<br>only active camps | yes<br>only active camps | yes
`GET /camps/:id`	         | yes<br>only upcoming camps | yes<br>only active camps | yes<br>only active camps | yes
`POST /camps`	         | no | no | no | yes
`PUT /camps/:id`	         | no | no | no | yes
`DELETE /camps/:id`	| no | no | no | yes
 | | | | | 
`GET /curriculums`         | yes<br>only active curriculums | yes<br>only active curriculums | yes<br>only active curriculums | yes
`GET /curriculums/:id`	| yes<br>only active curriculums | yes<br>only active curriculums | yes<br>only active curriculums | yes
`POST /curriculums`	| no | no | no | yes
`PUT /curriculums/:id`	| no | no | no | yes
`DELETE /curriculums/:id`	| no | no | no | yes
 | | | | | 
`GET /locations`           | yes<br>only active locations | yes<br>only active locations | yes<br>only active locations | yes
`GET /locations/:id`       | yes<br>only active locations | yes<br>only active locations | yes<br>only active locations | yes
`POST /locations`          | no | no | no | yes
`PUT /locations/:id`       | no | no | no | yes
`DELETE /locations/:id`    | no | no | no | yes
 | | | | | 
`GET /instructors`         | yes<br>only active instructors | yes<br>only active instructors | yes<br>only active instructors | yes
`GET /instructors/:id`     | yes<br>only active instructors | yes<br>only active instructors | yes<br>only active instructors | yes
`POST /instructors`        | no | no | no | yes
`PUT /instructors/:id`     | no | no | yes, itself | yes
`DELETE /instructors/:id`  | no | no | no | yes
 | | | | | 
`GET /registrations`       | no | yes<br>only those belong to itself | no | yes
`GET /registrations/:id`   | no | yes<br>only those belong to itself | no | yes
`POST /registrations`      | no | yes | no | yes
`PUT /registrations/:id`   | no | yes<br>when payment is not made | no | yes
`DELETE /registrations/:id`| no | yes<br>when payment is not made | no | yes
 | | | | | 
`GET /students`            | no | yes | yes<br>only those who are its students | yes
`GET /students/:id`        | no | yes<br>only those belong to itself | yes<br>only those who are its students | yes
`POST /students`           | no | yes<br>only those belong to itself | no | yes
`PUT /students/:id`        | no | yes<br>only those belong to itself | no | yes
`DELETE /students/:id`     | no | no | no | yes
 | | | | | 
`GET /families`            | no | no | yes<br>only those who are its students | yes
`GET /families/:id`        | no | yes, itself | yes<br>only those who are its students | yes
`POST /families`           | no | no | no | yes
`PUT /families/:id`        | no | no | no | yes
`DELETE /families/:id`     | no | no | no | yes

# Detailed Functionality and Testing

## Parent

Parents are able to do the following actions

### GET /users/:id

Parents can read his or her own user information, and a sample output can be
```
{
"id":9,
"username":"Ward643",
"role":"parent",
"email":"ward643@example.com",
"phone":"9784675905",
"active":true,
"family":{
         "id":1,
         "family_name":"Ward",
         "parent_first_name":"Rosella",
         "user_id":9,
         "active":true},
"students":[
           {
           "id":27,
           "proper_name":"Angeline Ward",
           "family_id":1,
           "date_of_birth":"2007-05-01",
           "rating":326,
           "active":true
           }],
"past_camps":[],
"upcoming_camps":[
                 {
                 "id":8,
                 "curriculum":{
                              "id":1,
                              "name":"Principles of Chess",
                              "description":"This camp is designed for beginning students who know need to learn 
                                             opening principles, pattern recognition and basic tactics and mates.  
                                             Students will be given a set of mate-in-one flashcards and are expected 
                                             to work on these at home during the week.",
                              "min_rating":0,
                              "max_rating":500,
                              "active":true
                              },
                  "location":{
                             "id":1,
                             "name":"North Side",
                             "street_1":"801 Union Place",
                             "street_2":null,
                             "city":"Pittsburgh",
                             "state":"PA",
                             "zip":"15212",
                             "max_capacity":16,
                             "active":true
                             },
                   "instructors":[
                                 {
                                 "id":8,
                                 "name":"Reyes-Franco, Sarah",
                                 "bio":"Great TA for 67-272; hopefully can teach chess too.",
                                 "email":"sarah@razingrooks.org",
                                 "phone":"4122683259",
                                 "active":true
                                 }],
                   "cost":150.0,
                   "start_date":"2018-06-18",
                   "end_date":"2018-06-22",
                   "time_slot":"pm",
                   "max_students":8,
                   "is_open":false,
                   "open_spots":0,
                   "active":true,
                   "registered_students_list":[
                                              {"proper_name":"Shakira Koepp"},
                                              {"proper_name":"Ericka Mayer"},
                                              {"proper_name":"Jaycee Walter"},
                                              {"proper_name":"Asia McDermott"},
                                              {"proper_name":"Angeline Ward"},
                                              {"proper_name":"Niko Bailey"},
                                              {"proper_name":"Adell Weissnat"},
                                              {"proper_name":"Neva Walter"}],
                    "own_registered_students_list":[
                                                   {
                                                   "proper_name":"Angeline Ward",
                                                   "date_of_birth":"2007-05-01",
                                                   "rating":326,
                                                   "active":true,
                                                   "paid":true}
                                                   ]}
}
```
The output can be generated by sending the following requests by curl
```
curl -H "Authorization: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.aA3dJ7sMtirNFjK9rucW09MDq6U8Mkmsl6FNDY4DzRI" http://localhost:3001
```
Note the authorization is a JSON hased code generated within the server where the browerse 
get such information and send the request with the header's authorization token every time.
The above token is generated by
```
JWT.encode({user_id: 9, 'jiayi')
```
With the same token specified, it is impossible to do the following requests
```
GET /users/
GET /users/8
```
