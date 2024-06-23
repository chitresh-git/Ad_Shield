import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBar from './LoadingBar'; // Import the LoadingBar component
import './css/home.css';

const Home = () => {


    const [url, setUrl] = useState('');
    const [htmlContent, setHtmlContent] = useState('');
    const [cssContent, setCssContent] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInputVisible, setIsInputVisible] = useState(true); // Initially visible
    const [currentUrl, setCurrentUrl] = useState(''); // Track current URL

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const fetchWebsiteText = async (websiteUrl = currentUrl) => {
        try {
            setError('');
            setHtmlContent('Wait a moment , We are fetching your website ...');
            setCssContent([]);
            setIsLoading(true);

            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/fetch-website`, {
                params: { url: websiteUrl },
              });
              

            setHtmlContent(response.data.htmlContent);
            setCssContent(response.data.cssContents || []);
        } catch (err) {
            console.error('Error fetching website text:', err);
            setError('Failed to fetch content. Please check the URL or try with another URL.');
            setHtmlContent('');
            setCssContent([]);
        } finally {
            setIsLoading(false);
            setIsInputVisible(false); // Hide input and button after fetching
        }
    };

    useEffect(() => {
        // Inject CSS into the document head
        const styleElements = cssContent.map((css, index) => {
            const style = document.createElement('style');
            style.id = `scraped-css-${index}`;
            style.textContent = css;
            return style;
        });

        styleElements.forEach(style => document.head.appendChild(style));

        // Cleanup function to remove injected CSS when component unmounts or updates
        return () => {
            styleElements.forEach(style => {
                if (style && style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            });
        };
    }, [cssContent]);

    useEffect(() => {
        const handleLinkClick = (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const newUrl = event.target.href;
                setCurrentUrl(newUrl);
                fetchWebsiteText(newUrl);
            }
        };

        // Attach event listener to the scraped content div
        const scrapedContentDiv = document.getElementById('scraped-content');
        if (scrapedContentDiv) {
            scrapedContentDiv.addEventListener('click', handleLinkClick);
        }

        return () => {
            if (scrapedContentDiv) {
                scrapedContentDiv.removeEventListener('click', handleLinkClick);
            }
        };
    }, [fetchWebsiteText]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWebsiteText(url);
    };

    const handleFetchNewUrl = () => {
        setIsInputVisible(true);
        setUrl('');
        setHtmlContent('');
        setCssContent([]);
        setError('');
    };

    return (
        <div className="home-container">
            <h1 className="home-title" style={{ maxHeight: isInputVisible ? '55px' : '0', overflow: 'hidden' }}> Paste Website Link To Block Ad</h1>

            {isLoading && <div className="loading-bar-container"><div className="loading-bar" /></div>}

            <div className="form-container" style={{ maxHeight: isInputVisible ? '120px' : '0', overflow: 'hidden' }}>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={url}
                        onChange={handleInputChange}
                        placeholder="Enter website URL"
                        className="form-input"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="form-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Fetching...' : 'Fetch Text'}
                    </button>


                </form>
            </div>
            {error && <div className={`error-message ${error ? 'd-block' : 'd-none'}`}>{error}</div>}

            {!isInputVisible && (
                <button
                    className="fetch-button"
                    onClick={handleFetchNewUrl}
                >
                    Fetch New URL
                </button>
            )}
            <div id="scraped-content" className="scraped-content-container">
                <div
                    className="scraped-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>


        </div>
    );
};

export default Home;

