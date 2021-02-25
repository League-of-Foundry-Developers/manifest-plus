### Authors

The core Foundry VTT manifest specification has two ways of defining the package author; either through the `author` 
field which expects a simple string or the more complex `authors` field. We *highly* recommend including the `authors` 
field in your package as it provides much more flexibility.

> Currently while `authors` is a part of the standard manifest, Foundry does not actually utilize this field, and you 
> should also include the `author` field until such a time as that changes. {.is-info}

The `authors` field is an array of objects with each object providing information about one of the authors of the 
package. This could be one author or many. The standard version includes `name`, `url`, and `email` fields. Only `name` 
is required.

For Manifest+ we want to recognize that a personal website and email address are not necessarily the best or only 
ways to contact the author. To that end, we introduce `discord`, `ko-fi`, `patreon`, `reddit`, and `twitter` fields as 
well.

```json
"author": "Name of the author",
"authors": [
  {
    "name": "Name of the author",
    "url": "https://website.com/of/the/author",
    "email": "email@example.com",
    "discord": "discordID#0001",
    "ko-fi": "kofiName",    
    "patreon": "patreonName",
    "reddit": "u/RedditUsername",
    "twitter": "@TwitterHandle",
  }
]
```
Each of these additional fields follow the naming convention of the platform. For example with Twitter handles the 
`@TwitterHandle` format is used.
