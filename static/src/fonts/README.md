# Font Management

## How to add a new font
    
### First the font has to be converted into woff, woff2 and ttf format
- Go to [http://www.fontsquirrel.com/tools/webfont-generator](fontsquirrel.com)
- Click on "Upload Fonts" and choose the font you want to convert
- Set "Optimal", agree to the legal notice and click on "Download your kit"

### Integration into codebase
- Extract the downloaded archive
- Remove the suffix "-webfont" from the created font files (woff, woff2 and ttf)
- Move these three files to static/src/fonts/freight

### Adding to webfontjson-grunt-task
- Open grunt/webfontjson.js
- Take the content of the following code block and replace NAME-OF-NEW-FONT with the new font name  
```
// NAME-OF-NEW-FONT
NAME-OF-NEW-FONTWoff: {
    options: {
        filename: options.fonts.target + 'freight/NAME-OF-NEW-FONT.woff.json',
        fonts: [
            {
                'font-family': '"NAME-OF-NEW-FONT"',
                file: options.fonts.src + 'freight/NAME-OF-NEW-FONT.woff',
                format: 'woff'
            }
        ]
    }
},
NAME-OF-NEW-FONTWoff2: {
    options: {
        filename: options.fonts.target + 'freight/NAME-OF-NEW-FONT.woff2.json',
        fonts: [
            {
                'font-family': '"NAME-OF-NEW-FONT"',
                file: options.fonts.src + 'freight/NAME-OF-NEW-FONT.woff2',
                format: 'woff'
            }
        ]
    }
},
NAME-OF-NEW-FONTTtf: {
    options: {
        filename: options.fonts.target + 'freight/NAME-OF-NEW-FONT.ttf.json',
        fonts: [
            {
                'font-family': '"NAME-OF-NEW-FONT"',
                file: options.fonts.src + 'freight/NAME-OF-NEW-FONT.ttf',
                format: 'woff'
            }
        ]
    }
}
```
- Insert that code block into webfont.json after the last existing property (set a comma after that one)

### Adding to Fragment
- Open common/app/views/fragments/javaScriptFirstSteps.scala.html
- Add a style block accordingly to the following example (change font name):
```
<style class="webfont"
    data-cache-file-ttf="@Static("fonts/freight/NAME-OF-NEW-FONT.ttf.json")"
    data-cache-file-woff="@Static("fonts/freight/NAME-OF-NEW-FONT.woff.json")"
    data-cache-file-woff2="@Static("fonts/freight/NAME-OF-NEW-FONT.woff2.json")"></style>
```

### SASS
- Open static/src/stylesheets/webfonts-all.scss
- Add three variables (change font name):
```
$NAME-OF-NEW-FONT-woff2: '/static/freight/NAME-OF-NEW-FONT.woff2' !default;
$NAME-OF-NEW-FONT-woff: '/static/freight/NAME-OF-NEW-FONT.woff' !default;
$NAME-OF-NEW-FONT-ttf: '/static/freight/NAME-OF-NEW-FONT.ttf' !default;
```
- Add a new font face (change font name):
```
@font-face {
    font-family: 'NAME-OF-NEW-FONT';
    src: url($NAME-OF-NEW-FONT-woff2) format('woff2'),
    url($NAME-OF-NEW-FONT-woff) format('woff'),
    url($NAME-OF-NEW-FONT-ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
}
```
- Open static/src/stylesheets/settings/_settings.global.scss
- Add a new variable which can be used in all sass files (variable, font name and default font family must be changed):
```
$font-VARIABLE-NAME: 'NAME-OF-NEW-FONT', DEFAULT-FONT-FAMILY, sans-serif;
```
