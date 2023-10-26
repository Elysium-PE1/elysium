# Elysium

Savor the Taste of Culinary Perfection

## API Routes

- http://localhost:3000/api/bookings [**POST**]

  - description: post the data of the user to the db.
  - [body](utils/models/bookings.ts)
  - response:
    ```json
    {
      "name": "string",
      "numberOfPeople": "string",
      "phone": "string",
      "email": "string",
      "date": "string",
      "numberOfTables": "string"
    }
    ```

- http://localhost:3000/api/bookings [**DELETE**]

  - description: delete all the bokings of the db and make the tablesLeft to max
  - response:
    ```json
    {
      "Deleted!"
    }
    ```

- http://localhost:3000/api/table [**PUT**]

  - description: to update the number of tables left by the admin,
  - body:

  ```json
  {
      "tablesFilled": number
  }
  ```

  - response:

  ```json
  {
      "_id":"string"
      "tablesLeft": number
  }
  ```

- http://localhost:3000/api/table [**GET**]

  - description: to get the number of tables left by the admin.
  - response:

  ```json
  {
      "_id":"string"
      "tablesLeft": number
  }
  ```
