L.mapquest.key = "5Xxkuen7Afn9benaaKLQGKjGN7A6LLzt";
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const coord = [getRandomArbitrary(-90, 90), getRandomArbitrary(-180, 180)];
// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
  center: coord,
  // 1. change 'map' to 'hybrid', try other type of map
  layers: L.mapquest.tileLayer("satellite"),
  zoom: 12,
});

// 2. Add control
map.addControl(L.mapquest.control());

// 3. Add icon
L.marker(coord, {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("Some random place!")
  .addTo(map);
