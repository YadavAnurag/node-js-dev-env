import faker from 'faker';

export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "x-chance": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "x-chance": "name.lastName"
          },
          "email": {
            "type": "string",
            "chance": {
              "email": {
                "domain": "fake.com"
              }
            }
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
