module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a7baf73f1cd267e853ba56fa0de43faa'),
  },
});
