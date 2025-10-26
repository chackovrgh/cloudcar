module.exports = async function (context, req) {
  const { name, car, date } = req.body;

  if (!name || !car || !date) {
    context.res = {
      status: 400,
      body: { message: "All fields are required!" },
    };
    return;
  }

  // Mock database (in-memory)
  const booking = {
    name,
    car,
    date,
    status: "confirmed",
  };

  context.log("New Booking:", booking);

  context.res = {
    status: 200,
    body: { message: `Booking confirmed for ${name} - ${car} on ${date}.` },
  };
};
