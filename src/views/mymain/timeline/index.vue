<style lang="scss" scoped>
	.block{
		margin-top: 100px;
		margin-bottom: 100px;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;background-color: white">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="width: 100%;min-height: 700px;background-color: white" type="flex" justify="center" align="middle">
				<Col span="8">
					<div class="block" style="text-align: center">
						<img src="../../../assets/cloudword.png">
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
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mytimeline",
        components: {},
        data() {
            return {
                loadding: true,
                limit:{
                    node:{
                        count: 20, // 数据
                        value: 100, // 上限
                        disabled: true, // 锁定/解锁
                    },
                    inner:{
                        count: 5,
                        value: 30,
                        disabled: true,
                    }
                },
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
            let username = JSON.parse(localStorage.getItem('username')); // 获取用户名
            this.$api.api_all.get_data_detail_api( // 发http请求, 获取用户data
            ).then((response)=>{ // 获取用户data
                var value_timeline = JSON.parse(response.data.results[0].timeline);
                console.log("value_timeline:",value_timeline)
                this.bottom.left.value = value_timeline; // 更新用户资料, 更新后的数据, 同步到data中
                this.bottom.right.count = value_timeline.length;
                this.loadding = false;
                this.$Message.success(response.data.msg);
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
                this.loadding = false;
            });
        },
        methods:{
            change_collapse:function (key) { // 切换面板时触发，返回当前已展开的面板的 key，格式为数组
                this.bottom.left.openpanellist = key;
            },
            add_bt:function () { // 添加节点触发
                let data_length = this.bottom.left.value.length;
                if (data_length >= this.limit.node.count){
                    this.$Message.error('禁止添加节点,已达上限');
                } else {
                    if (this.bottom.left.value[data_length-1].node_name === ""){
                        this.$Message.error('上一个节点为空,禁止添加');
                    }
                    else {
                        this.bottom.right.count ++; // 自增, 字符串自增会变成int类型
                        this.bottom.left.value.push({ // 将节点加到列表中
                            id: this.bottom.right.count + "", // 需要将id转成字符串
                            color:"blue",
                            icon:"md-ionic",
                            count_inner: 0,
                            content:[
                                {id_inner: "0", col:"内容0"},
                            ],
                            node_name: "节点"+this.bottom.right.count,
                        },);
                    }
                }
            },
            del_panel_bt:function (index) { // 删除节点触发
                let data = this.bottom.left.value;
                if (data.length === 1){ // 当只有一个节点时, 禁止删除
                    this.$Message.error('禁止删除');
                }
                else {
                    this.bottom.left.value.splice(data.findIndex(e => e.id == index), 1);
                }
            },
            add_inner_bt:function (id) { // 添加内容
                this.bottom.left.value.filter((item)=>{
                    if (item.id == id) { // 在整个数据中找到外层的数据
                        let content_length = item.content.length;
                        if (content_length >= this.limit.inner.count){
                            this.$Message.error('禁止添加内容,已达上限');
                        } else {
                            if (item.content[content_length-1].col === ""){
                                this.$Message.error('上一个内容为空,禁止添加');
                            }
                            else {
                                item.count_inner ++; // 内层id自增
                                item.content.push( // 添加内层数据
                                    {id_inner: item.count_inner+"", col:"内容"+item.count_inner}
                                )
                            }
                        }
                    }
                })
            },
            del_content_bt:function (id, id_inner) { // 删除内容
                this.bottom.left.value.filter((item)=>{
                    if (item.id == id) { // 在整个数据中找到外层的数据
                        if (item.content.length === 1){ // 当内层只有一个数据时,禁止删除
                            this.$Message.error('禁止删除');
                        }
                        else { // 内层数据删除对应的id_inner
                            item.content.splice(item.content.findIndex(e => e.id_inner == id_inner), 1);
                        }
                    }else {
                        // this.$Message.error('该内容不存在');
                    }
                })
            },
            update_timeline_bt:function () {
                this.loadding= true;
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_timeline_update_api( // 更新用户时光轴
                    username, this.bottom.left.value
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    let value_timeline = JSON.parse(response.data.results.timeline);
                    this.bottom.left.value = value_timeline; // 更新用户资料, 更新后的数据, 同步到data中
                    this.bottom.right.count = value_timeline.length;
                    this.loadding= false;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false;
                });
            },
            reset_timeline_bt:function () {
                this.loadding= true;
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_timeline_reset_api( // 重置用户时光轴
                    username
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    let value_timeline = JSON.parse(response.data.results.timeline);
                    this.bottom.left.value = value_timeline; // 重置用户时光轴
                    this.bottom.right.count = value_timeline.length;
                    this.loadding= false;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false;
                });
            },
            sort_bt:function () {
                this.loadding = true;
                let username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.get_data_detail_api( // 发http请求, 获取用户data
                    username,this.bottom.right.sort
                ).then((response)=>{ // 获取用户data
                    var value_timeline = JSON.parse(response.data.results[0].timeline);
                    this.bottom.left.value = value_timeline; // 更新用户资料, 更新后的数据, 同步到data中
                    this.bottom.right.count = value_timeline.length;
                    this.loadding = false;
                    this.$Message.success(response.data.msg);
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding = false;
                });
            }
        }
    }
</script>

