### Documentation for Imports from `@nestjs/common`

- **`Body`**: A decorator that extracts the entire body of a request. It is used in the method parameter to access the request body.

- **`Controller`**: A decorator that marks a class as a NestJS controller. Controllers are responsible for handling incoming requests and returning responses to the client.

- **`Patch`**: A decorator that defines a route handler for HTTP PATCH requests. It is used to update partial resources.

- **`Delete`**: A decorator that defines a route handler for HTTP DELETE requests. It is used to delete resources.

- **`Get`**: A decorator that defines a route handler for HTTP GET requests. It is used to retrieve resources.

- **`Param`**: A decorator that extracts a specific parameter from the request. It is used in the method parameter to access route parameters.

- **`Post`**: A decorator that defines a route handler for HTTP POST requests. It is used to create new resources.

- **`Query`**: A decorator that extracts query parameters from the request. It is used in the method parameter to access query string parameters.

- **`NotFoundException`**: An exception that is thrown when a requested resource is not found. It results in a 404 HTTP response.



## Imports in `users.service.ts`

### Imports from `@nestjs/common`

- **`Injectable`**:

Flow Summary
UserService is defined and registered in UserModule.
UserModule exports UserService so it can be used in other modules.
AdminModule imports UserModule to gain access to UserService.
AdminController injects UserService and calls its methods.


  - **Description**: A decorator that marks a class as a provider that can be injected into other classes via dependency injection.
  - **Usage**: Used to define a service class in NestJS.
  - **Example**:
    ```typescript
    @Injectable()
    export class UsersService {
      // Service logic here
    }
    ```

- **`NotFoundException`**:
  - **Description**: An exception that is thrown when a requested resource is not found.
  - **Usage**: Used to handle cases where a resource is not found, resulting in a 404 HTTP response.
  - **Example**:
    ```typescript
    throw new NotFoundException(`User with ID ${id} not found`);
    ```

### Imports from `typeorm`

- **`Repository`**:
  - **Description**: A class that provides an abstraction layer for database operations.
  - **Usage**: Used to interact with the database in a type-safe manner.
  - **Example**:
    ```typescript
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;
    ```

### Imports from `@nestjs/typeorm`

- **`InjectRepository`**:
  - **Description**: A decorator that injects a TypeORM repository into a service.
  - **Usage**: Used to access the repository for a specific entity within a service class.
  - **Example**:
    ```typescript
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;
    ```



    ## `user.dto.ts` Documentation

### Imports

- **`class-transformer`**:
  - **`Expose`**: A decorator that marks a property to be included in the transformation process.
  - **`Exclude`**: A decorator that marks a property to be excluded from the transformation process.

### `UserDto` Class

The `UserDto` class is a Data Transfer Object (DTO) used to define the structure of user data that is transferred between different parts of the application.

#### Properties

- **`id`**:
  - **Type**: `number`
  - **Decorators**: `@Expose()`
  - **Description**: The unique identifier for the user. This property is included in the transformation process.

- **`email`**:
  - **Type**: `string`
  - **Decorators**: `@Expose()`
  - **Description**: The email address of the user. This property is included in the transformation process.

### Example Usage

```typescript
import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}




## `serialize.interceptor.ts` Documentation

### Imports

- **`@nestjs/common`**:
  - **`UseInterceptors`**: A decorator that applies interceptors to a route handler or controller.
  - **`NestInterceptor`**: An interface that defines the contract for NestJS interceptors.
  - **`ExecutionContext`**: Provides methods to access the details about the current request.
  - **`CallHandler`**: Provides methods to handle the request and response.

- **`rxjs/operators`**:
  - **`map`**: An operator that applies a given function to each value emitted by the source Observable.

- **`rxjs`**:
  - **`Observable`**: Represents a stream of data that can be observed.

- **`class-transformer`**:
  - **`plainToClass`**: A function that transforms plain JavaScript objects into instances of a given class.

### `Serialize` Function

```typescript
export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}






Cookie-Session 
Custom Decorators and interceptors