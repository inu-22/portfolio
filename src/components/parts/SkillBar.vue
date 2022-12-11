<template>
  <div class="skillbar_box">
    <!-- 画像を動的に表示するにはrequire関数を使うか絶対パスで指定しなければならない。とりあえず現段階では難しいのでv-ifを用いて画像を表示することにする。 -->
    <img src="../../assets/vue_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Vue.js') === 0">
    <img src="../../assets/htmlcss_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('HTML/CSS') === 0">
    <img src="../../assets/c_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('C') === 0">
    <img src="../../assets/kotlin_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Kotlin') === 0">
    <img src="../../assets/go_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Go') === 0">
    <img src="../../assets/docker_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Docker') === 0">
    <img src="../../assets/python_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Python') === 0">
    <img src="../../assets/php_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('PHP') === 0">
    <img src="../../assets/java_icon.png" class="image lan" v-if="skill_bar.sklname.indexOf('Java') === 0">
    <img src="../../assets/sql_icon.jpg" class="image lan" v-if="skill_bar.sklname.indexOf('SQL') === 0">
    
    <!-- 偽リッドレイアウトで左右に分割する。左に画像、右に情報を配置する -->
    <div class="name_bar_box">
        <div class="skill_name">{{skill_bar.sklname}}</div>
        <progress :value="skill_bar.score" class="bar"></progress>
    </div>
  </div>
</template>

<script>
export default {
    props: [ "skill_bar" ],
};
</script>

<style>
.skillbar_box {
  width: 100%; height: 4rem;
  display: grid;
  grid-template-columns: 4rem 1fr;
  margin: 0 0 2.5rem 0;
}
.image.lan {
    grid-column: 1/2;
    width: 100%;
    aspect-ratio: 1/1;
  border-radius: 33%;


}

.skill_name {
  grid-column: 2/3;
  margin: 0.5rem 16% 0 7%;
  font-size: 1.5rem;
}
.bar {
  grid-column: 2/3;

  width: 77%; height: 1.5rem;
  margin: 0 16% 0.5rem 7%;

}
progress {
    -webkit-appearance: none;
  border-radius: 40px;

}
::-webkit-progress-bar {
    background-color: rgba(255, 255, 255, 0.75);
  border-radius: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.257);

}
::-webkit-progress-value {
  background-color: rgba(255, 0, 76, 0.555);
  border-radius: 40px;

}
</style>