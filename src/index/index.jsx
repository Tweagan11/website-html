import React from 'react';
import './about.css';

export function Index(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }

  return (
    <>
    <main class="bg-light text-center container-fluid">
      <div class="container3">
          <div class="top">
            <h1 class="display-4 fw-bold lh-1 mb-3">Treehouse Talks</h1>
              <p class="lead col-mb-10 mx-auto">
              Treehouse is a community driven experience focused on giving the community a platform to speak.
              We feature a variety of topics, such as entreprenuerism, failure, travel, mental health, pride, etc.
              We focus mainly on providing a safe space for everyone to come and learn new ideas, become more aware,
              and connect with peers. Want to get involved? Contact us!
              </p>
          </div>
        <div class="container2">
          <div class="simontext">
            <h2 class="display-4 fw-bold">Simon project</h2>
            <p class="fs-5">
              This is where the <a href="https://simon.thtalks.org/index.html">link</a> to my implementation of the
              Simon is and it has been fun trying to both recreate simon while maintaining the core functionality!
            </p>
          </div>
          <div class="web">
            <h2><b>Web programming assignments</b></h2>
            <h3>HTML</h3>
            <div class="link-display">
              <div>
                <a href="https://codepen.io/Tweagan11/pen/NWBmbxQ">Introduction</a>
                - Basic HTML page example
              </div>
              <div>
                <a href="https://codepen.io/Tweagan11/pen/poZBNLE">Structure</a> -
                All the elements for creating page structure
              </div>
              <div>
                <a href="https://codepen.io/Tweagan11/pen/MWBRbZm">Input</a> - All
                the elements for receiving user input
              </div>
              <div>
                <a href="https://codepen.io/Tweagan11/pen/QWBPGeG">Media</a> - All
                the elements for rendering media objects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container col-xl-9 col-xxl-8 px-4 py-5" id="signbox">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3">Sign up with Treehouse</h1>
              <p class="col-lg-10 fs-4">By signing up, you stay in touch with events, deals, and upcoming speakers for each event.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
            <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
            </div>
          </div>
      </div>
    </main>
    </>
  );
}
