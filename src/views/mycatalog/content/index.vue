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
				/*background-color: white;*/
				height: 300px;
				width: 100%;
				padding: 0;
				margin: 0;
				border-radius:10px;
				box-shadow:0 0 20px #c0bfba;
				.block_item{
					height: 100%;
					width: 100%;
					margin: 40px 0;
					padding: 0;
					display: flex;
					flex-direction: row;
					.img_article{
						/*display: inline-block;*/
						border-bottom-left-radius: 10px;
						border-top-left-radius: 10px;
						width: 55%;
						height: 100%;
						background-color: #9caebf;
						img{
							height: 100%;
							width: 100%;
							border-bottom-left-radius: 10px;
							border-top-left-radius: 10px;
						}
					}
					.centent_article{
						display: block;
						box-sizing: border-box;
						width: 40%;
						height: 100%;
						.con_centent_article{
							height: 270px;
							width: 100%;
							margin: 20px 10px 10px 0;
							padding-left: 30px;
							.box_centent_article{
								/*background-color: #61aeee;*/
								height: 100%;
								width: 100%;
								padding: 0;
								margin: 0;
								overflow:hidden;
								.title{
									height: auto;
									margin-bottom: 10px;
									padding: 0;
									h3{
										font-weight: bold;
										font-size: 17.55px;
										color: #504E4E;
									}
								}
								.box_centent_article_time{
									height: 20px;
									margin: 10px 0;
									text-align: right;
									/*background-color: #98c379;*/
								}
								.box_centent_article_centent{
									max-height: 180px;
									/*background-color: #56b6c2;*/
									/*margin: 15px 0 22.5px 0 ;*/
								}
								.box_centent_article_tags{
									margin-top: 10px;
									text-align: right;
								}
							}
						}
					}
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
							<div class="block" v-for="item in blog.response_data.results">
								<div class="block_item">
									<div class="img_article">
										<img :src=item.image>
									</div>
									<div class="centent_article">
										<div class="con_centent_article">
											<div class="box_centent_article">
												<div class="title" style="height: auto;margin-bottom: 10px;">
													<div style="height: auto;margin-bottom: 10px">
														<h3>
															{{item.title}}
														</h3>
													</div>
												</div>
												<div class="box_centent_article_time">
													<div class="box_centent_article_time">
														<Icon type="ios-time-outline" />
														<Time :time="item.createdate" :interval="1" />
													</div>
												</div>
												<div class="box_centent_article_centent">
													<p>
														{{item.subtitle}}
													</p>
												</div>
												<div class="box_centent_article_tags">
													<div>
														<Icon type="ios-bookmark-outline" size="16"/>
														Ubuntu, Linux, Mac, Docker
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="foot">
							<div class="page">
								<Page
									:total="page_total"
									:page-size="page_size"
									@on-change="on_change_page"
									show-total
								></Page>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Spin size="large" fix v-if="loadding"></Spin>
		</Col>
	</Row>
</template>

<script>

    function get_article_list(self, params) {
        // 获取文章列表
        self.$api.api_all.get_article_list_api(
            params
        ).then((response)=>{
            self.blog.response_data = response.data; // 完成的后端请求数据
            self.page_prop.total = response.data.count; // 总页数
            self.page_prop.size = response.data.size; // 单页条数
            self.$emit("get_list",response.data); // 将后端返回的数据全部传给父组件
	        console.log("response.data:",response.data)
        }).catch((error)=>{
            self.$Message.error(error.response.data.msg);
        });
    }

    export default {
        name: "mycatalogcontent",
        components: {

        },
        data() {
            return {
                blog:{
                    response_data:{ // 后端返回的整个文章列表的数据
                        count: 0, // 默认数量给0, 因为在模板中有使用这个数据, 给个默认值
                        createdate: new Date(),
                    }
                },
	            loadding: true, // 记载中,标记
                page_prop:{
                    total : 0, // 总页数
                    size : 0, // 单页条数
                }
            }
        },
	    watch:{
            blog:{
                handler(newval, oldVal){
					this.loadding = false; // 文章列表加载成功, 取消加载中
                },
                deep:true, // 深度监听
            }
	    },
	    computed:{
            page_total: function () { // 分页总页数
                return this.page_prop.total
            },
            page_size: function () { // 单页条数
                return this.page_prop.size
            },
	    },
        created(){
            get_article_list(this); // 获取文章列表 api
        },
	    methods:{
            on_change_page:function (callback_page) { // 点击页码, 回调参数
                get_article_list(this, {"page":callback_page}); // 获取文章列表 api
            },
	    }
    }
</script>

