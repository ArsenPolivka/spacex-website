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
