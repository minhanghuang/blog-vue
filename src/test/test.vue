<style lang="scss" scoped>

</style>

<template>
	<div id="main">
		<mavon-editor
			v-model="value"
			:toolbarsFlag="true"
		>
		</mavon-editor>
	</div>
</template>

<script>
    export default {
        name: "blogdetail",
        components: {},
        data() {
            return {
                value:"> app",
            }
        },
    }
</script>

