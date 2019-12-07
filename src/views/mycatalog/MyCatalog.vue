<style lang="scss" scoped>
	.content{
		height: auto;
	}
</style>

<template>
	<Row style="height: 100%;">
		<Col span="24" style="height: 100%;">
			<Row>
				<Col span="24" class="content">
					<mymain-content
						@get_list="update_list"
					></mymain-content>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
	import MymainContent from "@/views/mycatalog/content/"

    export default {
        name: "MyMain",
        components: {
            MymainContent,
        },
        data() {
            return {
                blog:{
                    response_data:{}
                }
            }
        },
	    methods:{
            update_list:function (response_data) {
                this.blog.response_data = response_data.results; // 后端接口博文列表
            }
	    }
    }
</script>

