<template>
  <div class="Row">
    <img src="static/img/Blue_Insight_Header.jpg" class="img-fluid banner" style="width: 100%" alt="Responsive image">


  </div>
</template>

<script>

</script>

<style lang="scss">
$bg: #292929;
$blue: #13b6e2;
$gray: #dbdbdb;

@mixin animation-delay($time) {
	animation-delay: $time;
}

html, body {
	width: 100%;
	height: 100%;
	background-color: $bg;
	padding-top: 50px;
}

*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.strain {
	width: 155px;
	height: 1px;
	background-color: $gray;
	position: relative;
	margin: 0px auto;
	margin-top: 28px;
	margin-bottom: 28px;
	animation-name: rotate-strain;
	animation-duration: 1.7s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-play-state: running;
	
	&:before {
		content: "";
		display: block;
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: $blue;
		left: 0;
		margin-top: -9px;
		margin-left: -9px;
		animation-name: strain-size-left;
		animation-duration: 1.7s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-play-state: running;
	}
	
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: $blue;
		right: 0;
		margin-top: -9px;
		margin-right: -9px;
		animation-name: strain-size-right;
		animation-duration: 1.7s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-play-state: running;
	}
	
	@for $i from 1 through 12 {
		&:nth-child(#{$i}), &:nth-child(#{$i}):before, &:nth-child(#{$i}):after {
			@include animation-delay((.15s * $i));
		}
	}	
}

@keyframes rotate-strain {
	0% {width: 155px;}
	25% {width: 0;}	
	50% {width: 155px;}	
	75% {width: 0;}
	100% {width: 155px;}
}

@keyframes strain-size-left {
	0% {transform: scale(1) translateX(0px);}	
	25% {transform: scale(.5);}	
	50% {transform: scale(1) translateX(155px);}	
	75% {transform: scale(1.5);}	
	100% {transform: scale(1) translateX(0px);}
}

@keyframes strain-size-right {
	0% {transform: scale(1) translateX(0px);}	
	25% {transform: scale(1.5);}	
	50% {transform: scale(1) translateX(-155px);}	
	75% {transform: scale(.5);}	
	100% {transform: scale(1) translateX(0px);}
}
</style>
