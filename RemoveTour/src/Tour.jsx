import Card from "./Card";
function Tour(tours) {
  return (
    <div>
      <div>
        <h2>Plan with Love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tour;
