```javascript
// Example of an uncommon Tailwind CSS bug related to using arbitrary values in responsive modifiers
.my-class {
  @apply sm:m-10; // This works fine
  margin: 2rem;   // This overrides the sm:m-10 for smaller screens
}
```