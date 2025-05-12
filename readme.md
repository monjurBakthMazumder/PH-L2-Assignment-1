# What are some differences between interfaces and types in TypeScript?

You can define object types with both type and interface. When it comes to extending another structure, type uses intersection (&) while interface uses the extends keyword. Generally, type is preferred when working with primitives or creating complex union types, while interface is the better choice when defining the shape of objects, especially in API contracts or when working with class-based structures.

---
# Explain the difference between any, unknown, and never types in TypeScript.

 The any type allows a variable to hold any value without type checking, effectively disabling TypeScript's safety features. The unknown type is similar to any in that it can hold any value, but it requires type checking before performing operations on it. the never type represents values that never occur, often used in functions that never return, such as those that throw errors. 