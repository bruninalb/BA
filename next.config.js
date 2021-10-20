module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicio',
        permanent: true,
      },
    ]
  },

  images: {
    domains: ['api.solution4apps.com']
  }
}
