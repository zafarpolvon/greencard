<template>
    <div class="">
        <div class="container mx-auto px-4">
            <div class="flex justify-between py-4">
                <div>
                    <h4 class="text-white text-3xl"><span class="green__text">G</span>reen<span class="green__text">C</span>ard<span class="green__text">U</span>z</h4>
                </div>
                <div class="flex justify-between flex-row">
                   
                    <div class="flex items-center justify-center w-full mb-12">
                        <div class="mr-4 text-white font-medium">
                            Uz
                        </div>
                        <label for="toogleA" class="flex items-center cursor-pointer">
                            <!-- toggle -->
                            <div class="relative">
                            <!-- input -->
                            <input id="toogleA" type="checkbox" v-model="locales" :value="locale" @change="check(locales)" class="sr-only" />
                            <!-- line -->
                            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                            <!-- dot -->
                            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                            <!-- label -->
                            <div class="ml-3 text-white font-medium">
                            Rus
                            </div>
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
        locale: null,
        locales: true
    }),
    methods: {
        check: function(e) {
            if(this.locales) {
                this.locale = 'ru-RU'
            } else {
                this.locale = 'uz-UZ'
            }
            console.log(this.locale);
            this.$store.commit('changeLocale', this.locale)
        }
    },
    computed: {
        locale() {
            return this.$store.getters.locale
        },
    },
    components: {
    }
}
</script>
<style scoped>
    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #00ad48;
    }
    .green__text {
        color: #00ad48;
    }
</style>
