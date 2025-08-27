function Food() {
  const food1 = "Pastil";
  const food2 = "Sushi";
  const food3 = "Lasagna";
  return (
    <ul>
      <li>{food1}</li>
      <li>{food2}</li>
      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
