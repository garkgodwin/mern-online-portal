module.exports = (mongoose) => {
  const personSchema = mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: false,
      },
      personalEmail: {
        type: String,
        require: true,
        unique: true,
      },
      schoolEmail: {
        type: String,
        required: false,
        unique: true,
      },
      age: {
        type: Number,
        required: true,
      },
      birthDay: {
        type: Date,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("person", personSchema);
};
