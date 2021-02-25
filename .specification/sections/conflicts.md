### Conflicts
The `conflicts` field is similar to the `dependencies` field in the core Foundry VTT manifest specification, but 
provides a mapping of packages which can not interoperate with the given package. It is an array of objects which define 
one or more packages that may pose conflicts. Each conflict object has a `name` field which matches the name of the 
other package, and a `type` which is the type of the other package. Additionally, the optional `versionMin` and 
`versionMax` fields can be used to define a range of version numbers for the other package within which the 
conflict occurs.

```json
"conflicts": [
  {
    "name": "module-name",
    "type": "module",
    "versionMin": "a.b.c",
    "versionMax": "a.c.d"
  }
]
```
