import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [url, setUrl] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchWebsiteText = async () => {
    try {
      setError('');
      setHtmlContent('Loading...');

      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const response = await axios.get(`${proxyUrl}${encodeURIComponent(url)}`);

      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data.contents, 'text/html');
      const bodyHtml = doc.body.innerHTML;

      setHtmlContent(bodyHtml);
    } catch (err) {
      console.error('Error fetching website text:', err);
      setError('Failed to fetch content. Please check the URL or try again later.');
      setHtmlContent('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Website Text Scraper</h1>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter website URL"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={fetchWebsiteText}
        style={{ padding: '10px 20px', fontSize: '16px', margin: '20px 0' }}
      >
        Fetch Text
      </button>
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      <div
        style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default App;










/*import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchWebsiteText = async () => {
    try {
      setError('');
      setText('Loading...');

      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const response = await axios.get(`${proxyUrl}${encodeURIComponent(url)}`);

      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data.contents, 'text/html');
      let bodyText = doc.body.innerText;

      // Remove unwanted CSS styles
      bodyText = bodyText.replace(/\.mw-parser-output[\s\S]*?\{[\s\S]*?\}/g, '');

      // Replace multiple whitespaces with a single space and trim
      bodyText = bodyText.replace(/\s+/g, ' ').trim();

      setText(bodyText);
    } catch (err) {
      console.error('Error fetching website text:', err);
      setError('Failed to fetch content. Please check the URL or try again later.');
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Website Text Scraper</h1>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter website URL"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={fetchWebsiteText}
        style={{ padding: '10px 20px', fontSize: '16px', margin: '20px 0' }}
      >
        Fetch Text
      </button>
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      <div style={{ whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        {text}
      </div>
    </div>
  );
};

export default App;
*/