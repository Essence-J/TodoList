<template>
    <div class="todo-info">
        <span class="total">{{total}} item left</span>
        <div class="tabs">
            <a :class="state == item ? 'active' : ''" v-for="(item, index) in states" :key="index" @click="toggleState(item)">{{item}}</a>
        </div>
        <button class="clear" @click="clearCompleted">Clear Completed</button>
    </div>
</template>

<script>
export default {
    name: 'TodoInfo',
    props: {
        total: Number
    },
    data() {
        return {
            states: ['all', 'active', 'completed'],
            state: 'all'
        }
    },
    methods: {
        toggleState(state) {
            this.state = state,
            this.$emit('toggleState', state)
        },
        clearCompleted() {
            this.$emit('clearCompleted')
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'
@import '~styles/mixins.styl'


    .todo-info 
        display flex
        justify-content space-between
        padding 5px 10px
        font-weight 400
        line-height 30px
        border-top 1px solid rgba(0, 0, 0, 0.1)

        .total
            color $red
        
        .tabs
            display flex
            justify-content space-between
            width 200px

            a
                padding 0 10px
                border 1px solid $lightred
                border-radius 5px

                &.active
                    background-color $lightred
                    color #fff

                &:hover
                    cursor pointer

        .clear 
            padding 0 10px
            background-color $green
            border-radius 5px
            color #fff
            cleanDefaultStyle()

            &:hover
                cursor pointer

</style>