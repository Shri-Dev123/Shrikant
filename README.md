# Random Image Display and Share with React

This is a simple React application that displays a random image in the center of the page each time the page is refreshed. It also provides a share button that allows users to share the current image on Facebook, Twitter, and WhatsApp. The image displayed on the page is visible as a preview when the URL is shared on these platforms.

## Features

- Displays a random image in the center of the page on each refresh
- Share button to share the current image on Facebook, Twitter, and WhatsApp
- Image preview when sharing the URL on Facebook and Twitter
- Responsive design for seamless usage on different devices and screen sizes

## Installation

1. Clone the repository to your local machine:

git clone <repository-url>

2. Navigate to the project directory:

cd random-image-display-and-share

3. Install the dependencies:

npm install


## Usage

1. Start the development server:

npm start


2. Open your browser and visit `http://localhost:3000` to see the app in action.

3. Each time you refresh the page, a new random image will be displayed in the center.

4. Click on the Share button to see the sharing options for Facebook, Twitter, and WhatsApp.

## Customization

- Fetching Random Images: By default, a placeholder image URL is used for demonstration purposes. You can update the `fetchRandomImage` function in the `App` component to fetch random images from your preferred API or library.

- Styling: The app uses Tailwind CSS for styling. You can customize the styles by modifying the CSS classes in the components or by updating the `tailwind.config.js` file.

## Technologies Used

- React: JavaScript library for building user interfaces.
- react-share: Library for social media sharing buttons.
- tailwindcss: Utility-first CSS framework for styling.
- react-whatsapp-share-button: Library for WhatsApp sharing button.

## License

This project is licensed under the [MIT License](LICENSE).


