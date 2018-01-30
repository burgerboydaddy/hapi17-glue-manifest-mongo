module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "indent": ["error", 2],
        // "quotes": ["error","single"],
        // "max-len": 0,
        // "new-cap": 0,

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // https://eslint.org/docs/rules/linebreak-style
        "linebreak-style": ["error","unix"],
                
        // require or disallow use of semicolons instead of ASI
        "semi": ["error","always"],
        "camelcase": 0,
        
        "consistent-return": 0,
        "constructor-super": "warn",
        "func-names": 0,
        "global-require": 0,

        "no-bitwise": ["error", { "allow": ["~", ">>>"] }],
	    "no-console": ["error", { "allow": ["info", "warn", "error"] }],
        "no-const-assign": "warn",
        'no-extend-native': 0,
        "import/no-extraneous-dependencies": 0,
        "no-lonely-if": 0,
        "no-loop-func": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-prototype-builtins": 0,
        "no-restricted-syntax": 0,
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-underscore-dangle": ["error", { "allow": ["foo_", "_id", "_req_user", "_helpers", "_settings", "_endpoint", "_data", "_failureCount", "_privileges", "_sendMessages", "_tags", "_resolveFilename", "_object", "__v", "__t" ] }],
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "no-useless-escape": 0,
        "no-var": "error",
        "prefer-rest-params": 0,
        "prefer-template": "error",
        "radix": ["error", "as-needed"],
        "strict": 0,
        "valid-typeof": "warn",

        // air-bnb style rules
        // enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        // TODO: enable? semver-major
        'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

        // enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        // TODO: enable? semver-major
        'array-element-newline': ['off', { multiline: true, minItems: 3 }],

        // enforce spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],

        // enforce spacing inside single-line blocks
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': ['error', 'always'],

        // enforce one true brace style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': ['off', 'never', {
        line: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
        },
        block: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
        },
        }],

        // require trailing commas in multiline object literals
        'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        }],

        // enforce spacing before and after comma
        'comma-spacing': ['error', { before: false, after: true }],

        // enforce one true comma style
        'comma-style': ['error', 'last'],

        // disallow padding inside computed properties
        'computed-property-spacing': ['error', 'never'],

        // enforces consistent naming when capturing the current execution context
        'consistent-this': 'off',

        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': ['error', 'always'],

        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // requires function names to match the name of the variable or property to which they are
        // assigned
        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': ['off', 'always', {
        includeCommonJSModuleExports: false
        }],

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        // TODO: enable
        'func-style': ['off', 'expression'],

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        // 'function-paren-newline': ['error', 'multiline'],

        // Blacklist certain identifiers to prevent them being used
        // https://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 'off',

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        'id-length': 'off',

        // require identifiers to match the provided regular expression
        'id-match': 'off',

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['error', 'beside'],

        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
            parameters: 1,
            body: 1
        },
        FunctionExpression: {
            parameters: 1,
            body: 1
        },
        CallExpression: {
            arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement *']
        }],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // require a space before & after certain keywords
        'keyword-spacing': ['error', {
        before: true,
        after: true,
        overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true }
        }
        }],

        // enforce position of line comments
        // https://eslint.org/docs/rules/line-comment-position
        // TODO: enable?
        'line-comment-position': ['off', {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
        }],

        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

        // enforces empty lines around comments
        'lines-around-comment': 'off',

        // require or disallow newlines around directives
        // https://eslint.org/docs/rules/lines-around-directive
        'lines-around-directive': ['error', {
        before: 'always',
        after: 'always',
        }],

        // specify the maximum depth that blocks can be nested
        'max-depth': ['off', 4],

        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': ['error', 450, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': ['off', {
        max: 300,
        skipBlankLines: true,
        skipComments: true
        }],

        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': 'off',

        // limits the number of parameters that can be used in the function declaration.
        'max-params': ['off', 3],

        // specify the maximum number of statement allowed in a function
        'max-statements': ['off', 10],

        // restrict the number of statements per line
        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': ['off', { max: 1 }],

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['off', 'starred-block'],

        // require multiline ternary
        // https://eslint.org/docs/rules/multiline-ternary
        // TODO: enable?
        'multiline-ternary': ['off', 'never'],

        // require a capital letter for constructors
        'new-cap': ['error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.org/docs/rules/new-parens
        'new-parens': 'error',

        // allow/disallow an empty newline after var statement
        'newline-after-var': 'off',

        // https://eslint.org/docs/rules/newline-before-return
        'newline-before-return': 'off',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // disallow use of the Array constructor
        'no-array-constructor': 'error',

        // disallow use of the continue statement
        // https://eslint.org/docs/rules/no-continue
        'no-continue': 'error',

        // disallow comments inline after code
        'no-inline-comments': 'off',

        // disallow un-paren'd mixes of different operators
        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': ['error', {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['**', '+'],
            ['**', '-'],
            ['**', '*'],
            ['**', '/'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof']
        ],
        allowSamePrecedence: false
        }],

        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'error',

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        // 'no-multi-assign': ['error'],

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'off',

        // disallow nested ternary expressions
        'no-nested-ternary': 'error',

        // disallow use of the Object constructor
        'no-new-object': 'error',

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        // 'no-restricted-syntax': [
        // 'error',
        // {
        //     selector: 'ForInStatement',
        //     message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        // },
        // {
        //     selector: 'ForOfStatement',
        //     message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        // },
        // {
        //     selector: 'LabeledStatement',
        //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        // },
        // {
        //     selector: 'WithStatement',
        //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        // },
        // ],

        // disallow space between function identifier and application
        'no-spaced-func': 'error',

        // disallow tab characters entirely
        'no-tabs': 'error',

        // disallow the use of ternary operators
        'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false,
        }],

        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // enforce the location of single-line statements
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        // require padding inside curly braces
        'object-curly-spacing': ['error', 'always'],

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': ['error', {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
        }],

        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': ['error', {
        allowMultiplePropertiesPerLine: true,
        }],

        // allow just one var statement per function
        'one-var': ['error', 'never'],

        // require a newline around variable declaration
        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': ['error', 'always'],

        // require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['error', 'always'],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'before'],

        // disallow padding within blocks
        'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

        // Require or disallow padding lines between statements
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': 'off',

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // specify whether double or single quotes should be used
        quotes: ['error', 'single', { avoidEscape: true }],

        // do not require jsdoc
        // https://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': 'off',

        // enforce spacing before and after semicolons
        'semi-spacing': ['error', { before: false, after: true }],

        // Enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': ['error', 'last'],

        // requires object keys to be sorted
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        // sort variables within the same declaration block
        'sort-vars': 'off',

        // require or disallow space before blocks
        'space-before-blocks': 'error',

        // require or disallow space before function opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
        }],

        // require or disallow spaces inside parentheses
        'space-in-parens': ['error', 'never'],

        // require spaces around operators
        'space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['error', 'always', {
        line: {
            exceptions: ['-', '+'],
            markers: ['=', '!'], // space here to support sprockets directives
        },
        block: {
            exceptions: ['-', '+'],
            markers: ['=', '!'], // space here to support sprockets directives
            balanced: true,
        }
        }],

        // Enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['error', { after: true, before: false }],

        // Require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['error', 'never'],

        // require regex literals to be wrapped in parentheses
        'wrap-regex': 'off',
        // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
        requireReturnForObjectLiteral: false,
      }],
  
      // require parens in arrow function arguments
      // https://eslint.org/docs/rules/arrow-parens
      'arrow-parens': ['error', 'as-needed', {
        requireForBlockBody: true,
      }],
  
      // require space before/after arrow function's arrow
      // https://eslint.org/docs/rules/arrow-spacing
      'arrow-spacing': ['error', { before: true, after: true }],
  
      // verify super() callings in constructors
      'constructor-super': 'error',
  
      // enforce the spacing around the * in generator functions
      // https://eslint.org/docs/rules/generator-star-spacing
      'generator-star-spacing': ['error', { before: false, after: true }],
  
      // disallow modifying variables of class declarations
      // https://eslint.org/docs/rules/no-class-assign
      'no-class-assign': 'error',
  
      // disallow arrow functions where they could be confused with comparisons
      // https://eslint.org/docs/rules/no-confusing-arrow
      'no-confusing-arrow': ['error', {
        allowParens: true,
      }],
  
      // disallow modifying variables that are declared using const
      'no-const-assign': 'error',
  
      // disallow duplicate class members
      // https://eslint.org/docs/rules/no-dupe-class-members
      'no-dupe-class-members': 'error',
  
      // disallow importing from the same path more than once
      // https://eslint.org/docs/rules/no-duplicate-imports
      // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
      'no-duplicate-imports': 'off',
  
      // disallow symbol constructor
      // https://eslint.org/docs/rules/no-new-symbol
      'no-new-symbol': 'error',
  
      // disallow specific imports
      // https://eslint.org/docs/rules/no-restricted-imports
      'no-restricted-imports': ['off', {
        paths: [],
        patterns: []
      }],
  
      // disallow to use this/super before super() calling in constructors.
      // https://eslint.org/docs/rules/no-this-before-super
      'no-this-before-super': 'error',
  
      // disallow useless computed property keys
      // https://eslint.org/docs/rules/no-useless-computed-key
      'no-useless-computed-key': 'error',
  
      // disallow unnecessary constructor
      // https://eslint.org/docs/rules/no-useless-constructor
      'no-useless-constructor': 'error',
  
      // disallow renaming import, export, and destructured assignments to the same name
      // https://eslint.org/docs/rules/no-useless-rename
      'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      }],
  
      // require let or const instead of var
      'no-var': 'error',
  
      // require method and property shorthand syntax for object literals
      // https://eslint.org/docs/rules/object-shorthand
      'object-shorthand': ['error', 'always', {
        ignoreConstructors: false,
        avoidQuotes: true,
      }],
  
      // suggest using arrow functions as callbacks
      'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      }],
  
      // suggest using of const declaration for variables that are never modified after declared
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }],
  
      // Prefer destructuring from arrays and objects
      // https://eslint.org/docs/rules/prefer-destructuring
      'prefer-destructuring': ['error', {
        VariableDeclarator: {
          array: false,
          object: false,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      }, {
        enforceForRenamedProperties: false,
      }],
  
      // disallow parseInt() in favor of binary, octal, and hexadecimal literals
      // https://eslint.org/docs/rules/prefer-numeric-literals
      'prefer-numeric-literals': 'error',
  
      // suggest using Reflect methods where applicable
      // https://eslint.org/docs/rules/prefer-reflect
      'prefer-reflect': 'off',
  
      // use rest parameters instead of arguments
      // https://eslint.org/docs/rules/prefer-rest-params
      'prefer-rest-params': 'error',
  
      // suggest using the spread operator instead of .apply()
      // https://eslint.org/docs/rules/prefer-spread
      'prefer-spread': 'error',
  
      // suggest using template literals instead of string concatenation
      // https://eslint.org/docs/rules/prefer-template
      'prefer-template': 'error',
  
      // disallow generator functions that do not have yield
      // https://eslint.org/docs/rules/require-yield
      'require-yield': 'error',
  
      // enforce spacing between object rest-spread
      // https://eslint.org/docs/rules/rest-spread-spacing
      'rest-spread-spacing': ['error', 'never'],
  
      // import sorting
      // https://eslint.org/docs/rules/sort-imports
      'sort-imports': ['off', {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      }],
  
      // require a Symbol description
      // https://eslint.org/docs/rules/symbol-description
      'symbol-description': 'error',
  
      // enforce usage of spacing in template strings
      // https://eslint.org/docs/rules/template-curly-spacing
      'template-curly-spacing': 'error',
  
      // enforce spacing around the * in yield* expressions
      // https://eslint.org/docs/rules/yield-star-spacing
      'yield-star-spacing': ['error', 'after'],
      

      // enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
    exceptMethods: [],
    }],

    // specify curly brace conventions for all control statements
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
    allow: [
        'arrowFunctions',
        'functions',
        'methods',
    ]
    }],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    // 'no-extend-native': 'error',

    // disallow unnecessary function binding
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],
    // deprecated in favor of no-global-assign
    'no-native-reassign': 'off',

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
    boolean: false,
    number: true,
    string: true,
    allow: [],
    }],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // 'no-loop-func': 'error',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': ['error', {
    ignoreEOLComments: false,
    }],

    // disallow use of multiline strings
    'no-multi-str': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // disallow use of new operator for Function object
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    // 'no-param-reassign': ['error', {
    // props: true,
    // ignorePropertyModificationsFor: [
    //     'acc', // for reduce accumulators
    //     'e', // for e.returnvalue
    //     'ctx', // for Koa routing
    //     'req', // for Express requests
    //     'request', // for Express requests
    //     'res', // for Express responses
    //     'response', // for Express responses
    //     '$scope', // for Angular 1 scopes
    // ]
    // }],

    // disallow usage of __proto__ property
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
    object: 'arguments',
    property: 'callee',
    message: 'arguments.callee is deprecated',
    }, {
    object: 'global',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
    }, {
    object: 'self',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
    }, {
    object: 'window',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
    }, {
    object: 'global',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
    }, {
    object: 'self',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
    }, {
    object: 'window',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
    }, {
    property: '__defineGetter__',
    message: 'Please use Object.defineProperty instead.',
    }, {
    property: '__defineSetter__',
    message: 'Please use Object.defineProperty instead.',
    }, {
    object: 'Math',
    property: 'pow',
    message: 'Use the exponentiation operator (**) instead.',
    }],

    // disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // disallow redundant `return await`
    'no-return-await': 'error',

    // disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false,
    }],

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    yoda: 'error',

    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    }
};