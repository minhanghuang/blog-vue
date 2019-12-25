<style lang="scss" scoped>
	.block{
		margin-top: 100px;
		margin-bottom: 100px;
	}
	.title{
		font-size: 14px;
		font-weight: bold;
	}
	.content{
		padding-left: 5px;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;background-color: white">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="width: 100%;min-height: 700px;background-color: white" type="flex" justify="center" align="middle">
				<Col span="8">
					<div class="block" style="text-align: center">
						<img :src="cloudword">
					</div>
				</Col>
				<Col span="8" offset="1" >
					<div class="block">
						<Timeline>
							<TimelineItem :color="bottom.left.value[index].color" v-for="(item, index) in bottom.left.value" :key="item.id">
								<Icon :type="bottom.left.value[index].icon" slot="dot"></Icon>
								<p class="title">{{bottom.left.value[index].node_name}}</p>
								<p class="content" v-for="(item_inner, index_inner) in bottom.left.value[index].content">
									{{bottom.left.value[index].content[index_inner].col}}
								</p>
							</TimelineItem>
						</Timeline>
					</div>
				</Col>
			</Row>
			<Spin size="large" fix v-if="loadding"></Spin>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mytimeline",
        components: {},
        data() {
            return {
                cloudword:"",
                loadding: true,
                bottom:{
                    left:{
                        openpanellist: ["0"], // 打开的面板
                        value:[
                            {
                                id: "0", // id只能是字符串
                                color:"blue",
                                icon:"md-ionic",
                                count_inner: 0, // content列表的长度
                                content:[
                                    {id_inner: "0", col:"内容0"},
                                ],
                                node_name: "节点",
                            },
                        ]
                    }
                },
            }
        },
        created(){
            this.$api.api_all.get_data_detail_api( // 发http请求, 获取用户data
            ).then((response)=>{ // 获取用户data
                this.bottom.left.value = JSON.parse(response.data.results[0].timeline); // 更新用户资料, 更新后的数据, 同步到data中
	            this.cloudword = response.data.results[0].cloudword;
	            this.loadding = false;
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
                this.loadding = false;
            });
        },
        methods:{

        }
    }
</script>

