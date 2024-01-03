function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const getMessage = () => { 
    return items.length == 0 ? <p>No item found</p> : null;
  }

  return (
    <>
      <h1>List</h1>
      {} 
      <ul className="list-group">
        {getMessage()}
      </ul>
    </>
  );
}

export default ListGroup;
