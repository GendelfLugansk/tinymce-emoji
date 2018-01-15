import EmojiFile from './emoji';
import twemoji from '../node_modules/twemoji/2/twemoji.amd';
import domify from '../node_modules/domify';
import objectPath from '../node_modules/object-path';

const plugin = (editor) => {
  let add_space = true;
  if ("emoji_add_space" in editor.settings) {
    add_space = editor.settings.emoji_add_space;
  }

  let show_groups = true;
  if ("emoji_show_groups" in editor.settings) {
    show_groups = editor.settings.emoji_show_groups;
  }

  let show_subgroups = true;
  if ("emoji_show_subgroups" in editor.settings) {
    show_subgroups = editor.settings.emoji_show_subgroups;
  }

  let show_tab_icons = true;
  if ("emoji_show_tab_icons" in editor.settings) {
    show_tab_icons = editor.settings.emoji_show_tab_icons;
  }

  let dialog_width;
  if ("emoji_dialog_width" in editor.settings) {
    dialog_width = editor.settings.emoji_dialog_width;
  }

  let dialog_height;
  if ("emoji_dialog_height" in editor.settings) {
    dialog_height = editor.settings.emoji_dialog_height;
  }

  let show_twemoji = false;
  if ("emoji_show_twemoji" in editor.settings) {
    show_twemoji = editor.settings.emoji_show_twemoji;
  }

  let twemoji_size = 36;
  if ("emoji_twemoji_size" in editor.settings) {
    twemoji_size = editor.settings.emoji_twemoji_size;
  }

  let twemoji_preview_size = 72;
  if ("emoji_twemoji_preview_size" in editor.settings) {
    twemoji_preview_size = editor.settings.emoji_twemoji_preview_size;
  }

  let twemoji_attrs = {};
  if ("emoji_twemoji_attrs" in editor.settings) {
    twemoji_attrs = editor.settings.emoji_twemoji_attrs;
  }

  let twemoji_base;
  if ("emoji_twemoji_base" in editor.settings) {
    twemoji_base = editor.settings.emoji_twemoji_base;
  }

  let twemoji_ext;
  if ("emoji_twemoji_ext" in editor.settings) {
    twemoji_ext = editor.settings.emoji_twemoji_ext;
  }

  let twemoji_class_name = 'emoji';
  if ("emoji_twemoji_class_name" in editor.settings) {
    twemoji_class_name = editor.settings.emoji_twemoji_class_name;
  }

  let twemoji_folder = '72x72';
  if ("emoji_twemoji_folder" in editor.settings) {
    twemoji_folder = editor.settings.emoji_twemoji_folder;
  }

  let preview_label = 'Preview';
  if ("emoji_twemoji_preview_label" in editor.settings) {
    preview_label = editor.settings.emoji_twemoji_preview_label;
  }

  const appendStyle = (orig, appendix) => {
    let newStyleStr = orig;

    if (typeof newStyleStr !== 'string') {
      newStyleStr = '';
    } else if (newStyleStr !== '' && newStyleStr.search(/;(\s*)?$/gi) === -1) {
      newStyleStr += '; ';
    }
    newStyleStr += appendix;

    return newStyleStr;
  };

  const twemoji_params = {
    attributes() {
      let attrs = JSON.parse(JSON.stringify(twemoji_attrs));
      attrs.style = appendStyle(attrs.style, `width: ${twemoji_size}px; height: ${twemoji_size}px;`);
      return attrs;
    },
    base: twemoji_base,
    ext: twemoji_ext,
    className: twemoji_class_name,
    folder: twemoji_folder
  };

  const twemoji_params_preview = JSON.parse(JSON.stringify(twemoji_params));
  twemoji_params_preview.attributes = () => {
    let attrs = JSON.parse(JSON.stringify(twemoji_attrs));
    attrs.style = appendStyle(attrs.style, `width: ${twemoji_preview_size}px; height: ${twemoji_preview_size}px; vertical-align: middle;`);

    return attrs;
  };

  function getItems() {
    const onclick = function (e) {
      const target = e.target;
      let span;
      if (/^(SPAN)$/.test(target.nodeName)) {
        span = target;
      } else if (/^(IMG)$/.test(target.nodeName) && target.classList && target.classList.contains(twemoji_class_name)) {
        span = target.closest('span');
      }
      if (span) {
        if (span.hasAttribute('data-chr')) {
          let char = span.getAttribute('data-chr');
          editor.execCommand('mceInsertContent', false, char + (add_space ? ' ' : ''));
        }
      }
    };

    const onmouseover = function (e) {
      if (!show_twemoji) {
        return;
      }

      const target = e.target;
      if (/^(SPAN)$/.test(target.nodeName) && target.hasAttribute('data-chr')) {
        const body = target.closest('.mce-window-body');
        if (body) {
          const previewZone = body.querySelector('.tinymce-emoji-preview');
          if (previewZone) {
            const img = domify(twemoji.parse(target.getAttribute('data-chr'), twemoji_params_preview));
            const oldImg = previewZone.querySelector('img');
            if (oldImg) {
              previewZone.replaceChild(img, oldImg);
            } else {
              previewZone.appendChild(img);
            }
          }
        }
      }
    };

    const items = [];

    if (show_twemoji) {
      let style = "";
      const firefox = navigator.userAgent.search("Firefox") > -1;
      const chrome = navigator.userAgent.search("Chrome") > -1;
      if ( firefox || chrome) {
        //Firefox and Chrome work with sticky
        style += 'position: sticky;';
      } else {
        style += 'top: auto; position: fixed;';
      }
      const previewPanel = new tinymce.ui.FloatPanel({
        type: 'floatPanel',
        title: 'Preview',
        html: `<div class="tinymce-emoji-preview" style="text-align: center; padding: 10px; height: 
${twemoji_preview_size}px; line-height: ${twemoji_preview_size}px; position: relative;">
<div style="position: absolute; top: 10px; right: 10px; font-weight: bold; font-size: 0.8em;">${preview_label}</div>
${twemoji.parse(objectPath.get(EmojiFile, '0.subGroups.0.emojis.0.emoji', ''), twemoji_params_preview)}</div>`,
        style: style
      });
      previewPanel.on('postrender', (e) => {
        if (e.target && e.target.$el && e.target.$el[0]) {
          if (! (firefox || chrome)) {
            /**
             * As I have no f🤬ing idea at what moment tinymce changes top to 0px, I'll use timer
             */
            let el = e.target.$el[0];
            const updater = () => {
              if (el && el.style && el.parentNode) {
                el.style.top = "auto";
                setTimeout(updater, 100);
              } else {
                el = null;
              }
            };
            updater();
          }
        }
      });
      items.push(previewPanel);
    }

    const tabItems = [];
    let containerHTML = '';
    for (let group of EmojiFile) {
      let groupHTML = '';

      for (let subgroup of group.subGroups) {
        if (show_subgroups) {
          groupHTML += `<div style="clear:both"><strong style="font-weight: bold;">${subgroup.name.split('-').join(' ')
            .replace(/\b\w/g, l => l.toUpperCase())}</strong></div>`;
        }

        groupHTML += '<div>';
        for (let emoji of subgroup.emojis) {
          groupHTML += `<span style="float:left; padding: 4px; font-size: 1.5em; cursor: pointer;" data-chr="${emoji
            .emoji}">${emoji.emoji}</span>`;
        }
        groupHTML += '</div>';
      }

      if (show_groups) {
        tabItems.push({
          type: 'container',
          title: show_tab_icons ? objectPath.get(group, 'subGroups.0.emojis.0.emoji', '') + ' ' + group.name : group.name,
          html: `<div style="padding: 10px;">${groupHTML}</div>`
        });
      } else {
        containerHTML += groupHTML
      }
    }

    if (show_groups) {
      items.push({
        type: 'tabPanel',
        items: tabItems,
        onclick,
        onmouseover
      });
    } else {
      items.push({
        type: 'container',
        html: `<div style="padding: 10px;">${containerHTML}</div>`,
        onclick,
        onmouseover
      });
    }

    return items;
  }

  const default_dialog_width = show_tab_icons ? 1000 : 850;

  function showDialog() {
    const win = editor.windowManager.open({
      autoScroll: true,
      width: dialog_width ? dialog_width : default_dialog_width,
      height: dialog_height ? dialog_height : 600,
      title: 'Insert Emoji',
      layout: 'flex',
      direction: 'column',
      align: 'stretch',
      items: getItems(),
      buttons: [{
        text: 'Close',
        onclick: () => {
          win.close();
        }
      }]
    });
  }

  editor.addCommand('emojiShowDialog', showDialog);

  editor.addButton('tinymceEmoji', {
    text: '😀',
    icon: false,
    cmd: 'emojiShowDialog'
  });

  editor.addMenuItem('tinymceEmoji', {
    text: 'Emoji',
    icon: 'emoticons',
    context: 'insert',
    cmd: 'emojiShowDialog'
  });

  editor.on('beforeSetContent', function (e) {
    if (e.content && show_twemoji) {
      e.content = twemoji.parse(domify(`<div>${e.content}</div>`), twemoji_params).innerHTML;
    }
  });

  editor.on('postProcess', function (e) {
    if (e.set && e.content && show_twemoji) {
      e.content = twemoji.parse(domify(`<div>${e.content}</div>`), twemoji_params).innerHTML;
    }

    if (e.get && e.content && show_twemoji) {
      const el = domify(`<div>${e.content}</div>`);
      el.querySelectorAll('img').forEach(img => {
        if (img.classList && img.classList.contains(twemoji_class_name) && img.hasAttribute('alt')) {
          img.parentNode.replaceChild(document.createTextNode(img.getAttribute('alt')), img);
        }
      });
      e.content = el.innerHTML;
    }
  });
};

export default plugin;
