# Product List App

This is a list of dummy products that can be used for testing purposes. Each product has a unique identifier and a corresponding product page that displays information about the product. The list of products can be filtered by a search field and a product's dimensions can be filtered with a given range.

The dropdown list options are not wood terms, rather they are values gotten from a [Lorem Ipsum Text Here](https:https://loremipsum.io/)

## All Products Page

The all product page displays the list of products by concatenating the options picked when creating a product (usage, drying, treatment etc.)

## Add Product

A product can be added to the database by clicking on add product and filling the form. When the form validation passes, the product can be add.

When a product in the product list is clicked on, users are directed to a product details page.

## Products Details Page

The product details page will display the following information:

- Product Drying Method
- Product Usage
- Product Grade
- Product Treatment (if any)
- Product Creation Date
- Product Dimensions (can be filtered by a given range)

A dimension card can be deleted from the dimensions section. But this action is impossible if there is only one dimension card present

A product can be deleted using the delete product button at the bottom of the page

## Project Structures

- Project logic is kept in src folder
- Components are places in the components folder
- Page related components are kept in the page-components folder
- reusable components are kept in the others folder

### Style convention used

- Styled components was the styling convention used for this project and the styled component files have a 'S\_' prepended in their names
- CSS code arrangement was done alphabetically following the practice of this [article](https://ericwbailey.website/published/organize-your-css-declarations-alphabetically/) and a host of others.

### TS-types folder

- Ts-file entails the type declarations for the components, data and styled components

### Utils folder

- Utils folder contains the context api instatiation and the index entails extracted functionalities and logic to avoid verbose components

[Link](https://timberub-task.vercel.app) to project.
[Link](https://hub.docker.com/repository/docker/ibraheemsulay/timberhub) to pull docker image.
