### Deprecated
This field is intended to be added to the manifest of a package that is no longer being maintained and / or is no 
longer functional / useful. This may be because the author created a new better alternative, or the features are 
integrated into the Foundry VTT core software, or an associated system assumes the same functionality. Perhaps you as 
the author have abandoned the package and no longer intend to keep it up to date.

The `deprecated` field is an object which contains a number of fields explaining the nature of the deprecation status.

#### Fields
- `"coreVersion"` - If set the package is assumed to be a module that has been deprecated by a Foundry VTT core update. 
  This field is the core version number as a string.
- `"reason"` - A human-readable string explaining why the package was deprecated.
- `"alternatives"` - An array of objects each providing data about another package which could act as a replacement for 
  deprecated package.
    - `alternatives.name` - The `name` of the alternative package.
    - `alternatives.manifest` - The URL of the `manifest.json` file for the alternative package, from which it can be 
      downloaded.

```json
"deprecated": {
  "coreVersion": "0.7.0",
  "reason": "This was added to foundry core.",
  "alternatives": [
    {
      "name": "module-name",
      "manifest": "https://link.com/to/manifest.json"
    }
  ]
}
```
