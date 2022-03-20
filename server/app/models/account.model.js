module.exports = mongoose => {
  const userLength = {
    min: 6,
    max: 24,
  }
  const passLength = {
    min: 6,
  }
  const accountSchema = mongoose.Schema(
      {
        username: {
          type: String,
          unique: true,
          min: [userLength.min, `The minimum value for username is ${userLength.min}`],
          max: [userLength.max, `The maximum value for username is ${userLength.max}`],
        },
        password: {
          type: String,
          min: [passLength.min, `The minimum value for password is ${passLength.min}`],
        },
        role: {
          type: String,
        },
      },
      {
        timestamps: true
      }
    );

  return mongoose.model("account", accountSchema);
}