import React from "react";
import Card from "./components/Card";

const App = () => {
  let productsArray = [
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
    {
      imageLink:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/W/WS/WS1/ws-1400h-1av/assets/WS-1400H-1AV.png.transform/main-visual-sp/image.png",
      productName: "Casio Watch",
      productDetails: "casio watch 500 M",
      productPrice: 5699,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {productsArray.map((data) => {
        return (
          <Card
            imageLink={data.imageLink}
            productName={data.productName}
            productDetails={productsArray.productDetails}
            productPrice={data.productPrice}
          />
        );
      })}
    </div>
  );
};

export default App;
