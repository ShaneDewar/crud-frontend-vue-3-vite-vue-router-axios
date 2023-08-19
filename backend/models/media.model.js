module.exports = (mongoose) => {
  // Properties which can have more than one value have plural keys
  let schema = mongoose.Schema(
    {
      title: String,
      authors: [String],
      format: String,
      publish_date: Date,
      date_added: { type: Date, default: Date.now },
      genres: [String],
      have_used: Boolean,
      date_last_used: Date,
      keywords: [String],
      languages: [String],
      isbn: String,
      size: String,
      notes: [String],
    },
    { timestamps: true },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Media = mongoose.model("media", schema);
  return Media;
};
