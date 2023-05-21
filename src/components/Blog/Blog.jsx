import React from 'react';
import useTitle from '../../useTitle';

const Blog = () => {
  useTitle('Blog')
    return (
        <div className="bg-purple-300 min-h-screen  py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p>
              An access token is a credential that is used to authenticate and authorize a user's access to specific resources in a system. It is typically short-lived and is used to make authenticated requests to protected endpoints. On the other hand, a refresh token is a long-lived token that is used to obtain a new access token once the current one expires.
            </p>
            <p>
              Access tokens are usually stored in the client-side application's memory or local storage, as they need to be sent with each request to authenticate the user. However, storing them in local storage poses security risks, as they can be vulnerable to cross-site scripting (XSS) attacks. A more secure approach is to store the access token in an HTTP-only cookie, which mitigates the risk of XSS attacks.
            </p>
            <p>
              Refresh tokens, on the other hand, should be stored securely on the server-side, as they provide the means to obtain new access tokens. They are typically stored in a database with appropriate security measures, such as encryption or hashing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              Compare SQL and NoSQL databases
            </h2>
            <p>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems with different approaches to storing and retrieving data.
            </p>
            <p>
              SQL databases are relational databases that store data in tables with predefined schemas. They use structured query language (SQL) for defining and manipulating the data. SQL databases ensure data integrity through ACID (Atomicity, Consistency, Isolation, Durability) properties and are suitable for complex relationships and structured data. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.
            </p>
            <p>
              NoSQL databases, on the other hand, are non-relational databases that provide flexible schemas and scalable data models. They are designed to handle large amounts of unstructured or semi-structured data. NoSQL databases offer high performance, horizontal scalability, and flexible data models. They are suitable for handling large-scale data, real-time applications, and scenarios where data structures may evolve over time. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              What is Express.js? What is Nest.js?
            </h2>
            <p>
              Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js allows developers to handle HTTP requests, define routes, and implement middleware to handle various aspects of request processing. It is known for its flexibility, extensibility, and ease of use, making it a preferred choice for building web applications and APIs using Node.js.
            </p>
            <p>
              Nest.js, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and takes advantage of TypeScript's features like strong typing, decorators, and dependency injection. Nest.js follows a modular architecture and provides a set of powerful abstractions and design patterns for developing scalable and enterprise-grade applications. It combines elements from different frameworks, including Express.js, to offer a robust development experience and support for various use cases.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              MongoDB's aggregate is a powerful feature that allows you to perform complex data aggregation operations on collections. It provides a flexible and efficient way to process and analyze data within MongoDB.
            </p>
            <p>
              The aggregate pipeline in MongoDB consists of multiple stages, each performing a specific operation on the input data. The stages can include operations like filtering, sorting, grouping, transforming, and calculating aggregate values. The output of each stage serves as the input for the next stage in the pipeline.
            </p>
            <p>
              The aggregate pipeline uses a declarative syntax where you define the stages and their respective operations. It supports a wide range of operators, such as $match, $group, $sort, $project, $limit, $skip, and more. By chaining these stages together, you can shape and manipulate the data to meet your specific requirements.
            </p>
            <p>
              The aggregate pipeline is highly flexible and allows you to perform complex data analysis and transformations in a single query. It is particularly useful for tasks like data aggregation, reporting, and generating insights from large datasets.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;