function MyList({ list }) {
  console.log("thislist", list);

  const myList = window.localStorage.getItem("items");
  const finalList = JSON.parse(myList);
  return (
    <section className="my-list-wrapper">
      My List
      {finalList.map((item) => (
        <div>
          {item.item}
          Quanity: {item.count}${item.price}
        </div>
      ))}
    </section>
  );
}

export default MyList;
