Park Booking Website:

This is a basic website for booking a park for events, companies and malls. The website allows users to view the availability of the park and book it for a specific date and time.
Features:

• Book the park for a specific date and time
• Choose the type of the park and number of hours needed

Technologies Used:

• HTML
• CSS
• JavaScript
• Node.js
• Express.js
• MongoDB

Getting Started:

To get started with the website, follow these steps:
1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Create a .env file and add the following environment variables:
4. MONGO_URI - URI for the MongoDB database.
5. SESSION_SECRET - A secret key used for session encryption.
6. Start the server using npm start. (or "nodemon server.js")
7. Open your web browser and go to http://localhost:3000.

Usage: 

The website has two main pages:

-Home Page:

    The home page shows the availability events, malls and companies to book a park in any of them. The calendar shows the dates that are available for booking.

-Booking Page:

    The booking page allows users to select a date and time to book the park. Users can choose the one ofthe three types of the parks. Once the user choose the type and the hours for the booking, the price is pops up to the screen.

    If you would like to contribute to the website, please create a pull request with your changes. Before submitting your pull request, make sure that your changes are tested and do not break any existing functionality.

Future enhancements:

    1. make an ID for each park
    2. The cancel booking page allows users to cancel their booking. Users need to enter their email address and booking ID to cancel their booking.


ERD Diagram:

![ERD](/public/images/ERD.JPG)

