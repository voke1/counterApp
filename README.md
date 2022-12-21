# My React Native Counter App
This is a simple React Native app with a login feature and a counter that increments and decrements. It was built using Expo and TypeScript.

## Prerequisites
Node.js
Expo CLI

## Getting Started
Clone the repository:

```
git clone https://github.com/voke1/counterApp.git
```

Navigate to the project directory:
```
cd counterApp
```

Install the dependencies:

```
yarn install
```

Run the app:
```
expo start
```

Testing
To run the tests for the app, use the following command:

```
npm test
```

This will run all of the unit, integration, and snapshot tests for the app.

##  License
This project is licensed under the MIT License - see the LICENSE file for details.

![alt text](https://github.com/voke1/counterApp/blob/develop/screenshots/app.jpg?raw=true)
![alt text](https://github.com/voke1/counterApp/blob/develop/screenshots/app1.jpg?raw=true)



# Answers to Questions;
## Explain the main hooks in React and give examples.
In React, a "hook" is a special function that allows a functional component to use state and other React features. There are several main hooks in React, including:

useState: This hook allows a functional component to use state in the same way that a class-based component can. It takes an initial state value as an argument, and returns an array with two elements: the current state value, and a function for updating the state. For example:

```
    const [count, setCount] = useState(0);

```

This creates a state variable called count, initialized to 0, and a function called setCount that can be used to update the value of count.

useEffect: This hook allows a functional component to perform side effects, such as making an HTTP request or setting up a subscription. It takes a function as an argument, which will be called after the component renders. This function can return a cleanup function, which will be called when the component unmounts. For example:
```
    useEffect(() => {
    const subscription = someAPI.subscribe(cb);
    return () => {
        subscription.unsubscribe();
    }
    }, [someDependency]);

```
This will set up a subscription to someAPI when the component mounts, and cancel the subscription when the component unmounts. The second argument to useEffect is an array of dependencies, which determines when the effect will be run. If the array is empty, the effect will only be run once, when the component mounts. If the array includes one or more values, the effect will be run whenever any of those values change.

useContext: This hook allows a functional component to access the context value for a context that has been created using React.createContext. It takes the context object as an argument, and returns the current context value. For example:

```
const theme = useContext(ThemeContext);
```
This will get the current value of the ThemeContext context.


## Walk me through useState, useEffect and UseContext
a.) useState is a hook in React that allows a functional component to use state. To use it, you can call the useState function inside your component, and pass it an initial state value. It will return an array with two elements: the current state value, and a function for updating the state. For example:

```
const [count, setCount] = useState(0);
```

This creates a state variable called count, initialized to 0, and a function called setCount that can be used to update the value of count. You can use the state variable and the update function like this:

```
return (
  <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```
This will display the current value of count and a button that, when clicked, will increment count by 1.

b) useEffect is a hook in React that allows a functional component to perform side effects, such as making an HTTP request or setting up a subscription. To use it, you can call the useEffect function inside your component, and pass it a function that will be called after the component renders. This function can return a cleanup function, which will be called when the component unmounts. For example:

```
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, []);
```

This will make an HTTP request to the specified URL when the component mounts, and set the response data to the data state variable. The second argument to useEffect is an empty array, which means that the effect will only be run once, when the component mounts.

c.) useContext is a hook in React that allows a functional component to access the context value for a context that has been created using React.createContext. To use it, you can call the useContext function inside your component, and pass it the context object. It will return the current context value. For example:

```
const theme = useContext(ThemeContext);
```
This will get the current value of the ThemeContext context, which can be used to set the component's styling based on the current theme.

## Explain how to build components in React

To build a component in React, you can create a function or a class that returns a JSX element. A JSX element is a syntax extension that allows you to include HTML-like elements in your JavaScript code. For example, you can create a component called MyComponent like this:

```
function MyComponent() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a component.</p>
    </div>
  );
}
```

This component will render a div element with an h1 element and a p element inside it.

You can also use props (short for "properties") to pass data into a component. Props are passed to a component as an object, and can be accessed inside the component using the props parameter. For example:

```
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a component.</p>
    </div>
  );
}
```

This component will render a div element with an h1 element and a p element inside it, and will display the value of the name prop inside the h1 element. You can use this component like this:

```
<MyComponent name="Bob" />
```

This will render the component with the name prop set to "Bob".

You can also create a class-based component by extending the React.Component class and implementing the render method. For example:

```
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>This is a component.</p>
      </div>
    );
  }
}
```

This component will work in the same way as the functional component example above.

