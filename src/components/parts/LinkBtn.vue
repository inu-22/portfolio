<template>
<div class="btn btn06">
	<a href="https://chan-mieruko.web.app/">{{app_name}}の公開ページへ</a>
</div>
</template>
<script>
export default {
    props: [app_name]
}
</script>

<style>
.btn06 a::after {
	content: '';
	position: absolute;
	top: 50%;
	right: 20px;
	transform: rotate(45deg) translateY(-50%);
	width: 6px;
	height: 6px;
	border-width: 2px 2px 0 0;
	border-style: solid;
	border-color: #333;
}

.btn06 a:hover {
	background-color: #B99b00;
	border: 1px solid #333;
}

.btn06 a:hover::after {
	border-color: #f2f2f2 #f2f2f2 transparent transparent;
}
</style>