# Project Blog Gorest API

## Description

Project Synapsis Blog is a modern web application built with Next.js and TypeScript, leveraging data from the [GoRest API](https://gorest.co.in/). This blog platform aims to provide a seamless experience for readers by dynamically generating articles sourced from the API's extensive database. Each article is presented with detailed information and allows users to interact through comments. The blog implements responsive design principles, ensuring a consistent and user-friendly experience across devices.

The integration with GoRest API allows for real-time updates and ensures that the content remains current and relevant. The application includes robust features such as search functionality, pagination for browsing through post. you can perform CRUD operations on users.
Project Blog Gorest API is designed to be easily extensible and maintainable, thanks to its use of TypeScript for type safety and enhanced development workflows. Styling is handled efficiently with Tailwind CSS, enabling rapid prototyping and a cohesive visual identity. Deployment is streamlined with Vercel, ensuring global accessibility and scalability.

## Performance

![performance](https://github.com/MicRoCats7/blog-gorest/blob/main/public/assets/performance.png)

## Features

- **Home Page**: The main page displays a list of articles with titles and summaries.
![homepage](https://github.com/MicRoCats7/blog-gorest/blob/main/public/assets/homepage.png)
- **Blog List**: This Blog List page displays all blogs on gorestapi and has pagination.
![bloglist](https://github.com/MicRoCats7/blog-gorest/blob/main/public/assets/listblog.png)
- **Post Detail**: Each article has a detail page with complete information and comments users.
![bloglist](https://github.com/MicRoCats7/blog-gorest/blob/main/public/assets/detailblog.png)
- **CRUD Users**: Page to manage users, including creating, editing, and deleting users.
![crudusers](https://github.com/MicRoCats7/blog-gorest/blob/main/public/assets/pageuser.png)

## Tech Stack

- **Next.js**: React framework for building web applications.
- **TypeScript**: Language for static typing and enhanced tooling in JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Library for HTTP requests.
- **Vercel**: Platform for globally deploying web applications.
- **ShadCn**: React component library for enhanced UI functionalities like modals and custom components, seamlessly integrated for better user experience and development efficiency.

## Getting Started

Follow these steps to run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/ziyad1412/blog_nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog_nextjs
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Deployment

The application is deployed using Vercel. You can access the deployed version [here](https://https://blog-gorest.vercel.app/).

### Credits

- Blog data is fetched from [GoRest API](https://gorest.co.in/).
- Built with by [Amri Iqra Samudra Al-Fatihah](https://github.com/MicRoCats7).
