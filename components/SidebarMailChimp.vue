<template lang="pug">
  form.wrap.xl-mb16(:action='`//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&id=${$t("mailchimp.id")}`', method='post', name='mc-embedded-subscribe-form', target='_blank')
    .col.xl-7-12
      input(type='email', name='email', :placeholder='$t("mailchimp.emailAddress")', class='xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-pl16 pl-co-gray-300 xl-fs16')
      div(style='position: absolute; left: -5000px;')
        input(type='text', :name='$t("mailchimp.name")', tabindex='-1')
    .col.xl-5-12
      input(type='submit', name='subscribe', :value='$t("mailchimp.subscribe")', class='xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-fs18 xl-brl0')
</template>
