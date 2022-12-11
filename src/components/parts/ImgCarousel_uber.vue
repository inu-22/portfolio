<template>
<div class="slider">
  
    <div class="slides">
        <div id="slide-1">
      <img src="../../assets/slide/uber/uber-1.png" class="image">
    </div>
    <div id="slide-2">
      <img src="../../assets/slide/uber/uber-2.png" class="image">
    </div>
    <div id="slide-3">
      <img src="../../assets/slide/uber/uber-3.png" class="image">
    </div>
    <div id="slide-4">
      <img src="../../assets/slide/uber/uber-4.png" class="image">
    </div>
    <div id="slide-5">
      <img src="../../assets/slide/uber/uber-5.png" class="image">
    </div>
  </div>

  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  <a href="#slide-4">4</a>
  <a href="#slide-5">5</a>
  
</div>
</template>
<script>
</script>
<style>
* {
  box-sizing: border-box;
}
 
.slider {
  width: 100%;
  text-align: center;
  overflow: hidden;
}
 
.slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: rgba(255, 68, 140, 0.695);
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  /* width: 300px; */
  width: 100%;
  /* height: 300px; */
  aspect-ratio: 16/9;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
}

.slider > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
}
.slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: rgba(251, 75, 116, 0.747);
}
</style>