<style lang="scss" scoped>
	.top{
		height: 401px;
		/*background-color:#9caebf;*/
		/*background-image: url("https://yremp.live/wp-content/uploads/2019/08/sea-e1566225879119.jpg"); // mycatalog_background.jpg*/
		background-position: center;
		background-size: cover;
		.title{
			min-height: 130px;
			margin: 0 auto; /*水平居中*/
			position: relative; /*脱离文档流*/
			top: 50%; /*偏移*/
			transform: translateY(-50%);
			.blog_name{
				color: white;
				margin: 10px 0;
			}
			.tags{
				color: white;
			}
		}
	}
</style>

<template>
	<Row>
		<Col span="24" class="top" :style="{backgroundImage: 'url(' + require('@/assets/mycatalog_background.jpg') + ')'}">
			<Row style="height: 100%;">
				<Col span="10" offset="8" style="height: 100%;text-align: center;">
					<div class="title">
						<div class="blog_name">
							<h1>
								# {{blog.data.title}} #
							</h1>
						</div>
						<div class="tags">
							<span>
								<Icon type="md-pricetags" />
								{{this.tags_computed}}
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "headerdetail",
        components: {},
	    props:["blog_data"],
        data() {
            return {
                blog:{
                    blogid: -1, // 当前文章id
                    data: {}, // http请求获取的文章详细数据
                },
                loadding: false
            }
        },
	    computed:{
            tags_computed:function () {
                try {
                    var blog_tags = JSON.parse(this.blog.data.tag);
                    var tags = "";
                    for (var key in blog_tags) {
                        tags += blog_tags[key] + ", "
                    }
                }catch (e) {

                }
                return tags
            }
	    },
        created() {
            this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
            if (this.blog.blogid > 0){
                this.$api.api_all.get_article_detail_api( // 获取用户详细信息
                    this.blog.blogid
                ).then((response)=>{
                    this.blog.data = response.data.results[0];
	                this.$emit("blog_data",response.data.results[0]); // 将后端数据传给父组件
                    this.$emit("loadding_state",false); // 关闭loadding
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                });
            }else { // 异常查看
                this.$emit("blog_data",{}); // 将后端数据传给父组件
                this.$emit("loadding_state",false); // 关闭loadding
            }
        },
        methods:{
            home_bt:function () {
                this.$router.push("/main");
            },
            timeline_bt:function () {
                this.$router.push("/main/timeline");
            },
            about_bt:function () {
                this.$router.push("/main/about");
            },
        }
    }
</script>

