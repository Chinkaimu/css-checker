## Usage
* install [husky](https://www.npmjs.com/package/husky)，[lint-staged](https://www.npmjs.com/package/lint-staged)
* set
  ```
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "*.{}": [
        "css-checker"
      ]
    }
  ```

## function flow
* match all the paths of CSS
    1. to enhance：adapt to Sass、Less
* read the css file
* PostCss: transfer to AST
* check the css
    1. to enhance: check the type
    2. to enhance: provide the setting of input

## to improve
* output with color, [chalk](https://www.npmjs.com/package/chalk)

## Tools
* [tiny-glob](https://github.com/terkelg/tiny-glob): match the paths
* [PostCss](https://postcss.org/): transform CSS with JavaScript



