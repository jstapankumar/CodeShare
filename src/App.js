import './App.css'
import { Routes,Route } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark,vs,agate,atomOneLight,github,githubGist, googlecode} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Home from './components/Home';
import All from './components/All';
import Single from './components/Single';
import Error from './components/Error';
import New from './components/New';

function App() {
const code = 'const express = require("express");\nconst app = express();\nconst path = require("path");\nconst axios = require("axios");'
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/post/all' element={<All/>}/>
        <Route exact path='/post/new' element={<New/>}/>
        <Route exact path='/post/:id' element={<Single/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      {/* <SyntaxHighlighter wrapLongLines  showLineNumbers  language='js' style={atomOneDark}>
        {code}
      </SyntaxHighlighter> */}
    </div>
  )
}

export default App;
