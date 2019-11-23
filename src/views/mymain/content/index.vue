<style lang="scss" scoped>
	.content{
		min-height: 700px;
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: #eee;
		.box{
			height: 100%;
			max-width: 800px;
			margin: 0 auto;
			padding: 0;
			.block{
				background-color: white;
				height: 300px;
				width: 100%;
				padding: 0;
				margin: 0;
				.block_item{
					height: 100%;
					width: 100%;
					margin: 40px 0;
					padding: 0 10px;
				}
			}
		}
		.foot{
			height: 100px;
			.page{
				height: 35px;
				padding: 32.5px 0;
				text-align: center;
			}
		}
	}
	/*@media only screen and (min-width: 768px){*/
	/*	.box{*/
	/*		width: 700px;*/
	/*	}*/
	/*}*/
	/*@media only screen and (min-width: 992px){*/
	/*	.box{*/
	/*		width: 900px;*/
	/*	}*/
	/*}*/
	/*@media only screen and (min-width: 1200px){*/
	/*	.box{*/
	/*		width: 1100px;*/
	/*	}*/
	/*}*/
</style>

<template>
	<Row style="">
		<Col style="">
			<Row style="min-height: 700px;width: 100%;margin-top: 30px">
				<Col style="">
					<div class="content">
						<div class="box">
							<div class="block" v-for="k in 4">
								<div class="block_item">

								</div>
							</div>
						</div>
						<div class="foot">
							<div class="page">
								<Page :total="100" />
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
        name: "mymaincontent",
        components: {},
        data() {
            return {}
        },
    }
</script>

