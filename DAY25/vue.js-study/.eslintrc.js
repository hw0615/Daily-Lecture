// ESLint 규칙:
// http://eslint.org/docs/rules/
// https://goo.gl/2P8squ
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "globals": {

    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": 0,
        "no-unused-vars": 0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};