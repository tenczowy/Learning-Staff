// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//   const squared = square(n);
//   console.log(squared);
// }

// printSquare(4);

// console.log('hi');

// setTimeout(() => {
//   console.log('There');
// }, 0);

// console.log('Daniel');

// function getQuote() {
//   try {
//     const quote = fetch('https://api.quotable.io/random')
//       .then((res) => {
//         const data = res.json();
//         for (let i = 0; i < 2999999900; i++) {
//           let j = 0;
//           j++;
//         }
//         return data;
//       })
//       .then((quote) => {
//         console.log(quote.content);
//       });
//   } catch (err) {
//     console.error(err);
//   }
// }

// console.log('Hello');

// getQuote();

// console.log('World');

// async function getData() {
//   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const dataJson = await data.json();
//   console.log(dataJson);
// }

// getData();

// function makeGetRequest(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// const data = await makeGetRequest(
//   'https://jsonplaceholder.typicode.com/todos/1'
// );
// console.log(data);

// function downloadAll(arr) {
//   Promise.all(arr).then((values) => {
//     values.forEach((url) => {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//     });
//   });
// }

// const arr = [
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/2',
//   'https://jsonplaceholder.typicode.com/todos/3',
// ];

// downloadAll(arr);

// function downloadContents(urls) {
//   const promises = urls.map((url) => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     });
//   });

//   return Promise.all(promises);
// }

// const urls = [
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/2',
//   'https://jsonplaceholder.typicode.com/todos/3',
// ];

// downloadContents(urls)
//   .then((contents) => {
//     console.log('Downloaded contents:', contents);
//   })
//   .catch((error) => {
//     console.log('Error:', error.message);
//   });
