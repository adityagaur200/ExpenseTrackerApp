# -------- Stage 1 : Build --------
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml first
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy remaining files
COPY . .

# Build jar
RUN mvn clean package -DskipTests


# -------- Stage 2 : Run --------
FROM eclipse-temurin:17

WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Run the application
ENTRYPOINT ["java","-jar","app.jar"]
