# Cypress Community Video

## Video Requirements

To add your Cypress, Texas community video to the hero section:

### Supported Formats
- **MP4** (recommended): `cypress-community.mp4`
- **WebM**: `cypress-community.webm`

### Video Specifications
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9 (landscape)
- **Duration**: 10-30 seconds (recommended)
- **File Size**: Keep under 50MB for optimal performance
- **Content**: Showcase Cypress community life, landmarks, people, and activities

### How to Add
1. Place your video file in this directory
2. Name it `cypress-community.mp4` (or `.webm`)
3. The video will automatically play in the hero section

### Fallback
If no video is found, the system will fall back to the static community hero image.

### Performance Tips
- Compress video to reduce file size
- Use H.264 codec for MP4
- Consider creating multiple resolutions for different devices
- Test on various devices to ensure smooth playback

### Current Video Sources
The hero section is configured to look for:
- `/videos/cypress-community.mp4` (primary)
- `/videos/cypress-community.webm` (alternative)
- `/src/assets/community-hero.jpg` (fallback image)
