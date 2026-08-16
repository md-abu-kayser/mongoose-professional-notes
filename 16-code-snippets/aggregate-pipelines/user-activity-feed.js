User.aggregate([
  { $match: { _id: userId } },
  {
    $lookup: {
      from: "posts",
      localField: "following",
      foreignField: "author",
      as: "feedPosts",
    },
  },
  { $unwind: "$feedPosts" },
  { $sort: { "feedPosts.createdAt": -1 } },
  { $limit: 20 },
]);
