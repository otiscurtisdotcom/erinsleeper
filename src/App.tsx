import React from 'react';

function App() {
  const allImageData = [
    {
      title: 'Mint',
      year: '2023',
      size: '34cm x 29cm'
    },
    {
      title: 'Cherry',
      year: '2024',
      size: '20cm x 30cm'
    },
    {
      title: 'Sixteen Dancers',
      year: '2023',
      size: '15cm x 15cm'
    },
    {
      title: 'Skive',
      year: '2024',
      size: '22cm x 17cm'
    },
    {
      title: 'Split',
      year: '2023',
      size: '35cm x 24cm'
    },
  ];

  const getImages = () => {
    return allImageData.map((imageData, i) => {
      return (
        <div className='image-block'>
          <picture>
            <source
              media="(max-width: 719px)"
              srcSet={`${process.env.PUBLIC_URL}/photos/${i}_720.jpg`}
            />
            <source
              media="(min-width: 720px)"
              srcSet={`${process.env.PUBLIC_URL}/photos/${i}_1440.jpg`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/photos/${i}_1440.jpg`}
              alt={`Erin Sleeper: ${imageData.title}`}
            />
          </picture>
          <h2><span>{imageData.title}</span>, {imageData.year}</h2>
          <h3>{imageData.size}</h3>
        </div>
      )
    })
  }

  return (
    <section>
      <div className='details'>
        <div className='fixed'>
          <h1>Erin Sleeper</h1>
          <p>
            Email: <a href="mailto:sleeper.e@gmail.com" target='_blank'>sleeper.e@gmail.com</a>
          </p>
          <p>
            Instagram: <a href='https://www.instagram.com/_damozel' target='_blank'>_damozel</a>
          </p>
        </div>
      </div>
      <div className='pictures'>
        {getImages()}
      </div>
    </section>
  );
}

export default App;
