const withGraphQL = require('next-plugin-graphql');

module.exports = withGraphQL({
	webpack(config) {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader',
		});

		return config;
	},
});

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader'],
		});

		return config;
	},
	suppressHydrationWarning: true,
};

module.exports = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 8192, // or any other limit you prefer
					fallback: 'file-loader',
					publicPath: '/_next/static/fonts', // adjust the path according to your project
					outputPath: `${isServer ? '../' : ''}static/fonts`,
					name: '[name]-[hash].[ext]',
					esModule: false,
				},
			},
		});

		return config;
	},
};

