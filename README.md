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
* 读取当前目录下所有 CSS 文件路径
    1. 增强：Sass、Less 文件读取
* 读取每个 CSS 文件内容
* PostCss 解析，找到 CSS 文件内的 selector
* 判断 selector 是否标签
    1. 增强：检查类型
    2. 增强：配置要检查内容（读取命令行参数)

## 工具
* [tiny-glob](https://github.com/terkelg/tiny-glob)
* [PostCss](https://postcss.org/)



