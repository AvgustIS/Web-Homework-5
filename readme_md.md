# Assignment #5: JavaScript Basics (DOM Manipulation & Events)

**Student Name:** Isaali 
**Group:** IT-2502  


## Overview
This project demonstrates the core concepts of JavaScript, including data types, working with objects, dynamic arithmetic calculations, handling form events, and manipulating DOM elements (adding/removing items dynamically).


## Task Details & Screenshots

### Part 1: Profile Object, Data Types & Arithmetic
- **Task 1: The Personal Info Object**  
  Created a `userProfile` object containing `string` (name), `number` (birthYear), `boolean` (isDeveloper), and `array` (hobbies).
- **Task 2: Arithmetic Calculations**  
  Calculated user age dynamically using `new Date().getFullYear() - birthYear`, along with additional metrics such as age in months and total count of hobbies.



### Part 2: Form Input & Event Responses
- **Task 3: HTML Form Setup**  
  Designed an HTML form with inputs for Username and Birth Year, alongside a submission button.
- **Task 4: Event Listener**  
  Attached an event listener to capture form inputs upon submission, prevent the default page refresh using `event.preventDefault()`, and update the `userProfile` object dynamically.



### Part 3: DOM List Manipulation
- **Task 5: Creating & Removing Elements**  
  Implemented an interactive unordered list (`<ul>`) allowing users to add new list items (`<li>`) via an input field and remove the last item safely.




## Summary of Work Process

1. **Object Initialization:** Defined the initial `userProfile` object with diverse data types.
2. **Dynamic Logic:** Applied JavaScript `Date` API and arithmetic operators to extract and process user age metrics.
3. **Event Handling:** Bound click handlers to update the object attributes without triggering form reloads.
4. **DOM Updates:** Manipulated HTML element structures using methods like `createElement()`, `appendChild()`, and `removeChild()`.
5. **Deployment:** Pushed source files to GitHub and configured deployment via GitHub Pages.