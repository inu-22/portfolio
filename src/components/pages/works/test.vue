<template>
<p>テストページ</p>
<div id="app">
    <LinkPrevue url="https://lipscosme.com/products/462526" class="preview" cardWidth="400px"></LinkPrevue>
</div>
<!-- 表示できないし。そもそも私が作ったサイトはうまくプレビュー表示されなさそう。多分view moreボタンだけが表示される。→サイトのスクリーンショット載せようかな -->
</template>

<script>
import LinkPrevue from "link-prevue";
export default {
    el: "#app",
    components: { LinkPrevue }
}
</script>