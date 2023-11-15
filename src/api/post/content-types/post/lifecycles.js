module.exports = {
  beforeCreate(event) {
    event.params.data.publish_date =
      event.params.data?.publish_date || new Date();
  },
};
