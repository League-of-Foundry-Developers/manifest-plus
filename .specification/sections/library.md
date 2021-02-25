### Library
The `library` field is a boolean that indicates whether the package is "library" intended for other packages to 
depend on and consume. This field should be `true` if your package doesn't present any user-facing features, but 
rather provides functionality for other packages to utilize and rely upon. Packages with this field set to `true` 
may be hidden from third party package lists to avoid confusing users.

```json
	"library": true,
```

When omitted the default value of this field is `false`. It is not necessary to explicitly set this value unless 
it needs to be `true`.

> The `library` key might be coming to Foundry Core in 0.8.x. 
> [Issue on Gitlab.](https://gitlab.com/foundrynet/foundryvtt/-/issues/4129) {.is-info}
