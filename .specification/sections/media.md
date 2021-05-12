### Media
One of the largest additions, the `media` field, is an array of objects that each provide data for a single 
multimedia item. This data includes a `type` field which indicates what kind of media is being provided as 
well as an `url` field which provides the address of the media resource. An optional `caption` field is available
to describe your multimedia item. 

```json
"media": [
  {
    "type": "screenshot",
    "url": "link/to/media/file",
    "caption": "<Insert description of screenshot>"
  },
  {
    "type": "cover",
    "url": "https://somereposite.com/author/repo/raw/images/cover.png",
    "caption": "<Insert module / system name>"
  },
  {
    "type": "video",
    "url": "https://somereposite.com/author/repo/raw/videos/demo.webm",
    "loop": true,
    "thumbnail": "https://somereposite.com/author/repo/raw/images/thumb.png",
    "caption": "<Insert description of a cool feature from the video>"
  }
]
```

#### Media Types
The following type of media are defined by the Manifest+ specification:
- `cover` - A cover image which is intended to be displayed along with the package description.
- `icon` - A small image icon such as a logo or author avatar.
- `screenshot` - An image of the package in action.
- `video` - A video file which can be played, or the URL of an embeddable video (such as Youtube or Vimeo)
    - `loop` - Optional field specific to video media. If loop is set to true, the video is expected to be treated as 
      an animated image, like a GIF (i.e. muted and looped).
    - `thumbnail` - Optional URL to provide a video thumbnail.

#### Media Recommendations
There is no guarantee how the media files will be used, but these are the recommended dimensions and known existing 
usages.

#### Caption
Every media type accepts an optional caption field that can be used to describe what the media shows. It is up to the 
consumer of the Manifest+ specification to determine how it is used. The caption could be used as an alt image tag or as
an actual caption below the media type itself.

##### Cover
Avoid putting large text on the cover image as it should showcase the package rather than the name of the package.

- Width: 1280px
- Aspect Ratio: 2:1

This is currently used on the [Forge's Bazaar](https://forge-vtt.com/bazaar).

##### Icon
- Width: 512px
- Aspect Ratio: 1:1

Fallback on the Bazaar if `cover` is not defined.

##### Screenshot
Anything that should go into an `<img>` HTML element: `.png`, `.gif`, `.webp`. Try to keep the file size under 1MB, 
definitely no more than 10MB. Gifs in particular will probably need to be larger, but know that the larger the image 
the longer it will take to load.

##### Video
Anything that should go into an `<video>` HTML element: `.mp4`, `.webm`.

Additionally, some Manifest+ consumers may supported embedding video from common providers like YouTube and Vimeo. 
The address of the video can be provided in the `url` field. Consumers should take care to parse this field 
appropriately to avoid loading a YouTube video in a `<video>` element or an `.mp4` in a YouTube embed.

##### Video Thumbnail
Should be a static image.

- Dimensions: 1280px by 720px
