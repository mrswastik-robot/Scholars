# Scholar

![Screenshot from 2023-11-07 00-06-00](https://github.com/mrswastik-robot/Scholars/assets/107865087/3410af2a-8ce6-449d-bec6-2ad3b70bc780)


Project Description: Scholar is a dynamic event registration platform that allows users to discover and register for various events happening in their community or organization. Whether it's college fests, tech conferences, or local meetups, Scholar provides a one-stop solution to keep track of upcoming events and secure your spot.

## Table of Contents

- [Features](#features)
- [Installation](#installation)

- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Event Discovery**: Browse through a diverse range of events with details like event name, date, and event image.
- **Communities**: Join the awesome communities hosted on Scholar where you can meet with different developers can expand your network.
- **User Authentication**: Register and log in to your account seamlessly using Google Authentication.
- **Event Registration**: Easily register for events you're interested in.
- **User Profile**: Maintain a user profile with essential information like name, email, college, and more.
- **Event Details**: Get comprehensive event details, including event image, description, and participant list.
- **Real-time Updates**: Stay informed about newly added events with real-time event updates.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/mrswastik-robot/scholars.git`
2. Navigate to the project directory: `cd scholars`
3. Install the dependencies: `npm install`

## Usage

To start the development server, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.

## Firebase Configuration

This project uses Firebase for the backend. Follow these steps to set up Firebase:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com).
2. Obtain your Firebase project credentials (API key, auth domain, database URL, etc.).
3. Rename the `.env.local.example` file in the project root directory to `.env.local`.
4. Replace the placeholder values in the `.env.local` file with your Firebase project credentials.

Example `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your-database-url
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Contributing

Contributions are welcome! If you find any bugs or want to improve the project, feel free to open an issue or submit a pull request.

1. Fork the project repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

[MIT License](LICENSE)
