<template>
<i-input>
        <i-select :model.sync="select3" slot="prepend" style="width: 80px">
            <i-option value="day">日活</i-option>
            <i-option value="month">月活</i-option>
        </i-select>
        <i-button slot="append" icon="ios-search"></i-button>
    </i-input>
</template>
<script type="text/javascript">
	export default{
		
	}
</script>