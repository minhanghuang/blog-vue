<style lang="scss" scoped>
	.content{
		min-height: 400px;
		background-color: #c0bfba;
		margin: 0 auto; /*水平居中*/
		position: relative; /*脱离文档流*/
		top: 50%; /*偏移*/
		transform: translateY(-50%);
		.content-box{
			width: 100%;
			height: 100%;
			padding: 5px;
			background-color: #c678dd;
			.log{
				img{
					height: 120px;
					border-radius:60px;
				}
			}
			.title{
				font-family:Raleway, "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
				margin: 8px 0;
			}
		}
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;">
			<Row style="height: 100%;">
				<Col span="8" offset="8" style="height: 100%;text-align: center">
					<div class="content">
						<div class="content-box">
							<div class="log">
								<img src="../../../../src/assets/logo.png">
							</div>
							<div class="title">
								<h1>
									@{HOME: MINHANG};
								</h1>
							</div>

						</div>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mycontent",
        components: {},
        data() {
            return {

            }
        },
    }
</script>

