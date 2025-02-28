// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   configureWebpack: {
//     devServer: {
//     host: '0.0.0.0', // Important for Docker
//     port: 8081, // Should match your Docker port mapping
//     hot: true, // Make sure hot reloading is enabled
//     watch: true,
//     watchOptions: {
//       ignored: /node_modules/,
//       poll: true,
//     },
//     // ... other devServer options
//     proxy: {  // Configure proxy for API requests
//       '^/api': { // Adjust /api to match your API path
//         target: process.env.VUE_APP_API_URL || 'http://localhost:3001', // Use environment variable or default
//         changeOrigin: true,
//       },
//     },
//   },
  
//   },
  
//   transpileDependencies: true,
// })
// module.exports = {
//   publicPath: '/',
//   devServer: {
//     host: '0.0.0.0', // Important for Docker
//     port: 8081, // Should match your Docker port mapping
//     hot: true, // Make sure hot reloading is enabled
//     watch: true,
//     watchOptions: {
//         ignored: /node_modules/,
//         poll: 1000,
//     },
//     // ... other devServer options
//     proxy: {  // Configure proxy for API requests
//       '^/api': { // Adjust /api to match your API path
//         target: process.env.VUE_APP_API_URL || 'http://localhost:3001', // Use environment variable or default
//         changeOrigin: true,
//       },
//     },
//   },
//   transpileDependencies: true,
// };


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
      entry: "./src/main.js",
      devServer: {
        hot: true
      },
      watch: true,
      watchOptions: {
          ignored: /node_modules/,
          poll: 1000,
      },
  },
  transpileDependencies: true,
});