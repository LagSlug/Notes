- Most games have a series of clips that display the name of development companies which own or produced the title.

### Solutions

- ~~Removing the underlying asset~~.
	  Pro: easy.
	  Con: can cause the application to crash.

- Replace the underlying asset.
	  Pro: works.
	  Con: takes work.

### Replacement Options

- A one second clip of blackness.

### Formats

- Some of the many possible file formats that an application might use for video clips.

#### MOV - .mov
- The `.mov` format is portable and standardized, however it's not optimized.

##### Generate the Clip
- The `ffmpeg` tool can generate a large assortment of audio/video files.
- Use this `ffmpeg` command generate a 1 second clip in the `.mov` format:
```bash
ffmpeg -f lavfi \
	-i color=c=black:s=3840x2160:r=25/1 \
	-f lavfi \
	-i anullsrc=cl=mono:r=48000 \
	-c:v h264 \
	-c:a pcm_s16be \
	-t 1 one-second-black.mov
```

##### Download
- https://mega.nz/file/vNYU0IpT#6WKzEqy---eWrykLx8YiJgM278rjZTwE_ojjik1maMQ

#### RAD Video - .bik / .bk2
- Video formats: `.bik` and `.bk2` can be encoded using the `RAD Video Tools` application.
- The `.bik` format is proprietary, but is available for use without a software license.
- The `.bk2` file format requires a non-free license.
- Changing the extension of a `.bik` file to `.bk2` is sufficient if a license is not available.

##### Generate the Clip
- To generate this clip, a `.mov` file generated in the above section will serve as the source material.
- The `RAD Video Tools` application (Windows) can be downloaded from here:

| Website         | [RAD Game Tools - Downloads](http://www.radgametools.com/bnkdown.htm)                                   | Password |
|-----------------|---------------------------------------------------------------------------|----------|
| Direct Download | [RADTools.7z](http://www.radgametools.com/down/Bink/RADTools.7z)                         | RAD      |
| Mirror Download | [radtools.rar](https://mega.nz/file/KY5yxLhJ#TeMMcgHpUnxaTuorL0Oem1owhtu1vi-EOAUe9iE7iVw) | (none)   |


- Open the `RAD Video Tools` application
- Select the source material, `one-second-black.mov`.
- Click `Bink It!` to open encoding options.

![[Gaming/attachments/RAD Video Tools - Select Clip.png]]

- `Output file info` gives the name of the output file.
- `Browse` will show in which directory the output file will be saved.
- `Bink` begins the encoding process, click it if everything looks fine.
- `Bink 1` is the `.bik` file format, which is the only format available without a license.
  
![[Gaming/attachments/RAD Video Tools - Encode BIK Format.png]]

- Success will look like this:
  
  ![[Gaming/attachments/RAD Video Tools - BIK Encoded Successfully.png]]

- Renaming the file to `one-second-black.bk2` will be sufficient if the `.bk2` format is required by an application.

##### Download
- [one-second-black.bik](https://mega.nz/file/rV5FRaba#fIMlBaMkqtN4gnjOfK9clAUP3DTFqqDsJCvOFA3BIHg)
- [one-second-black.bk2](https://mega.nz/file/WUYykSxY#fIMlBaMkqtN4gnjOfK9clAUP3DTFqqDsJCvOFA3BIHg) (`one-second-black.bik` renamed)
