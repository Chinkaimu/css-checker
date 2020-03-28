## 使用
* 安装 [husky](https://www.npmjs.com/package/husky)，[lint-staged](https://www.npmjs.com/package/lint-staged)
* 配置
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

## 功能流程
* match all the paths of CSS
    1. to enhance：adapt to Sass、Less
* read the css file
* PostCss 解析，找到 CSS 文件内的 selector
* 判断 selector 是否标签
    1. 增强：检查类型
    2. 增强：配置要检查内容（读取命令行参数)

## Tools
* [tiny-glob](https://github.com/terkelg/tiny-glob): match the paths
* [PostCss](https://postcss.org/): transform CSS with JavaScript



