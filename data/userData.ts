// userData.ts

export type User = {
    email: string
    password: string
  }
  
  // Static users dataset
  export const users: User[] = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "securepassword" },
    { email: "user3@example.com", password: "mypassword" },
  ]
  
  // Function to validate user credentials
  export const validateUser = (email: string, password: string): boolean => {
    return users.some((user) => user.email === email && user.password === password)
  }
  