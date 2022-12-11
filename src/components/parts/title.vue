<template>
  <div class="title_box">
    <div class="title line"></div>
    <div class="title number">{{number}}</div>
    <div class="title str">{{name}}<span style="font-size:1rem; padding:-20rem 0 0 0">- {{sub}} -</span></div>
  </div>
</template>

<script>
export default {
  props:["name", "number", "sub"],
}
</script>

<style>
.title_box {
  height: 3rem;

  font-size: 3rem;
  line-height: 3rem;
  font-weight: bold;
  white-space: nowrap; /* 改行しないようにする */

  display: grid;
  grid-template-columns:  2em 2.5em 1fr;
  /* font-family: "UD Digi Kyokasho NK-R"; */

}
.title.line {
  grid-column: 1 / 2;
  margin: 1.2rem 1rem 0 0;
  border-top: 2px solid rgba(0, 0, 0, 0.801);
}
.title.number {
  color: rgba(0, 0, 0, 0.801);
  grid-column: 2 / 3;

}

/* strってなんだよ！ */
.title.str {
  grid-column: 3 / 4;
  color: rgba(255, 0, 76, 0.801);
}
</style>