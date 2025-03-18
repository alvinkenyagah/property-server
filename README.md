# AccommodateApp API Endpoints

## **Auth**
| Method | Endpoint           | Description                  | Access  |
|--------|--------------------|------------------------------|---------|
| POST   | `/api/auth/signup` | User & landlord registration | Public  |
| POST   | `/api/auth/login`  | User & landlord login        | Public  |

## **Users & Landlords**
| Method | Endpoint             | Description                 | Access  |
|--------|----------------------|-----------------------------|---------|
| GET    | `/api/users/profile` | Get logged-in user profile  | Private |
| PUT    | `/api/users/profile` | Update user profile         | Private |

## **Properties**
| Method | Endpoint                 | Description                    | Access             |
|--------|--------------------------|--------------------------------|--------------------|
| POST   | `/api/properties`        | Landlord adds a property       | Private (Landlord) |
| GET    | `/api/properties`        | Get all properties             | Public             |
| GET    | `/api/properties/:id`    | Get a specific property by ID  | Public             |
| PUT    | `/api/properties/:id`    | Update property details        | Private (Landlord) |
| DELETE | `/api/properties/:id`    | Remove a property              | Private (Landlord) |

## **Images**
| Method | Endpoint        | Description             | Access  |
|--------|----------------|-------------------------|---------|
| POST   | `/api/upload`  | Upload property images  | Private |

## **Search & Filters**
| Method | Endpoint                                      | Description                  | Access  |
|--------|----------------------------------------------|------------------------------|---------|
| GET    | `/api/properties/search?location=city`     | Search properties by location | Public  |


### Note
- Add mongoDB databae URI in the .env file  required ie MONGODB_URI=mongodb+srv://username:database_password@cluster0.xi8u9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
- For local authentication setup add the following to your .env file JWT_SECRET="your secret key"