import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    { url: "http://source.unsplash.com/random/1" },
    { url: "http://source.unsplash.com/random/2" },
    { url: "http://source.unsplash.com/random/3" },
    { url: "http://source.unsplash.com/random/4" },
    { url: "http://source.unsplash.com/random/5" },
    { url: "http://source.unsplash.com/random/6" },
  ]);
  // always put state at start
  // Our state containing 6 images
  // images is our getter, we store the inital valu which is 6 images
  // setImages is our setter, through setImage when can manipulate our state
  // in this case we are using setImage to add or remove an image

  // function to add new images
  const getNewImages = () => {
    setImages([
      ...images,
      // grabbing the old state (our 6 images)
      {
        url: `http://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
          // getting an image with a random number
        )}`,
      },
    ]);
    // with setImages we are setting the state to the previous using spread operator ...images
    // we are also adding a new image that ends with a random number
  };

  // function to remove images
  const removeImage = () => {
    setImages(images.slice(0, -1));
    // by calling setImages we say that our state (images) will be images - 1
    // we use the built in method slice() it comes with the array prototype.
    // for now you dont have to understand slice() you can read up on it
    // google slice javascript mdn
  };

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images} />
      </div>

      <div className="btnContainer">
        <button onClick={getNewImages}>Add</button>
        <button onClick={removeImage}>Remove</button>
      </div>
    </section>
  );
  // dont put state here
  /*
We are using the component Card to render our images. We say that the prop images should be equal
to our state images.

In our buttons we are calling the onClick function which triggers the add function when clicking the Add button
and calling our remove function when clicking Remove button
*/
}

export default App;
