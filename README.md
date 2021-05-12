### Why?

The Manifest+ specification is an unofficial community developed extension to the official Foundry VTT manifest
specification for module and system development intended to add additional data which can be used by packages within
Foundry VTT and by external applications.

### What?

Provides a repository for the League of Extraordinary Foundry Developers Manifest+ specification.

The current specification version is [v1.2.0](./ManifestPlus.md)


----
### Maintain

The specification is split into sections found in `./specification` and compiled with `gitdown` to `./ManifestPlus.md`.

Archives of past specification versions are located in `./archive`.

When creating a new version of Manifest+ please follow these steps:
1. Move the existing ManifestPlus.md file to a versioned directory in `./archive`.
2. Modify the appropriate sections in `./specification`.
3. Build the new specification with the install directions below.
4. Add notes about the modification to the [CHANGELOG](CHANGELOG.md).
5. Make a Github release with the specification version number and notes about changes.

#### Install
To create the specification:
- npm install
- npm run create-specification 
