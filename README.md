# Vue Student management system

## Languages

[中文版](./README.zh-CN.md) | [English Version](./README.md)

## Table of Contents

- [Vue Student management system](#vue-student-management-system)
  - [Languages](#languages)
  - [Table of Contents](#table-of-contents)
  - [Project Introduction](#project-introduction)
  - [JSON import data](#json-import-data)
  - [run the project](#run-the-project)

## Project Introduction

The student management system is a pseudo-management system developed based on VueJS, Vuex, Vue Router, and BootstrapVue. It is used for learning the use of VueJS.

## JSON import data

Put the `student.json` file in the `data/` directory, and run the project again to import the data.

Format

```json
[
    {
        "id": 1,
        "name": "Zhang San",
        "sex": "male",
        "age": 18,
        "phone": "13876671453"
    },
    {
        "id": 2,
        "name": "Ju Yan",
        "sex": "female",
        "age": 19,
        "phone": "13876671454"
    }
]
```

## run the project

```bash
git clone https://github.com/YuenSzeHong/vue-student-management.git
cd vue-student-management
npm install
npm run serve
```
