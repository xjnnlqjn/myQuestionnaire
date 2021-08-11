<template>
	<header id="vheader">
		<h2>问卷调查</h2>
		<router-link tag="h3" to="/">问卷列表</router-link>
    <h4 id="help">帮助中心</h4>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}

</script>

<style>
@import '../style/public.scss';
	#vheader {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 6rem;
		background-color:#fff;
		color: #0062CC;
    box-shadow:5px 5px 10px gray;
	}

	#vheader h2 {
		margin: 0 5rem 0 6rem;
		font-size: 1.8rem;
	}

  #vheader h2:before {
    width: 40px;
    height: 40px;
    font-family: iconfont;
    content: "\e622   ";
    color:#0062CC;
  }

	#vheader h3 {
    margin: 0 5rem 0 90rem;
		font-size: 1.2rem;
		cursor: pointer;
	}

  #vheader h3:before {
    width: 40px;
    height: 40px;
    font-family: iconfont;
    content: "\e619   ";
    color:#0062CC;
  }

  #help {
    font-size: 1.2rem;
  	line-height: 2rem;
  }

  #help:before {
    	display: inline-block;
    	width: 1.5rem;
    	height: 1.5rem;
    	line-height: 1.5rem;
    	margin-right: .5rem;
    	content: "?";
    	color: #fff;
    	text-align: center;
    	background-color: gray;
    	border-radius: 50%;
  }


</style>
