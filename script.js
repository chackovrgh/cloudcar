document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;

  const response = await fetch("/api/bookCar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, car, date }),
  });

  const result = await response.json();
  document.getElementById("message").textContent = result.message;
  e.target.reset();
});
