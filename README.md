# 🧱 Dev Stack - Build Your Ideal Development Stack

A modern, responsive web application designed for developers to explore, compare, and assemble their ideal tech stack for upcoming projects.

---

## 📌 Project Overview

**Dev Stack** provides an intuitive interface to browse popular software development tools across various categories (Frontend, Backend, Database, Styling, DevOps, and Tools). Users can construct a custom stack by selecting technologies and managing their personal stack sidebar in real-time with duplicate prevention and alert feedback.

---

## 💻 Technologies Used

- **React 19** (TypeScript)
- **Tailwind CSS v4** + **DaisyUI**
- **React-Toastify** (Notification System)
- **JSON** (Technology Data)
- **Vite** (Build Tool)

---

## ✨ Key Features

1. **Interactive Tech Stack Builder:** Browse detailed technology cards and add items to your personal stack with real-time feedback and state tracking.
2. **Duplicate Prevention & Alert System:** Integrated `react-toastify` alerts warn users when attempting to add duplicate technologies while disabling action buttons on already selected items.
3. **Fully Responsive Layout:** Features a mobile-tailored navbar with a hamburger menu, adaptive 1-to-3 column card grid, and an optimized mobile stack layout.

---

## ❓ React Conceptual Questions

### i. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It is used in React because it makes building component UIs visual, readable, and easier to maintain while granting the full programmatic power of JavaScript inside the markup.

### ii. What is the difference between props and state?

- **Props (Properties):** Read-only data passed down from a parent component to a child component. The receiving component cannot modify props.
- **State:** Internal data managed within a component that can change over time based on user interactions. When state updates, React automatically re-renders the component to reflect the new data.

### iii. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to store and manage dynamic state. In this project, it was used inside `Tech.tsx` (`const [selectedStack, setSelectedStack] = useState<ITechType[]>([])`) to track the list of technologies currently added to the "Your Stack" sidebar.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in functional components (such as fetching data, subscribing to services, or modifying the DOM manually). It is used to trigger asynchronous data fetches (like retrieving local `data.json`) once when the component mounts, ensuring data loading occurs smoothly without blocking initial rendering. _(Note: React 19's `use()` API was also utilized in tandem with `<Suspense>` for promise resolution)._

### v. Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique `key` prop to identify which items in a list have changed, been added, or been removed. This helps React optimize DOM re-rendering performance by updating only the specific elements that changed rather than rebuilding the entire list.

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying specific UI elements or components based on whether a condition evaluates to `true` or `false`.

**Example from `Tech.tsx` (Empty Stack Message vs Selected Items List):**

```tsx
{
    selectedStack.length === 0 ? (
        <div className="border-2 border-dashed border-slate-100 rounded-xl p-8 text-center">
            <p className="text-slate-400 text-xs font-medium">
                Your stack is empty.
            </p>
        </div>
    ) : (
        <div className="flex flex-col gap-3">
            {/* Rendered selected items list */}
        </div>
    );
}
```

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent to Child:** Data is passed down via `props`.
- **Child to Parent:** The parent passes a callback function down as a prop to the child. When an event occurs, the child calls that function and passes updated data or events back up to the parent as arguments.

---
