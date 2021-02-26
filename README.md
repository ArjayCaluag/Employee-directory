# **Employee Directory**

This project is a react based application that serves as an employee directory for the user. This application is broken up into multiple components, manages component state, and responds to user event. It is populated with the Random User API and the user has the ability to enter a name to search for a specific employee or click on the name tab to sort by alphabetical order.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/109266060-5b0bf780-77bc-11eb-955a-df25f858ae51.png)




# **Installation**

Run this command to create your react based application.

```html

npx create-react-app <appname>

```

# **Built With**

<ul>
    <li> React - JS library for building interactive user inferfaces
    <li> Bootstrap - CSS framework
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> HTML - The standard markup language for web pages 
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
Here is a snippit of the use of useState and useEffect hooks. I used useState to manage the different states in my functional components. The useEffect was used in conjuction with the Random User Api to generate random employees.

```js
 
  const [employeeState, setEmployeeState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const [sortByName, setSortByName] = useState(false)

  // Grabs employees from randomuser api and sets into employee and filtered employee states
  useEffect(() => {
    API.getEmployees().then((res) => {
      console.log(res.data.results);
      setEmployeeState(res.data.results);
      setFilteredEmployee(res.data.results);
    });
  }, []);


```

```js
 // Filters employees into new array if input contains letters of employees names
  const searchEmployeeName = () => {
    let filterArr = employeeState.filter((user) =>
      user.name.first.toLowerCase().includes(searchTerm));
      setFilteredEmployee(filterArr);
  };


```
# **Deployed Link**

https://arjaycaluag.github.io/Employee-directory/
# **Authors**

Ron-Arjay Caluag<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)<br>
[Github](https://github.com/ArjayCaluag)


The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
