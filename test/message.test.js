'use strict'

const test = require('ava').test
const sm = require('../index')

const text = 'this is my message'

test('slackmessage() with just text', t => {
  var msg = sm(text).json()

  t.is(msg.text, text)
})

test('slackmessage() with an object w/ just text', t => {
  var msg = sm({ text }).json()

  t.is(msg.text, text)
})

test('slackmessage() with a full message object', t => {
  var msg = sm(message).json()
  t.deepEqual(msg, message)
})

test('slackmessage() with chained setters', t => {
  var msg = sm()
    .text(message.text)
    .responseType(message.response_type)
    .replaceOriginal(message.replace_original)
    .deleteOriginal(message.delete_original)
    .token(message.token)
    .channel(message.channel)
    .parse(message.parse)
    .linkNames(message.link_names)
    .unfurlLinks(message.unfurl_links)
    .unfurlMedia(message.unfurl_media)
    .asUser(message.as_user)
    .iconUrl(message.icon_url)
    .attachments(message.attachments)
    .json()

  t.deepEqual(msg, message)
})

test('slackmessage() with chained setters and chained attachment', t => {
  var msg = sm()
    .text(message.text)
    .responseType(message.response_type)
    .replaceOriginal(message.replace_original)
    .deleteOriginal(message.delete_original)
    .token(message.token)
    .channel(message.channel)
    .parse(message.parse)
    .linkNames(message.link_names)
    .unfurlLinks(message.unfurl_links)
    .unfurlMedia(message.unfurl_media)
    .asUser(message.as_user)
    .iconUrl(message.icon_url)
    .attachment()
      .text(message.attachments[0].text)
      .title(message.attachments[0].title)
      .titleLink(message.attachments[0].title_link)
      .fallback(message.attachments[0].fallback)
      .callbackId(message.attachments[0].callback_id)
      .color(message.attachments[0].color)
      .pretext(message.attachments[0].pretext)
      .authorName(message.attachments[0].author_name)
      .authorLink(message.attachments[0].author_link)
      .authorIcon(message.attachments[0].author_icon)
      .imageUrl(message.attachments[0].image_url)
      .thumbUrl(message.attachments[0].thumb_url)
      .footer(message.attachments[0].footer)
      .footerIcon(message.attachments[0].footer_icon)
      .ts(message.attachments[0].ts)
      .action()
        .name(message.attachments[0].actions[0].name)
        .text(message.attachments[0].actions[0].text)
        .value(message.attachments[0].actions[0].value)
        .type(message.attachments[0].actions[0].type)
        .confirm()
          .title(message.attachments[0].actions[0].confirm.title)
          .text(message.attachments[0].actions[0].confirm.text)
          .okText(message.attachments[0].actions[0].confirm.ok_text)
          .dismissText(message.attachments[0].actions[0].confirm.dismiss_text)
          .end()
        .end()
      .action()
        .name(message.attachments[0].actions[1].name)
        .text(message.attachments[0].actions[1].text)
        .type(message.attachments[0].actions[1].type)
        .end()
      .field()
        .title(message.attachments[0].fields[0].title)
        .value(message.attachments[0].fields[0].value)
        .short(message.attachments[0].fields[0].short)
        .end()
      .end()
    .json()

  t.deepEqual(msg, message)
})

// compose pieces of message, and re-use them, i.e. buttons, attachments, etc.

const message = {
  text: 'message text',
  response_type: 'ephemeral',
  replace_original: false,
  delete_original: false,
  token: 'XIUUS9009',
  channel: 'C1188HKK',
  parse: true,
  link_names: true,
  unfurl_links: false,
  unfurl_media: false,
  as_user: false,
  icon_url: 'https://beepboophq.com/icon',
  attachments: [
    {
      text: 'attachment text',
      title: 'attachment title',
      title_link: 'https://beepboophq.com',
      fallback: 'attachment fallback',
      callback_id: 'attachment callback_id',
      color: '#D9488F',
      pretext: 'attachment pretext',
      author_name: 'attachment author_name',
      author_link: 'https://beepboophq.com/author',
      author_icon: 'https://beepboophq.com/author_icon',
      image_url: 'https://beepboophq.com/image',
      thumb_url: 'https://beepboophq.com/thumb',
      footer: 'attachment footer',
      footer_icon: 'https://beepboophq.com/footer_icon',
      ts: Date.now(),
      actions: [
        {
          name: 'button1 name',
          text: 'button1 text',
          value: 'button1 value',
          type: 'button',
          confirm: {
            title: 'confirm title',
            text: 'confirm text',
            ok_text: 'confirm ok text',
            dismiss_text: 'confirm dismiss text'
          }
        },
        {
          name: 'button2 name',
          text: 'button2 text',
          type: 'button'
        }
      ],
      fields: [{
        title: 'field title',
        value: 12889893,
        short: true
      }]
    }
  ]
}
