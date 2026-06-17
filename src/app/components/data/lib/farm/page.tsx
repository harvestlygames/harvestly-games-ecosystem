import crops from "@/data/crops.json";

export default function FarmPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        My Farm
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="border p-5 rounded-xl"
          >
            <h2>{crop.name}</h2>

            <p>
              Grow Time: {crop.growTime} sec
            </p>

            <p>
              Reward: {crop.reward}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
