/** @type {import('next').NextConfig} */
const nextConfig = {
    module.exports = {
        webpack: (config) => {
          config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          });
      
          return config;
        },
      };
};


export default nextConfig;
