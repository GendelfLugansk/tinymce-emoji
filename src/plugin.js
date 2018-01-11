import EmojiFile from './emoji';
import twemoji from '../node_modules/twemoji/2/twemoji.amd';
import domify from '../node_modules/domify';

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

  let twemoji_button_size = 16;
  if ("emoji_twemoji_button_size" in editor.settings) {
    twemoji_button_size = editor.settings.emoji_twemoji_button_size;
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

  const twemoji_params_button = JSON.parse(JSON.stringify(twemoji_params));
  twemoji_params_button.attributes = () => {
    let attrs = JSON.parse(JSON.stringify(twemoji_attrs));
    attrs.style = appendStyle(attrs.style, `width: ${twemoji_button_size}px; height: ${twemoji_button_size}px;`);

    return attrs;
  };

  const getBody = new Promise((resolve, reject) => {
    try {
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
      let body = [];
      let groupHtml = show_groups ? '' : '<div style="padding: 10px;">';
      for (let group of EmojiFile) {
        groupHtml = show_groups ? '<div style="padding: 10px;">' : groupHtml;
        let tabIcon = '';
        for (let subgroup of group.subGroups) {
          groupHtml += show_subgroups ? '<p style="clear:both"><strong style="font-weight: bold;">' +
            subgroup.name.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase()) + '</strong><br/>' : '';
          for (let emoji of subgroup.emojis) {
            if (tabIcon === '') {
              tabIcon = emoji.emoji;
            }
            groupHtml += '<span style="float:left; padding: 4px; font-size: 1.5em; cursor: pointer;" data-chr="' +
              emoji.emoji + '">' + (show_twemoji ? twemoji.parse(emoji.emoji, twemoji_params) : emoji.emoji) +
              '</span>';
          }
          groupHtml += '</p>';
        }
        groupHtml += show_groups ? '</div>' : '';
        if (show_groups) {
          body.push({
            type: 'container',
            title: (show_tab_icons ? tabIcon + ' ' : '') + group.name,
            html: groupHtml,
            onclick
          });
        }
      }
      if (!show_groups) {
        groupHtml += '</div>';
        body.push({
          type: 'container',
          html: groupHtml,
          onclick
        });
      }
      resolve(body);
    } catch (error) {
      reject(error);
    }

  });

  const default_dialog_width = show_tab_icons ? 1000 : 800;

  function showDialog() {
    getBody.then(body => {
      const win = editor.windowManager.open({
        autoScroll: true,
        width: dialog_width ? dialog_width : default_dialog_width,
        height: dialog_height ? dialog_height : 600,
        title: 'Insert Emoji',
        bodyType: show_groups ? 'tabPanel' : 'container',
        layout: 'fit',
        body,
        buttons: [{
          text: 'Close',
          onclick: () => {
            win.close();
          }
        }]
      });
    }).catch(error => {
      /*eslint-disable no-console*/
      console.log(error);
      /*eslint-enable no-console*/
    });
  }

  editor.addCommand('emojiShowDialog', showDialog);

  editor.addButton('tinymceEmoji', {
    text: '😀',
    icon: false,
    cmd: 'emojiShowDialog',
    onpostrender: function (e) {
      if (show_twemoji && e.target && e.target.$el && e.target.$el[0]) {
        twemoji.parse(e.target.$el[0], twemoji_params_button);
      }
    }
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
