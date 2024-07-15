import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:10000/api/shortenLink",url);
    setShortUrl(res.data.working);
  }

  return (
    <>
      <div>
        <h1>URL Shortener</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='url' required placeholder='Enter URL' className='input' value={url} onChange={(e)=>setUrl(e.target.value)}></input>
          <button type='submit'>Create</button>
        </form>
        {
          shortUrl ? (<><code>Generated Link <pre>http://{shortUrl}</pre></code></>):(<a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>)
        }
      </div>
    </>
  )
}

export default App
