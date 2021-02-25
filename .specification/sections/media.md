### Media
One of the largest additions, the `media` field is an array of objects which each provide data for a single 
multimedia item. This data includes a special `type` field which indicates what kind of media is being provided, as 
well as a `url` field which provides the address of the media resource.

```json
"media": [
  {
    "type": "screenshot",
    "url": "link/to/media/file"
  },
  {
    "type": "cover",
    "url": "https://somereposite.com/author/repo/raw/images/cover.png"
  },
  {
    "type": "video",
    "url": "https://somereposite.com/author/repo/raw/videos/demo.webm",
    "loop": true,
    "thumbnail": "https://somereposite.com/author/repo/raw/images/thumb.png"
  }
]
```

#### Media Types
The following type of media are defined by the Manifest+ specification:
- `"cover"` - A "cover image" which is intended to be displayed along with the package description.
- `"icon"` - A small image icon such as a logo or author avatar.
- `"screenshot"` - An image of the package in action.
- `"video"` - A video file which can be played, or the address of an embeddable video (such as Youtube or Vimeo)
    - `"loop"` - Optional Field specific to Video type media. If loop is true, the video is expected to be treated as 
      an animated image, like a GIF (i.e. muted and looped).
    - `"thumbnail"` - Optional url to provide a video thumbnail.

#### Media Recommendations
There is no guarantee how the media files will be used, but these are the recommended dimensions and known existing 
usages.

##### Cover
Avoid putting large text on the cover image, it should showcase the package rather than the name of the package.

- Width: 1280px
- Aspect Ratio: 2:1

Currently used on the [Forge's Bazaar](https://forge-vtt.com/bazaar).

##### Icon
- Width: 512px
- Aspect Ratio: 1:1

Fallback on the Bazaar if Cover is not defined.

##### Screenshot
Anything that should go into an `<img>` HTML element: `.png`, `.gif`, `.webp`. Try to keep the file size under 1MB, 
definitely no more than 10MB. Gifs in particular will probably need to be larger, but know that the larger the image 
the longer it will take to load.

##### Video
Anything that should go into an `<video>` HTML element: `.mp4`, `.webm`.

Additionally, some Manifest+ consumers may supported embedding video from common providers like YouTube and Vimeo, 
the address of the video can be provided in the `url` field. Consumers should take care to parse this field 
appropriately to avoid loading a YouTube video in a `<video>` element, or an `.mp4` in a YouTube embed.

##### Video Thumbnail
Should be a static image.

- Dimensions: 1280px by 720px
