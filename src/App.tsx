import React, { useEffect, useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useSWR from 'swr';

function App() {
  // State
  const [state, setState] = useState<any>();


  const stringArray = ['c4.2xlarge', 'c5.large'];
  const substring = 'c4';

  const subStringsArray = ['c4', 'c5'];
  const subConstraintsArray = ['large', '2xlarge'];

  // useEffect(() => {
  //   if (string === (substring + '.' + '2xlarge')) {
  //     console.log(string + ' is equal to ' + substring);
  //   } else {
  //     console.log('not found')
  //   }
  // }, [])

  useEffect(() => {
    for (let i in stringArray) {
      for (let j in subStringsArray) {
        for (let k in subConstraintsArray) {
          if (stringArray[i] === (subStringsArray[j] + '.' + subConstraintsArray[k])) {
            console.log(stringArray[i] + ' is equal to ' + subStringsArray[k]);
          } else {
            console.log('not found');
          }
        }
      }
    }
  }, [])

  // SWR
  // const $url = 'http://localhost:3000/endpoint';
  // const fetcher = async () => {
  //   const res = await axios.get($url);
  //   return res.data;
  // }
  // const { data, error } = useSWR($url, fetcher, { refreshInterval: 1 });

  // const newArr: any = [];
  // useEffect(() => {
  //   console.log($url);
  //   if (error) {
  //     console.log(error);
  //   }

  //   if (data) {
  //     // console.log(data.instance_types);
  //     for (let i in data.instance_types) {
  //       for (let j in data.instance_types[i]) {
  //         newArr.push(i);
  //       }
  //     }
  //     setState(newArr);
  //     // setState([data.instance_types]);
  //   }
  //   console.log(newArr);

  //   return () => { }
  // }, [data])

  // useEffect(() => {
  //   console.log(state);
  // }, [state])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>auto-deployment</h1> */}
        {/* {
          [state].map((item: any, index: any) => (
            <ul key={index}>
              <li key={index}>{item}</li>
            </ul>
          ))
        } */}
        {/* <strong>ENV: {process.env.REACT_APP_ENV_TYPE}</strong>
        <Counter /> */}
        {/* <p>
          Edit <code>src/App.tsx / test rebuild</code>
        </p> */}
        {/* <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
