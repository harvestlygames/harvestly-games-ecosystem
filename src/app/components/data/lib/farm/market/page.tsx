const items = [
  {
    name: "Wheat",
    price: 15
  },
  {
    name: "Corn",
    price: 30
  },
  {
    name: "Milk",
    price: 40
  }
];

export default function MarketPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">
        Marketplace
      </h1>

      {items.map((item) => (
        <div
          key={item.name}
          className="border p-4 rounded-lg mb-3"
        >
          <p>{item.name}</p>

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
