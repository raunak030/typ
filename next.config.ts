import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  distDir: process.env.BUILD_DIR || '.next',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  allowedDevOrigins: [
    'ais-dev-q4lerbaan5xqoqgaov7u5z-375134262374.asia-southeast1.run.app',
    'ais-pre-q4lerbaan5xqoqgaov7u5z-375134262374.asia-southeast1.run.app'
  ],
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
