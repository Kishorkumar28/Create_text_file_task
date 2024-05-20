Text File API
This project provides two API endpoints for creating and retrieving text files. Each text file contains the current timestamp and is saved with a filename corresponding to the current date and time.

Postman Documentation link:
https://documenter.getpostman.com/view/34796823/2sA3QmEv7z

Prerequisites
Node.js
npm (Node Package Manager)

Installation
Clone the repository:

git clone https://github.com/your-username/text-file-api.git
cd text-file-api
Install the dependencies:

npm install
Usage
Start the server:

node index.js
Use an API client like Postman to interact with the API.

API Endpoints
Create a Text File
URL: /api/files/create
Method: POST
Description: Creates a text file with the current timestamp. The filename is the current date and time.
Response:
201 Created: File created successfully.
500 Internal Server Error: Failed to create file.
Retrieve All Text Files
URL: /api/files/list
Method: GET
Description: Retrieves all text files in the specified folder.
Response:
200 OK: List of text files.
500 Internal Server Error: Failed to retrieve files.