<style lang="scss" scoped>
	.content{
		height: auto;
	}
	/*.footer{*/
	/*	height: 100px;*/
	/*	background-color: rgb(251, 251, 251);*/
	/*}*/
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
<!--			<Row>-->
<!--				<Col span="24" class="footer">-->
<!--					<Row>-->
<!--						<Col span="8" offset="8" style="text-align: center;margin-top: 25px">-->
<!--							<img style="height: 45px;width: 105px" src="@/assets/iview_logo.png" />-->
<!--						</Col>-->
<!--					</Row>-->
<!--				</Col>-->
<!--			</Row>-->
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

