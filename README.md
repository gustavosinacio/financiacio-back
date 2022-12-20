# Built with:

- node
- typescript

<br />

# Used libs

- Postgresql: for database
- TypeORM: Object Relational Mapping lib with a lot of support and comprehensive documentation
- TSyringe: for dependency injection

<br />

## To run this project:

1. Run `yarn install` command
2. Setup database settings inside `.env` file
3. Run `yarn dev` command

<br />
<br />

---

# S.O.L.I.D

# S - single responsability

Controllers, use cases, specs, routers, repositories, etc. were all created to handle a single responsability inside the api

# O - open/closed

Repositories were made to not require much maintenence, but can be extended easily

# L - Liskov substitution

Going more to the routes of liskov substitution when it was more about types, repositories were all made based on a parent type, meaning all of them can be interchanged without issues.

# I - interface segregation

Repositories were created based on typeorm's repository, but implementing a basic interface created to rule all repositories of the type inside the application. This means that it's implementations will always only have methods used throughout the application and no methods that will implemented "by force"

# D - dependency inversion/injection

This was implemented in two ways, the first one being by hand in the use cases related to user's creation, listing and search.
The second one was by using **tsyringe** to inject all other repositories and useCases.

This was also represent in the folder structure, were folders like **infra/typeorm** were created to represent the implementation based on typeorm's format
