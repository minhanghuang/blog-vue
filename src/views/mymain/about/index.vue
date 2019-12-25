<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;margin-bottom: 100px">
		<Col span="8" offset="8" style="height: auto;margin-top: 50px">
			<Row>
				<Col span="20" offset="2">
					<Row style="padding: 15px;height: auto;background-color: #f5f7f9;border-radius: 40px" >
						<Col span="24" style="height: auto">
							<Row style="padding: 25px;height: auto" >
								<Col span="24" style="height: auto">
									<Row style="padding: 15px;height: auto;background-color: #f5f7f9;" >
										<Col span="24" style="height: auto">
											<Row style="padding: 25px;height: auto" >
												<Col span="24" style="height: auto">
													<div style="margin: 8px 0;text-align: center">
														<div style="margin: 0 auto;width: auto;height: auto">
															<img :src="value.avatar" style="height: 100px;width: 100px;border-radius:50px">
														</div>
													</div>
													<div style="text-align: center;margin: 10px 0">
														<p style="color: rgba(0, 0, 0, 0.85);font-size: 20px;font-weight:500; ">{{value.name}}</p>
													</div>
													<div style="text-align: center;width:auto;margin: 0 auto">
														<p>{{value.description}}</p>
													</div>
													<div style="text-align: center;width:auto;height: auto; margin-top: 20px">
														<Row style="margin: 5px 0" >
															<Col span="2">
																<Icon type="ios-mail-outline" size="20" style="" ></Icon>
															</Col>
															<Col span="10">
																<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.email}}</div>
															</Col>
														</Row>
														<Row style="margin: 5px 0" >
															<Col span="2">
																<Icon type="ios-chatbubbles-outline" size="20"></Icon>
															</Col>
															<Col span="10">
																<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.wechat}}</div>
															</Col>
														</Row>
														<Row style="margin: 5px 0">
															<Col span="2">
																<Icon type="ios-briefcase-outline" size="20" style="" ></Icon>
															</Col>
															<Col span="21" style="float: left">
																<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.company}} · {{value.department}} · {{value.position}}</div>
															</Col>
														</Row>
														<Row style="margin: 5px 0">
															<Col span="2">
																<Icon type="ios-pin-outline" size="20" style="" ></Icon>
															</Col>
															<Col span="4">
																<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;width: 200px;text-align: left">{{value.city}}</div>
															</Col>
														</Row>
													</div>
													<Divider dashed />
													<div style="margin: 9px 0 ">
														<p>标签</p>
													</div>
													<div style="display: inline-block;padding:2px 2px 1px 2px ;height: auto;width: auto">
														<child-tag
																ref="tag"
																:tag_data="value.tag"
																:count="30"
																:disable="true"
																tag_size="small"
																:closable="false"
																type="danger"
														>
														</child-tag>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>

</template>

<script>
    import ChildTag from '@/components/child/tag' // tag子组件

    export default {
        name: "index",
        components: {
            ChildTag,
        },
        data() {
            return {
                value:{
                    name: "Cox",
                    wechat: "minhung13",
                    description: "到了最后,我们都变成了曾经最讨厌的样子",
                    email: "job@minhung.me",
                    company: "xx公司",
                    department: "xx部门",
                    position: "后端开发工程师",
                    address: "深圳罗湖",
                    tag:'',
                    avatar: "",
                },
            }
        },
	    created() {
            this.$api.api_all.get_user_detail_api( // 获取用户详细信息
            ).then((response)=>{
                this.value = response.data.results[0]; // 完成的后端请求数据
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            });
        }
    }
</script>

