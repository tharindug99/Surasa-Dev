import React from 'react';

function Home() {
  // Dummy text
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Sed eleifend enim a ante sagittis, et sodales orci vestibulum. 
   Nulla facilisi. Donec eu feugiat ante. Nulla facilisi. 
   Pellentesque habitant morbi tristique senectus et netus et malesuada 
   fames ac turpis egestas. Suspendisse nec erat ut ex lacinia laoreet. 
   Integer lobortis tempor velit, vel euismod lectus lacinia eu. 
   Nunc nec arcu mauris. Vestibulum ante ipsum primis in faucibus orci luctus et 
   ultrices posuere cubilia Curae; Phasellus scelerisque ex sit amet viverra fermentum.
   Suspendisse potenti. Mauris eleifend nisl a quam lobortis, in rutrum ipsum tristique. 
   Sed et aliquam leo.`;

  // Dummy image URL
  const dummyImageUrl = 'https://via.placeholder.com/300';

  return (
    <div id="home" className="container text-4xl text-yellow-500">
      <h1>Welcome to Surasa</h1>
      <p>{loremIpsum}</p>
      <img src={dummyImageUrl} alt="Dummy" />
    </div>
  );
}

export default Home;
