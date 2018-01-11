# tinymce-emoji
[![Latest Stable Version](https://img.shields.io/npm/v/tinymce-emoji.svg?style=flat)](https://www.npmjs.com/package/tinymce-emoji)
[![NPM Downloads](https://img.shields.io/npm/dt/tinymce-emoji.svg?style=flat)](https://www.npmjs.com/package/tinymce-emoji)

This simple tinymce plugin adds a helper dialog to insert native emojis in to your content.

All emoji were stripped from [this test doc](http://unicode.org/Public/emoji/5.0/emoji-test.txt) made available by [The Unicode Consortium](http://unicode.org/)

[**Example on JSFiddle**](https://jsfiddle.net/wpd2umt0/1/)

## Usage
Install via npm:
```
npm install --save tinymce-emoji
```

Add to your tinymce init:
```JavaScript
import 'tinymce-emoji'
import 'tinymce'    // always import tinymce after any plugins

tinymce.init({
    plugins: [
        'tinymceEmoji'
    ],
    toolbar: 'tinymceEmoji'
})
```

Alternatively, you can install this plugin via `script` tags:
```HTML
<script src="path/to/tinymce-emoji/dist/plugin.min.js"></script>
<script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
<script>
    tinymce.init({
        plugins: [
            'tinymceEmoji'
        ],
        toolbar: 'tinymceEmoji'
    })
</script>
```

You can also configure a few options for tinymce-emoji by adding them to your tinymce init, like so:
```JavaScript
tinymce.init({
    plugins: [
        'tinymceEmoji'
    ],
    toolbar: 'tinymceEmoji',
    emoji_add_space: false, // emoji are quite wide, so a space is added automatically after each by default; this disables that extra space
    emoji_show_groups: false,   // hides the tabs and dsiplays all emojis on one page
    emoji_show_subgroups: false,    // hides the subheadings
    emoji_show_tab_icons: false, // hides the icon on each tab label
    emoji_dialog_width: 1000, //dialog width, by default 1000 if emoji_show_tab_icons is true, 800 otherwise
    emoji_dialog_height: 500, //600 by default,
    ...
})
```
*NOTE: by default, all options above are set to `true`*

### Twemoji

You can configure plugin to display [twemoji](https://github.com/twitter/twemoji) instead of default
browser's emojis. Note that default emojis will be shown **only** in editor and dialog. 
Native utf-8 emojis will be inserted into resulting code and displayed on your website. If you want 
to display twemojis on your website, you need to do integration of your website with twemoji. 
These options just to help you to make editor consistent with your website (with integrated twemoji).

```JavaScript
tinymce.init({
    plugins: [
        'tinymceEmoji'
    ],
    toolbar: 'tinymceEmoji',
    emoji_show_twemoji: true, //Show twemoji in dialog and editor
    emoji_twemoji_size: 72, //size of twemojis in dialog and editor, 36 by default
    emoji_twemoji_button_size: 24, //16 by default, size of plugin button's icon,
    emoji_twemoji_attrs: {}, //custom attributes for twemoji images. You can't set src, alt, className, draggable
    emoji_twemoji_base: undefined, //base url for twemoji images, by default twitter's cdn, look into twemoji's repo for details
    emoji_twemoji_ext: '.svg', //.png by default, would not work without correct folder (72x72 for png or svg for svg)
    emoji_twemoji_folder: 'svg', //72x72 by default
    emoji_twemoji_class_name: 'twemoji', //img's class name, emoji by default
    ...
})
```

### A note about speed
Unfortunately, the first time you load the emoji dialog during each editor session, it takes a few seconds to display, during which time the browser window is frozen. I have been unable to resolve this issue and the [world's worst docs](https://www.tinymce.com/docs/api/tinymce.ui) didn't help. If you're a developer who knows how to resolve this, please do make a PR!
