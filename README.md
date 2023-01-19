# Node.js API Server

Welcome to our Node.js API Server, a backend application built using Node.js and MongoDB. This API server provides the necessary endpoints for our e-commerce clothes store application to function properly.

## Getting Started

To run this application, you will need to have Node.js and MongoDB installed on your computer. You will also need to have a basic understanding of Node.js and MongoDB.

### Installing

1. Clone the repository to your local machine:
```
git clone https://github.com/Thiomark/shine-ecommerce-store-api.git
```

2. Install the necessary dependencies:
```
npm install
```

3. Create a new MongoDB database and update the database configuration in the `.env` file. You can find the MongoDB URI by following the instructions in the MongoDB documentation (https://docs.mongodb.com/manual/reference/connection-string/)

4. Run the following command to start the application:
```
npm start
```


The API server will now be running on `http://localhost:5000`.

## Endpoints

The API server provides the following endpoints:

- **User Authentication**: `/auth/register` and `/auth/login` for registering and logging in users.
Product Browsing: /products for retrieving a list of clothing items and /products/:id for retrieving a specific clothing item.

- **Product Search**: /products/search for searching for specific clothing items by keyword.

- **Shopping Cart**: /cart for retrieving the current user's shopping cart and /cart/:id for adding or removing items from the cart.

- **Checkout**: /checkout for proceeding to checkout and completing a purchase.

- **Admin Panel**: /admin for accessing the administrator's panel and performing CRUD operations on clothing items, as well as viewing orders and customer information.

- **Reviews and Ratings**: /reviews for retrieving reviews and ratings for a specific clothing item and /reviews/:id for adding a review or rating for a specific clothing item.

- **Customer service**: /customer-service for contacting customer service through the application for any issues or questions.

## Security

The API server is built with security in mind and uses encryption and authentication to protect user data. It also uses JWT tokens to authenticate requests and make sure that only authorized users can access the protected endpoints.

Please also note that this API server is only intended to be used in conjunction with the front-end of the e-commerce clothes store application, and it may not function properly if used independently.

The frontend of the e-commerce clothes store application can be found at https://github.com/Thiomark/shine-ecommerce-store.

Thank you for choosing our e-commerce clothes store application for your needs.

## Preview

You can preview the website at https://twilight-ecom.netlify.app

![thumbnail](https://res.cloudinary.com/thiomark/image/upload/v1673517334/portfolio/Twillight.png)

## Conclusion
We hope you enjoy using our e-commerce clothes store application and that it meets your needs. If you have any questions or suggestions, please feel free to contact us.

Thank you for choosing our application!

