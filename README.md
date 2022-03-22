# Holberton Talent Marketplace API

This is the RESTAPI our team developed in JavaScript for our capstone project

## Install

    git clone https://github.com/Holberton-Talent-Marketplace/backend.git

## Run the app

    node app.js

## Dependencies
- cors
- express
- express-openapi-validator
- pg
- pg-hstore
- sequelize
- uuid-validate


# REST API

Here's a list of our different endpoints with an example of their responses.

## Get list of Holbies

### Request

`GET http://localhost:5000/holbies`

### Response body

    {
        "id": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
        "gender": "Female",
        "name": "Natalia Arteaga Corrales",
        "about_me": "I was born and raised in Medellin, Colombia.\nI consider myself as a passionate, reliable and inventive woman. Besides I love to learn new things and constantly improve my skill set as developer.\nI am currently finishing the Foundations Program at Holberton School. I am able to program in lenguages as C and Python; additionally, I have knowledge in some Python's frameworks as for instance Flask, and databases creation with MySQL; however, my real love is the Front-End Development. Nowadays, I set my eye on improving my knowledge about Javascript, HTML, CSS and his framework Bootstrap.",
        "location": "Medellín, Colombia",
        "strengths": "I am a sociable responsable and puntual person. I like to study and improve my knowledge with my job.",
        "skills": "Managing web servers, parsing, HTML/CSS, Accessibility",
        "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
        "previous_education": "I am a Professional Musician from University of Antioquia and I have a Pedagogy Diploma from University of San Buenaventura.",
        "technologies": "Javascript, Python, MySQL, C",
        "industries": "Arts",
        "linkedin": "https://www.linkedin.com/in/natalia-arteaga-corrales-a592351a7/",
        "github": "https://github.com/natyarteagac",
        "capstoneProjectId": null,
        "createdAt": "2021-11-01T22:00:23.934Z",
        "updatedAt": "2021-11-01T22:00:23.934Z",
        "experiences": [
            {
                "id": "899c1280-0739-4f8e-a989-f097136f5ffc",
                "name": "Teacher",
                "description": "I was in charge of the music lessons since 3rd grade until 11th grade and I had the responsability of all the music performances of the students.",
                "companyName": "Colegio Campestre El Maestro",
                "holbieId": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
                "createdAt": "2021-11-01T22:10:36.626Z",
                "updatedAt": "2021-11-01T22:10:36.626Z"
            }
        ],
        "projects": [
            {
                "id": "582b1e06-8ab0-48df-a943-a6453fad2e15",
                "name": "ACASE",
                "technologiesUsed": "Python",
                "description": "This a bot with some URL sent by the company. The utility is to make an automatic search and the person in charge of this job have all the information sent from the bot in a view with the option of make notes, save it or delete the information if it's required.",
                "linkToProject": "https://github.com/klich404/ACASE",
                "holbieId": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
                "createdAt": "2021-11-01T22:05:27.485Z",
                "updatedAt": "2021-11-01T22:05:27.485Z"
            }
        ],
        "capstoneProjects": null
    },
    {
        "id": "a507ff45-63c9-428e-ad84-570bb391df5d",
        "gender": "Male",
        "name": "Mateo Londoño Urrea",
        "about_me": "Electromechanical engineer with two years of experience and currently software developer at Holberton School",
        "location": "Medellín, Colombia",
        "strengths": "Perseverance, commitment, collaboration, responsibility, a sense of belonging, trust and clear goals .",
        "skills": "Data structures with C programming and python, OOP with python and javascript, web scrapping, automation, rest API design, requests methods with python and javascript, servers (web servers, proxy servers, app servers, firewalls), Django framework, Jquery, css and html",
        "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
        "previous_education": "Electromechanical technology, electromechanical engineering, diploma in industrial maintenance management, Solidedge course, Automate the Boring Stuff with Python Programming course and Python Django Engineer (REST APIs, PostgreSQL,GitHub,Heroku)",
        "technologies": "Python, JavaScript, C programming, Docker, MySQL, Postgresql, Flask, Git, regular expressions,  SSH, Bash scripting, databases",
        "industries": "Industrial maintenance, automotive industry and design",
        "linkedin": "https://www.linkedin.com/in/mateo-londoño-urrea/",
        "github": "https://github.com/Matteo-lu",
        "capstoneProjectId": null,
        "createdAt": "2021-11-01T22:57:09.236Z",
        "updatedAt": "2021-11-01T22:57:09.236Z",
        "experiences": [
            {
                "id": "c3562353-dd47-4fa3-9a89-cfe7941f2ee1",
                "name": "Mechanical engineering assistant",
                "description": "Design of mechanical and structural drawings in Autocad sowtfare, identification of spare parts in parts manuals, search for suppliers of spare parts and services, quotation and purchase of materials, supplies and spare parts, coordination activities, follow-up to oil sample analysis reports carried out by the laboratory, administrative reports, supply of indicators by entering repair and inspection reports in maintenance software, and design of preventive maintenance plan.",
                "companyName": "Ingeniería y contratos S.A.S",
                "holbieId": "a507ff45-63c9-428e-ad84-570bb391df5d",
                "createdAt": "2021-11-01T23:10:21.547Z",
                "updatedAt": "2021-11-01T23:10:21.547Z"
            }
        ],
        "projects": [
            {
                "id": "71327836-7cad-4839-a487-cb37bb2ae6a9",
                "name": "Rescot",
                "technologiesUsed": "Python",
                "description": "Web application that reduces the self-employees interaction with their clients through a quote form with parameters predefined by the worker. The response to the quote contains the calculations with the cost and time of the service. Additionally, it has a scheduling interface for the client to separate an appointment according to the availability of the service provider.",
                "linkToProject": "https://github.com/katgzco/rescot_project",
                "holbieId": "a507ff45-63c9-428e-ad84-570bb391df5d",
                "createdAt": "2021-11-01T23:03:26.258Z",
                "updatedAt": "2021-11-01T23:03:26.258Z"
            }
        ],
        "capstoneProjects": null
    },
    {
        "id": "3840c398-3ded-4c52-b4aa-23b01dae9742",
        "gender": "Male",
        "name": "Esneider Granada ",
        "about_me": "I'm a curious person for coding, I like to learn all the time about difference topics like music, photography, coding, audio and video production.",
        "location": "Colombia, Puerto Nare",
        "strengths": "Adaptability and keeping learning.",
        "skills": "Low level programming, algorithm mindset, data structures algorithms, backend development, development and operations (DevOps), technical writing.",
        "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
        "previous_education": "Sound engineering, bachelor in music education, several frontend courses.",
        "technologies": "Python, Vanilla Javascript, Golang, Selenium, Nginx.",
        "industries": "Audiovisual production, delivery.",
        "linkedin": "https://www.linkedin.com/in/esneider-granada",
        "github": "https://github.com/sneidergv\n",
        "capstoneProjectId": null,
        "createdAt": "2021-11-01T23:17:15.212Z",
        "updatedAt": "2021-11-01T23:17:15.212Z",
        "experiences": [
            {
                "id": "7cd5749b-4461-405b-a5fd-3361b74e4c1f",
                "name": "Audiovisual producer",
                "description": "I was in charge of the content production to stream on digital platforms like YouTube and Facebook, making the content means to address the photography production, lightning production, audio and video production.",
                "companyName": "Prende",
                "holbieId": "3840c398-3ded-4c52-b4aa-23b01dae9742",
                "createdAt": "2021-11-01T23:18:50.697Z",
                "updatedAt": "2021-11-01T23:18:50.697Z"
            }
        ],
        "projects": [
            {
                "id": "84fbe07b-a342-4a44-9ad6-219b996b7e03",
                "name": "Acase",
                "technologiesUsed": "Python, Javascript, Go.",
                "description": "Acase is an automated crawler and scraper engine that takes information from web in a smart manner and delivering to the user on a UI interface.",
                "linkToProject": "http://esneidergrvc.tech/acase",
                "holbieId": "3840c398-3ded-4c52-b4aa-23b01dae9742",
                "createdAt": "2021-11-01T23:22:31.466Z",
                "updatedAt": "2021-11-01T23:25:41.860Z"
            }
        ],
        "capstoneProjects": null
    },
    {
        "id": "318dad56-6c4a-4808-b1e8-7efb1f35fc80",
        "gender": "Male",
        "name": "Juan Camilo Cadavid Velásquez",
        "about_me": "I'm currently a student at Holberton School, I enjoy materializing my ideas through software, I've worked with programming languages such as C, Python and a little bit of JavaScript, at this moment I'm pretty close to finishing the foundations program at Holberton School, and I'm planning on specializing in Machine Learning.",
        "location": "Medellín, Colombia",
        "strengths": "I feel very competent in higher-level programming, I love using Python as my main programming language, and I'm always excited when it comes to building chatbots.",
        "skills": "English, Communication, Empathy, Mindfulness, higher-level programming, active listening",
        "most_amazing_thing": null,
        "previous_education": null,
        "technologies": "Python, Node.js, C, MySQL, Express, React",
        "industries": "Retail",
        "linkedin": "https://www.linkedin.com/in/juan-camilo-cadavid-velásquez-682b94205/",
        "github": "https://github.com/Juansu01",
        "capstoneProjectId": null,
        "createdAt": "2021-11-04T14:57:08.022Z",
        "updatedAt": "2021-11-04T14:57:08.022Z",
        "experiences": [],
        "projects": [],
        "capstoneProjects": null
    },
    {
        "id": "59d27d6f-109c-4958-8f8a-e3207bbeb583",
        "gender": "Female",
        "name": "Maria Fernanda Lopez",
        "about_me": "I am 35 years old, I like to learn every day and challenge myself to achieve everything I want with discipline and dedication; I have a daughter who was my biggest motivation to start studying software development.",
        "location": "Medellin, Colombia",
        "strengths": "Willpower, self-study, discipline.",
        "skills": "Teamwork and a lot of self-study.",
        "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
        "previous_education": "Technology in Administrative Management.",
        "technologies": "Javascript, SQL, Python.",
        "industries": "Sales, Customer service advisor, Administrative analyst",
        "linkedin": "https://www.linkedin.com/in/maria-fernanda-lópez-álvarez-9a5462a2/",
        "github": "https://github.com/ferchislopez0910",
        "capstoneProjectId": null,
        "createdAt": "2021-11-02T00:09:36.039Z",
        "updatedAt": "2021-11-02T00:09:36.039Z",
        "experiences": [],
        "projects": [],
        "capstoneProjects": null
    }


## Create a new Holbie

### Request
Make sure to send your request using the Content-Type: form-data
`POST http://localhost:5000/holbies`

### Response

    {
    "id": "fe938f3d-cc19-4f76-af6e-93e38155a0cb",
    "gender": "Male",
    "name": "Juan Camilo Cadavid",
    "about_me": "Student at Holberton School",
    "location": "Medellín, Colombia",
    "most_amazing_thing": "I reached English fluency at a very early age, becoming the first bilingual person in my family.",
    "technologies": "Python, C, JavaScript, Node.js, MySQL, PostgreSQL",
    "industries": null,
    "linkedin": "https://www.linkedin.com/in/juan-camilo-cadavid-velásquez-682b94205/",
    "github": "https://github.com/Juansu01",
    "capstoneProjectId": null,
    "strengths": null,
    "skills": null,
    "previous_education": "No preivous education",
    "updatedAt": "2022-03-22T19:36:33.061Z",
    "createdAt": "2022-03-22T19:36:33.061Z"
}

## Get a specific Holbie

### Request

`GET http://localhost:5000/holbies/id`

### Response

    {
    "id": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
    "gender": "Female",
    "name": "Natalia Arteaga Corrales",
    "about_me": "I was born and raised in Medellin, Colombia.\nI consider myself as a passionate, reliable and inventive woman. Besides I love to learn new things and constantly improve my skill set as developer.\nI am currently finishing the Foundations Program at Holberton School. I am able to program in lenguages as C and Python; additionally, I have knowledge in some Python's frameworks as for instance Flask, and databases creation with MySQL; however, my real love is the Front-End Development. Nowadays, I set my eye on improving my knowledge about Javascript, HTML, CSS and his framework Bootstrap.",
    "location": "Medellín, Colombia",
    "strengths": "I am a sociable responsable and puntual person. I like to study and improve my knowledge with my job.",
    "skills": "Managing web servers, parsing, HTML/CSS, Accessibility",
    "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
    "previous_education": "I am a Professional Musician from University of Antioquia and I have a Pedagogy Diploma from University of San Buenaventura.",
    "technologies": "Javascript, Python, MySQL, C",
    "industries": "Arts",
    "linkedin": "https://www.linkedin.com/in/natalia-arteaga-corrales-a592351a7/",
    "github": "https://github.com/natyarteagac",
    "capstoneProjectId": null,
    "createdAt": "2021-11-01T22:00:23.934Z",
    "updatedAt": "2021-11-01T22:00:23.934Z",
    "experiences": [
        {
            "id": "899c1280-0739-4f8e-a989-f097136f5ffc",
            "name": "Teacher",
            "description": "I was in charge of the music lessons since 3rd grade until 11th grade and I had the responsability of all the music performances of the students.",
            "companyName": "Colegio Campestre El Maestro",
            "holbieId": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
            "createdAt": "2021-11-01T22:10:36.626Z",
            "updatedAt": "2021-11-01T22:10:36.626Z"
        }
    ],
    "projects": [
        {
            "id": "582b1e06-8ab0-48df-a943-a6453fad2e15",
            "name": "ACASE",
            "technologiesUsed": "Python",
            "description": "This a bot with some URL sent by the company. The utility is to make an automatic search and the person in charge of this job have all the information sent from the bot in a view with the option of make notes, save it or delete the information if it's required.",
            "linkToProject": "https://github.com/klich404/ACASE",
            "holbieId": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
            "createdAt": "2021-11-01T22:05:27.485Z",
            "updatedAt": "2021-11-01T22:05:27.485Z"
        }
    ],
    "capstoneProjects": null
    }


## Update Holbie

Make sure to send your request using the Content-Type: form-data. And fill in only the attributes that you want to update.

### Request

`PUT http://localhost:5000/holbies/id`

### Response

    {
    "id": "ed759df3-ccef-4ea5-bb1b-05ef196b7b24",
    "gender": "Female",
    "name": "Natalia Arteaga Corrales",
    "about_me": "I was born and raised in Medellin, Colombia.\nI consider myself as a passionate, reliable and inventive woman. Besides I love to learn new things and constantly improve my skill set as developer.\nI am currently finishing the Foundations Program at Holberton School. I am able to program in lenguages as C and Python; additionally, I have knowledge in some Python's frameworks as for instance Flask, and databases creation with MySQL; however, my real love is the Front-End Development. Nowadays, I set my eye on improving my knowledge about Javascript, HTML, CSS and his framework Bootstrap.",
    "location": "Medellín, Colombia",
    "strengths": "I am a sociable responsable and puntual person. I like to study and improve my knowledge with my job.",
    "skills": "Managing web servers, parsing, HTML/CSS, Accessibility",
    "most_amazing_thing": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget diam purus. Nulla venenatis sodales accumsan",
    "previous_education": "I am a Professional Musician from University of Antioquia and I have a Pedagogy Diploma from University of San Buenaventura.",
    "technologies": "Python, C, JavaScript, Node.js, MySQL",
    "industries": "Arts",
    "linkedin": "https://www.linkedin.com/in/natalia-arteaga-corrales-a592351a7/",
    "github": "https://github.com/natyarteagac",
    "capstoneProjectId": null,
    "createdAt": "2021-11-01T22:00:23.934Z",
    "updatedAt": "2022-03-22T19:55:28.479Z"
    }

### Request

`DELETE http://localhost:5000/thing/id`

### Response

    {
    "message": "Holbie destroyed"
    }

## Other endpoints

We have three more endpoints, these behave the same way the holbies endpoint behaves. Our API handles errors if your request is incorrect, and it will tell you if you need to add more attributes to the JSON in your request's body.

### Companies Endpoint

`http://localhost:5000/companies`

This endpoint handles the companies inside our application.

### Experiences Endpoint

`http://localhost:5000/experiences`

This endpoint handles the previous professional experience that holbies might have.

### Projects Endpoint

`http://localhost:5000/projects`

This endpoint handles the projects holbies can upload to our application, in order to showcase their abilities.

### Capstone Projects Endpoint

`http://localhost:5000/capstone_projects`

This endpoint handles the capstone projects for holbies, which are final projects that Holberton School graduates build when they finish the Software Foundations Program.
