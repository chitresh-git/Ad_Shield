
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LoadingBar = ({ isLoading }) => {
//   return (
//     <div style={{ height: '4px', margin: '20px 0' }}>
//       {isLoading && (
//         <div style={{
//           width: '100%',
//           height: '100%',
//           background: '#4caf50',
//           animation: 'loadingAnimation 2s linear infinite'
//         }}></div>
//       )}
//       <style>
//         {`
//           @keyframes loadingAnimation {
//             0% { transform: translateX(-100%); }
//             50% { transform: translateX(0); }
//             100% { transform: translateX(100%); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const App = () => {
//   const [url, setUrl] = useState('');
//   const [htmlContent, setHtmlContent] = useState('');
//   const [cssContent, setCssContent] = useState([]);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isInputVisible, setIsInputVisible] = useState(true); // Initially visible

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const fetchWebsiteText = async (websiteUrl) => {
//     try {
//       setError('');
//       setHtmlContent('Loading...');
//       setCssContent([]);
//       setIsLoading(true);

//       const response = await axios.get('https://webscrap-dbir.onrender.com/fetch-website', {
//         params: { url: websiteUrl },
//       });

//       setHtmlContent(response.data.htmlContent);
//       setCssContent(response.data.cssContents || []);
//     } catch (err) {
//       console.error('Error fetching website text:', err);
//       setError('Failed to fetch content. Please check the URL or try again later.');
//       setHtmlContent('');
//       setCssContent([]);
//     } finally {
//       setIsLoading(false);
//       setIsInputVisible(false); // Hide input and button after fetching
//     }
//   };

//   useEffect(() => {
//     // Inject CSS into the document head
//     const styleElements = cssContent.map((css, index) => {
//       const style = document.createElement('style');
//       style.id = `scraped-css-${index}`;
//       style.textContent = css;
//       return style;
//     });

//     styleElements.forEach(style => document.head.appendChild(style));

//     // Cleanup function to remove injected CSS when component unmounts or updates
//     return () => {
//       styleElements.forEach(style => {
//         if (style && style.parentNode) {
//           style.parentNode.removeChild(style);
//         }
//       });
//     };
//   }, [cssContent]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWebsiteText(url);
//   };

//   const handleFetchNewUrl = () => {
//     setIsInputVisible(true);
//     setUrl('');
//     setHtmlContent('');
//     setCssContent([]);
//     setError('');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Website Text Scraper</h1>
//       {isLoading && <LoadingBar isLoading={isLoading} />}
//       <div style={{ marginBottom: '20px', transition: 'all 0.3s ease', maxHeight: isInputVisible ? '100px' : '0', overflow: 'hidden' }}>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={url}
//             onChange={handleInputChange}
//             placeholder="Enter website URL"
//             style={{ width: 'calc(100% - 80px)', padding: '10px', fontSize: '16px' }}
//             disabled={isLoading}
//           />
//           <button
//             type="submit"
//             style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
//             disabled={isLoading}
//           >
//             Fetch Text
//           </button>
//         </form>
//       </div>
//       {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
//       <style>
//         {`
//           img {
//             max-width: 100%;
//             height: auto;
//           }
//           .scraped-content {
//             max-width: 100%;
//             overflow-x: auto;
//           }
//         `}
//       </style>
//       <div
//         className="scraped-content"
//         style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//       {!isInputVisible && (
//         <button
//           style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px', fontSize: '16px' }}
//           onClick={handleFetchNewUrl}
//         >
//           Fetch New URL
//         </button>
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>
  );
};

export default App;
