<style lang="scss" scoped>

</style>

<template>
	<Row style="">
		<Col style="">
			<my-header></my-header>
			<mavon-editor
				v-model="value"
				:editable="false"
				:toolbarsFlag="false"
				:subfield="false"
				:boxShadow="false"
				defaultOpen="preview"
				style="min-height: 700px"
			>
			</mavon-editor>
			<my-fooder></my-fooder>
		</Col>
	</Row>

</template>

<script>
    import MyHeader from "@/views/mymain/content/child/header/"
    import MyFooder from "@/components/myfooder/"

    export default {
        name: "MymainContent",
        components: {
            MyHeader,
            MyFooder
        },
        data() {
            return {
                value:"# app",
	            blog:{
                    blogid: -1, // 当前文章id
		            data: {}, // http请求获取的文章详细数据
	            }
            }
        },
	    created() {
            this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
		    if (this.blog.blogid > 0){
                this.$api.api_all.get_article_detail_api( // 获取用户详细信息
                    this.blog.blogid
                ).then((response)=>{
                    this.blog.data = response.data.results[0]; // 完成的后端请求数据
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                });
		    }else { // 异常查看
                this.blog.data = {}; // 返回空数据
                // this.loadding= false; // 关闭 loadding
            }

        }
    }
</script>

