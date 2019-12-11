<style lang="scss" scoped>
	.block{
		margin-top: 100px;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;background-color: white">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="width: 100%;min-height: 700px;background-color: white">
				<Col span="8" offset="8" >
					<div class="block">
						<el-timeline>
							<el-timeline-item timestamp="2019/10" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>工作第二年</h4>
									<p>自学Vue,第一次完全依靠官方文档自学</p>
									<p>每天下班,花3个小时,两周完成一个后台管理系统的框架</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/06" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>大四毕业</h4>
									<p>第一份正式的工作,秉书网络文化有限公司</p>
									<p>一个人负责公司的所有项目的后端接口开发和项目部署</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2017/09" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>大四</h4>
									<p>自学Python web,开始接触web相关的知识</p>
									<p>使用Django框架搭建我的第一个博客</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2016/09" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>大三</h4>
									<p>自学ARM,开始接触老师承接外面的项目</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2016/04" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>大二</h4>
									<p>使用单片机制作计算器,设计电路图发给工厂做出电路板</p>
									<p>进入老师的实验室学习</p>
									<p>暑假参加全国大学生电子设计竞赛,获得三等奖,作品(通过电磁自动寻迹小车)在全辽宁耗时第二</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2015/07" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>大一</h4>
									<p>暑假自学51单片机,使用C语言控制芯片,制作简易的钟表</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2014/09" placement="top" icon="el-icon-s-promotion" size='large' type='primary'>
								<el-card>
									<h4>第一次接触编程(C语言)</h4>
									<p>Hello Work</p>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    import MyHeadercom from "@/components/myheader/herdercom/"

    export default {
        name: "MymainTimeline",
        components: {},
        data() {
            return {}
        },
    }
</script>

