# Image Assets Folder Structure

This folder contains all the images used in the portfolio website.

## Folder Structure:

### /background/
- minecraft-background.jpg - Main background image for the website
- Add your custom background image here

### /profile/
- krish-profile.jpg - Your main profile picture
- Add additional profile photos here

### /projects/
- thermalink.jpg - ThermaLink project image
- meditank.jpg - MediTANK project image  
- first-robotics.jpg - FIRST Robotics project image
- Add more project screenshots/images here

### /icons/
- Add any custom icons or logos here

## How to Add Images:

1. **Background Image**: 
   - Add your background image to `/background/` folder
   - Update the CSS in `globals.css` line 45 to point to your image:
   \`\`\`css
   background-image: url("/images/background/your-image.jpg");
   \`\`\`

2. **Profile Picture**:
   - Add your photo to `/profile/` folder as `krish-profile.jpg`
   - Or update the image path in the components

3. **Project Images**:
   - Add project screenshots to `/projects/` folder
   - Update the image paths in the project data sections

## Supported Formats:
- JPG/JPEG (recommended for photos)
- PNG (recommended for logos/icons)
- WebP (for optimized loading)
- SVG (for vector graphics)

## Image Size Recommendations:
- Background: 1920x1080 or higher
- Profile: 400x400 pixels (square)
- Project images: 800x600 pixels
- Icons: 64x64 or 128x128 pixels
