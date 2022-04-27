{
    pName: {
      type: String,
      required: [true, "Please Enter product Name"],
    },
    pDescription: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    pPrice: {
      type: Number,
      required: [true, "Please Enter product Price"],
    },
    ratings: {
        type: Number,
        default: 0,
      },
       pQuantity: {
      type: Number,
      default: 0,
    },
    SousCategory: {
      type:String,
      required: [true, "Please Enter Product Sous-Category"],
    },
    pCategory: {
      type:String,
      required: [true, "Please Enter Product Category"],
     
    },
    pImages: {
      type: Array,
      required: true,
    },

    Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        default: 1,
      },
   
    pRatingsReviews: [
      {
        review: String,
        user: { type: ObjectId, ref: "users" },
        rating: String,
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    pStatus: {
      type: String,
      required: true,
    },
  },