
function Raffles({name, unit, status, image}) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="flex items-center gap-2">
        <button className="px-4 py-3 bg-white rounded active:bg-blue-700">New Raffles</button>
        <button className="px-4 py-3 bg-white rounded active:bg-blue-700">Closed Raffles</button>
        <div className="grid grid-cols-4 gap-4">
          <RaffleCard name={name} unit={unit} status={status} image={image} />
        </div>
      </div>
    </div>
  )
}
export default Raffles

function RaffleCard({name, unit, status, image}) {
  return (
    <div>
      <div className="h-[70%]"><<img src={image} alt={title} />/div>
      <div className="h-[30%]">
        <h3>{title}</h3>
        <div className="flex justify-between items-center">
          <button className="px-2 py-3 bg-white rounded">Get Now</button>
          <div className="flex flex-col items-center gap-1">
            <h6>Available</h6>
            <p>{unit}/50</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}