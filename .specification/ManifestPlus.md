The Manifest+ specification is an unofficial community developed extension to the official Foundry VTT manifest 
specification for module and system development intended to add additional data which can be used by packages within 
Foundry VTT and by external applications.

This specification is developed by The League of Extraordinary Foundry Developers. The core Foundry VTT software 
simply ignores these additional manifest fields. A number of external applications including 
[The Bazaar](https://forge-vtt.com/bazaar) package browser on The Forge and 
[Foundry Hub](https://www.foundryvtt-hub.com/packages/) use this extended data to give the general public a rich 
experience by adding cover images, icons, enhanced contact details, and more.

## Package Manifest Standard Fields
The Foundry VTT manifest contains a number of required and optional fields which act as metadata for your package. The 
official fields are documented in the core documentation for modules and systems respectively:

- [Introduction to Module Development](https://foundryvtt.com/article/module-development/)
- [Introduction to System Development](https://foundryvtt.com/article/system-development/)

Manifest+ does not replace the standard manifest, but enhances it. Most of the fields added do not touch any of 
the core attributes at all except the `authors` field.

{"gitdown": "include", "file": "./sections/authors.md"}

## Manifest+

All Manifest+ fields are *optional*, but they are all useful. We recommend including as many of these fields as 
reasonable in order to provide enriched metadata for your package.

{"gitdown": "include", "file": "./sections/version.md"}

{"gitdown": "include", "file": "./sections/media.md"}

{"gitdown": "include", "file": "./sections/library.md"}

{"gitdown": "include", "file": "./sections/includes.md"}

{"gitdown": "include", "file": "./sections/deprecated.md"}

{"gitdown": "include", "file": "./sections/conflicts.md"}
