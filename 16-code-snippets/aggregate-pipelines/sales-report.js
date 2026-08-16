Order.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: { $month: "$createdAt" }, totalSales: { $sum: "$total" } } },
  { $sort: { _id: 1 } },
]);
