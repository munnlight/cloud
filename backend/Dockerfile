# Use Java 22
FROM openjdk:22-jdk

# Set working directory inside the container
WORKDIR /app

# Copy project files into container
COPY . .

# Build the project
RUN ./mvnw clean package -DskipTests

# Run the built JAR
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
