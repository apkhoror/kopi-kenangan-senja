document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Good Day", img: "img/produk/kopi1.jpg", price: 20000 },
      { id: 2, name: "Kapal Api", img: "img/produk/kopi2.jpg", price: 30000 },
      { id: 3, name: "Caffucino", img: "img/produk/kopi3.jpg", price: 25000 },
      { id: 4, name: "White Coffee", img: "img/produk/kopi4.jpg", price: 15000 },
      { id: 5, name: "Fresco", img: "img/produk/kopi5.jpg", price: 35000 },
    ],
  }));
});
