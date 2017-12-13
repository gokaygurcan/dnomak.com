<template lang="pug">
  a.udemy-wrap.xl-br8.xl-bw2.xl-mb16.xl-co-black-500.xl-db(target="_blank" href="https://dnomak.com/udemy/")
    .udemy-content.xl-p16
      .wrap.xl-gutter-16.xl-middle
        .col.xl-3-12.sm-4-12
          .udemy-image.xl-br8
        .col.xl-6-12.sm-8-12
          .xl-lh24.xl-fs18.xl-fw600.xl-mb8 Web Geliştiricisi Olmanın Temelleri
          .xl-lh24.xl-fs14 HTML, CSS ve Flexible Grid System ile kendi web sayfalarınızı tüm mobil cihazlara uygun şekilde kodlamayı öğrenin!
        .col.xl-3-12.sm-1-1.sm-mt16
          .udemy-button.xl-db.xl-lh56.xl-h56.xl-co-black.xl-fw600.xl-br8.xl-tac.xl-fs18.xl-brl0 KAYIT OL
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
  .udemy-wrap {
    border-color: #28DFCD;
    background-color: white;
  }
  .udemy-image {
    background: url('https://dnomak.com/img/web-gelistiricisi-olmanin-temelleri.jpg');
    height: 124px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .udemy-content {
    background-color: rgba(40 223, 205, 0.1);
  }
  .udemy-button {
    background: #28DFCD;
  }
</style>
