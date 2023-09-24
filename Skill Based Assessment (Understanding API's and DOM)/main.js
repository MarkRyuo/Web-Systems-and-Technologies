document.getElementById("displayEven").addEventListener("click", function () {
  fetchData("even");
});

document.getElementById("displayOdd").addEventListener("click", function () {
  fetchData("odd");
});

function fetchData(displayType) {
  fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
          const filteredData = data.filter((item, index) => {
              if (displayType === "even") {
                  return index % 2 === 0;
              } else {
                  return index % 2 !== 0;
              }
          });

          renderData(filteredData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
}

function renderData(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.userId}</td>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.completed}</td>
      `;
      tableBody.appendChild(newRow);
  });
}