# Vue学生管理系统

## 语言

[中文版](./README.zh-CN.md) | [English Version](./README.md)

## 目录

- [Vue学生管理系统](#vue学生管理系统)
  - [语言](#语言)
  - [目录](#目录)
  - [项目介绍](#项目介绍)
  - [项目运行](#项目运行)
  - [JSON 导入数据](#json-导入数据)

## 项目介绍

学生管理系统是一个基于VueJS，Vuex，Vue Router，BootstrapVue开发的伪管理系统，主要用于学习VueJS的使用。

## 项目运行

```bash

git clone https://github.com/YuenSzeHong/vue-student-management.git
cd vue-student-management
npm install
npm run serve
```

## JSON 导入数据

把`student.json`文件放到`data/`目录下，再次运行项目，即可导入数据。

格式

```json
[
    {
        "id": 1,
        "name": "张三",
        "sex": "男",
        "age": 18,
        "phone": "13876671453"
    },
    {
        "id": 2,
        "name": "鞠燕",
        "sex": "女",
        "age": 19,
        "phone": "13876671454"
    }
]
```
