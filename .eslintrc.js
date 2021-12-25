module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"arrow-body-style": "off",
		"react/function-component-definition": "off",
		"no-dupe-keys": "off",
		"react/prop-types": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
};
