import React from "react";

const Card = () => {
  return (
    <div className="h-[50vh] w-1/3 border-2 border-red-500">
      <div className="flex justify-center">
        <img
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png"
          alt=""
          className="h-40 w-40 rounded-full border-4 border-blue-300 p-2"
        />
      </div>
      <div>
        <h1>Popular Doggy</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          porro iure cum praesentium ex quam sit iste, incidunt minima inventore
          nesciunt nisi vero ad exercitationem nemo voluptate fuga veritatis
          pariatur quas a maiores id corporis nihil? Molestiae laboriosam
          assumenda, libero hic iure exercitationem, tempore iste ab
          consequuntur dicta officiis expedita.
        </p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
