<script setup>
</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=DotGothic16" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kaisei+Decol" rel="stylesheet">
  
  <div id="header" style="font-family: 'DotGothic16'">
      <router-link to="/" class="hd"><div style="text-align: start;">←</div></router-link>
      <router-link to="/" class="hd">HOME</router-link>
      <router-link to="/about" class="hd">PROFILE</router-link>
      <router-link to="/es" class="hd">kida-ES </router-link>
  </div>
  <div class="haikei">
    <img src="../src/assets/shiba_bg.png" class="haikei_img" alt="横たわるしばいぬのイラスト"/>
  </div>
  <router-view></router-view>
</template>
