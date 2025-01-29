# library-book-lending-system
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  Library Book Lending System API
</head>
<body>
  <h1>Library Book Lending System API</h1>

  <p>This is a RESTful API built using <strong>Express</strong> for managing the borrowing, returning, and extending due dates of books. The API includes features such as logging, validation, and security headers.</p>

  <h2>Libraries Used</h2>
  <ul>
    <li><strong>uuid</strong>: For generating unique request IDs for tracing requests in logs and response headers.</li>
    <li><strong>winston</strong>: Used for structured logging, maintaining logs in JSON format, and handling different log levels (info, error, etc.).</li>
    <li><strong>cors</strong>: For enabling Cross-Origin Resource Sharing (CORS) to allow resources to be requested from other domains.</li>
    <li><strong>helmet</strong>: For securing HTTP headers to protect the app from well-known web vulnerabilities.</li>
    <li><strong>joi</strong>: For validating and sanitizing incoming JSON request data to ensure the correct format.</li>
  </ul>

  <h2>Framework</h2>
  <p><strong>Express</strong>: A minimal and flexible Node.js web application framework used to build the API.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Request Tracing</strong>: All incoming requests are assigned a unique <strong>request ID</strong> using the <code>uuid</code> package, which is then logged and added to the response headers for tracking purposes.</li>
    <li><strong>Logging</strong>: Structured logging is implemented with <strong>Winston</strong>, which logs in <strong>JSON format</strong> and supports different log levels such as <code>info</code>, <code>error</code>, etc. The logs are useful for debugging, monitoring, and maintaining the application.</li>
    <li><strong>CORS and Security</strong>: <strong>CORS</strong> is enabled to allow cross-origin requests from specific domains. <strong>Helmet</strong> is used to add various HTTP headers to help secure the application from common attacks (e.g., XSS, clickjacking).</li>
    <li><strong>JSON Validation</strong>: The API uses <strong>Joi</strong> to validate incoming request data (such as user data, book titles, etc.) to ensure they conform to the expected schema. This helps prevent errors due to invalid inputs.</li>
  </ul>
<h2>Installation</h2>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/ManjuRamu/library-book-lending-system.git</code></pre>
  <li>Navigate into the project directory:</li>
  <pre><code>cd library-book-lending-system</code></pre>
  <li>Install dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Load .env file (optional)</li>
  <pre><p><a href="https://github.com/ManjuRamu/library-book-lending-system/tree/main/src/config/env.js" target="_blank">required env</a></p>
</pre>
  <li>Start the server:</li>
    <pre><code>npm start</code></pre>
    <li>Start the server in nodemon:</li>
    <pre><code>npm run dev</code></pre>
</ol>
<h2>Testing with Jest</h2>
<p>To run unit tests for the project, Follow the steps below:</p>
<ol>
  <pre><code>npm run test</code></pre>
  <li>This will run all the unit tests in the project, and you can see the results in the console.</li>
</ol>

<h2>Postman Collection</h2>
<p>To test the API, you can import the Postman collection from the following directory:</p>
<p><a href="https://github.com/ManjuRamu/library-book-lending-system/tree/main/postmon-collection" target="_blank">Postman Collection Directory</a></p>
<h2>Books List</h2>
<p>To test the API, use these avaiable books:</p>
<p><a href="https://github.com/ManjuRamu/library-book-lending-system/tree/main/src/database/index.js" target="_blank">Available Books</a></p>

  <h2>Usage</h2>

    <li>The server will start on the port specified in the environment variables (<code>PORT</code>) or default to <code>3000</code>.</li>
    <li>The API will be available at:</li>
    <pre><code>http://localhost:3000/api/v1</code></pre>
    <li>Example endpoints:</li>
    <ul>
      <li>POST /user/book/borrow: Borrow a book.</li>
      <li>GET /user/book/borrow/{email}?pageNo=1&pageCount=3&direction=asc: View borrowed books by a user, added pagintion and order</li>
      <li>DELETE /user/book/return/{email}/{title}: Return a borrowed book.</li>
      <li>PATCH /user/book/extend-due-date: Extend the due date for a borrowed book.</li>
      <li>GET /book/borrow?pageNo=1&pageCount=3&direction=asc : Extend the due date for a borrowed book.</li>
    </ul>



  <h2>Example Logs</h2>
  <p>The logs are outputted in a structured JSON format:</p>
  <pre><code>
{
  "level": "info",
  "message": "request",
  "requestId": "12345-abcde-67890",
  "timestamp": "2025-01-28T12:30:45.123Z",
  "method": "GET",
  "url": "/api/v1/book/borrow",
  "status": 200,
  "body": {}
}
  </code></pre>

</body>
</html>
