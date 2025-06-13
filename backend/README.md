# Backend README

# React Spring Boot Keycloak Application - Backend

This document provides instructions for setting up and running the backend of the React Spring Boot Keycloak application.

## Prerequisites

- Java 11 or higher
- Maven
- Keycloak server

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rajkumardev/react-springboot-keycloak-app.git
   cd react-springboot-keycloak-app/backend
   ```
2. **Configure Application Properties**
   - Modify the `application.properties` file in `src/main/resources/` to set your server port and database configurations as needed.

3. **Build the Application**
   ```bash
   mvn clean install
   ```

4. **Run the Application**
   ```bash
   mvn spring-boot:run
   ```

The backend application should now be running on the configured port.

## Usage

- The backend exposes RESTful APIs that can be consumed by the frontend application.
- Ensure that the Keycloak server is running and accessible for authentication.

## Additional Information

- For more details on the Spring Boot application, refer to the official Spring Boot documentation.
- For Keycloak integration, consult the [Keycloak documentation](https://www.keycloak.org/documentation) for guidance on setting up realms and clients.