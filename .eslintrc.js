module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
        jasmine: true,
        jest: true
    },
    rules: {
        // enable additional rules
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['error', { vars: 'local' }],
        'no-plusplus': 'off',

        // override default options for rules from base configurations
        'no-cond-assign': ['error', 'always'],
        eqeqeq: ['warn', 'smart'],

        // disable rules from base configurations
        "no-console": "off",
        'block-scoped-var': 'error',
        'guard-for-in': 'error',
        'no-loop-func': 'error',
        'no-self-compare': 'error',
        'no-unneeded-ternary': 'error'
    }
};
