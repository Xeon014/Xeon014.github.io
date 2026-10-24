# 书库

公开主站：https://www.hoven.zone/

原生 HTML、CSS、JavaScript，无构建依赖。首页仅展示书籍封面、书名和作者，整行链接至各书独立站点。

## 维护

在 index.html 的 books 列表中维护书目。默认封面始终包含书名；有图片时，在 cover 元素上添加 data-cover="图片相对路径"。图片加载失败会保留默认封面。图片只作封面，不重复朗读书名。

本地预览：python -m http.server 8790 --bind 127.0.0.1

## 发布与恢复

GitHub Pages 沿用 main 分支根目录发布。保留 CNAME 的 www.hoven.zone，不更改域名设置，子项目继续独立发布。

替换前基线：17b26ca922c51636e40de93f80522884c9aa409e。原 Hexo 示例文章和资源保留在原路径，首页不展示。恢复可对书库上线提交执行 git revert，再正常推送；不强推。
