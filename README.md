<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>
<h3 align="center"> Initial React Challenge at the GoStack course from Rocketseat </h3>

## About the Challenge

The challenge was to make a page that was simillar to a facebook comments page, it's a simple page, without interactions or anything like the following image.

### Example page

![Page](https://user-images.githubusercontent.com/42276047/69909825-a845c180-13df-11ea-8222-e1513b5f4678.png)


**<p align="center"> More infos about the challenge can be found in <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-04/edit/master/README.md">Rocketseat repo</a> </p>**

## Requirements

<p> To execute the code you must have <a href="https://yarnpkg.com/"> yarn </a> installed in your computer </p>

## Installation

To execute the code you can simply clone the repo and execute in a terminal:
 
 ```terminal
 yarn | yarn dev
 ```
 and then accessing http://localhost:8080/ you can see the result
 **<p align="center">OR</p>**
 
 ```terminal
 yarn | yarn build
 ```
and then opening the file /public/index.html (The yarn build will make an more compact file at /public

### Final adjustments

If you want to see a better result you will have to modify the posts details at the file /src/content/PostList.js at the declared state. Example:

**BEFORE**

```js
   state = {
    posts: [
      {
        id: 1,
        author: {
          name: "",
          avatar: ""
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "",
              avatar: ""
            },
            date: "04 Jun 2019",
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "",
          avatar: ""
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "",
              avatar: ""
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
    ]
   }
 
```

**AFTER**
```js
   state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Name Here :3",
          avatar: "Image URL Here :3"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Name Here :3",
              avatar: "Image URL Here :3"
            },
            date: "04 Jun 2019",
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Name Here :3",
          avatar: "Image URL Here :3"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "Name Here :3",
              avatar: "Image URL Here :3"
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
        ]
      }
     ]
   }
```
