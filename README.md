# reposhub
## 项目介绍
这是一个开源仓库集合，您可以按类别找到所需的项目，您还可以添加自己的任何项目到类别中，以便其他人更快地发现它们。
## 贡献指南
若你想 `添加一个类别`，可前往[category.json](https://github.com/zhenghaoyang24/reposhub/blob/master/src/data/category.json)添加，类别字段说明如下：
```json
{
    "type": "type为类别名，请尽量为英文。",
    "icon":"Icon name，你可以通过iconify搜索所需icon，并将Icon name粘贴到此处。",
    "children":[ 
      {"type":"此处为子类别名1"},
      {"type":"此处为子类别名2"},
      ......
    ]
}
```
若你想 `添加一个仓库` 到某类别，请前往[repos.json](https://github.com/zhenghaoyang24/reposhub/blob/master/src/data/repos.json)，仓库字段说明如下：
```json
{
    "type": "仓库类别，若你想将仓库添加到tools中的develop，则将此处编辑为 tools/develop ，
    注意：如你此处写了一个category.json不存在的类别，将无法被渲染。",
    "author": "仓库作者",
    "reposName": "仓库名"
}
```
## 项目正在开发中
未开发的功能：搜索，仓库收藏。

